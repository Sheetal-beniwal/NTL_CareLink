'use client';

import React, { useCallback, useLayoutEffect, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Users, Target, Globe, Phone, Mail } from 'lucide-react';

const useSafeLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
import ThemeToggle from './ThemeToggle';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['rgba(0,163,173,0.15)', 'rgba(0,59,92,0.45)', 'rgba(0,163,173,0.3)'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = false,
  className,
  logoUrl = '/ntl_logo.jpeg',
  menuButtonColor = '#003B5C',
  openMenuButtonColor = '#003B5C',
  changeMenuColorOnOpen = true,
  accentColor = '#00A3AD',
  isFixed = true,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose
}: StaggeredMenuProps) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  // Scroll visibility
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement | null>(null);

  // Hamburger refs
  const lineTopRef = useRef<HTMLSpanElement | null>(null);
  const lineMidRef = useRef<HTMLSpanElement | null>(null);
  const lineBotRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Animation | null>(null);
  const spinTweenRef = useRef<gsap.core.Animation | null>(null);
  const colorTweenRef = useRef<gsap.core.Animation | null>(null);
  const headerTweenRef = useRef<gsap.core.Tween | null>(null);

  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);

  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

  useSafeLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const backdrop = backdropRef.current;

      const top = lineTopRef.current;
      const mid = lineMidRef.current;
      const bot = lineBotRef.current;
      const icon = iconRef.current;

      if (!panel || !top || !mid || !bot || !icon || !backdrop) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });
      gsap.set(backdrop, { opacity: 0, visibility: 'hidden' });

      // Hamburger initial states
      gsap.set(top, { y: -4 });
      gsap.set(mid, { opacity: 1 });
      gsap.set(bot, { y: 4 });

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });

      // Header initialization
      if (headerRef.current) {
        gsap.set(headerRef.current, { yPercent: 0, opacity: 1, visibility: 'visible' });
      }
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  // Scroll behavior
  React.useEffect(() => {
    const handleScroll = () => {
      if (openRef.current) return; // Don't hide header if menu is open

      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      headerTweenRef.current?.kill();

      if (currentScrollY < 50) {
        // At the TOP - always show
        headerTweenRef.current = gsap.to(headerRef.current, { yPercent: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        // Scrolling DOWN - hide
        headerTweenRef.current = gsap.to(headerRef.current, { yPercent: -100, opacity: 0, duration: 0.4, ease: 'power2.inOut' });
      } else {
        // Scrolling UP - show
        headerTweenRef.current = gsap.to(headerRef.current, { yPercent: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    const backdrop = backdropRef.current;
    if (!panel || !backdrop) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    ) as HTMLElement[];
    const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 5 });
    if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    // Backdrop animation
    tl.to(backdrop, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }, 0);

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

        tl.to(
          itemEls,
          { 
            yPercent: 0, 
            rotate: 0, 
            duration: 0.8, 
            ease: 'power4.out', 
            stagger: { each: 0.08, from: 'start' },
            onComplete: () => {
              gsap.set(itemEls, { clearProps: 'transform,rotate' });
            }
          },
          itemsStart
        );

      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.5, ease: 'power2.out', ['--sm-num-opacity' as any]: 1, stagger: { each: 0.06, from: 'start' } },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;

      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.4, ease: 'power2.out' }, socialsStart);
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: 'power3.out',
            stagger: { each: 0.06, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    const backdrop = backdropRef.current;
    if (!panel || !backdrop) return;

    const all: HTMLElement[] = [...layers, panel];
    closeTweenRef.current?.kill();

    const offscreen = position === 'left' ? -100 : 100;

    const tl = gsap.timeline({
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 5 });

        const numberEls = Array.from(
          panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
        ) as HTMLElement[];
        if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });

        const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        busyRef.current = false;
      }
    });

    tl.to(all, { xPercent: offscreen, duration: 0.32, ease: 'power3.in', overwrite: 'auto' }, 0);
    tl.to(backdrop, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, 0.1);

    closeTweenRef.current = tl;
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    const top = lineTopRef.current;
    const mid = lineMidRef.current;
    const bot = lineBotRef.current;
    if (!icon || !top || !mid || !bot) return;

    spinTweenRef.current?.kill();

    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.5 } });

    if (opening) {
      tl.to(mid, { opacity: 0, x: 5, duration: 0.3 }, 0)
        .to(top, { y: 0, rotate: 45 }, 0)
        .to(bot, { y: 0, rotate: -45 }, 0);
    } else {
      tl.to(mid, { opacity: 1, x: 0, duration: 0.35 }, 0)
        .to(top, { y: -4, rotate: 0, duration: 0.35 }, 0)
        .to(bot, { y: 4, rotate: 0, duration: 0.35 }, 0);
    }
    spinTweenRef.current = tl;
  }, []);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  React.useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
        gsap.set(toggleBtnRef.current, { color: targetColor });
      } else {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  // Removed animateText

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
      // Force header visible immediately
      gsap.to(headerRef.current, { yPercent: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      onMenuClose?.();
      playClose();
    }

    animateIcon(target);
    animateColor(target);
  }, [playOpen, playClose, animateIcon, animateColor, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
    }
  }, [playClose, animateIcon, animateColor, onMenuClose]);

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  React.useEffect(() => {
    if (open) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => document.body.classList.remove('mobile-menu-open');
  }, [open]);

  return (
    <div className={`sm-scope md:hidden fixed inset-0 pointer-events-none z-[1000]`}>
      {/* Background Dimmer */}
      <div 
        ref={backdropRef}
        className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[39] pointer-events-auto"
        onClick={closeMenu}
      />

      {/* HIGH VISIBILITY Navigation Bar */}
      <header
        ref={headerRef}
        className={`staggered-menu-header fixed top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 z-[100] pointer-events-none transition-all duration-300 ${
          (scrolled || open) 
            ? 'bg-white/90 dark:bg-slate-900/95 backdrop-blur-3xl border-b border-gray-100 dark:border-white/10 shadow-xl' 
            : 'bg-white/50 dark:bg-slate-950/50 backdrop-blur-md'
        }`}
        aria-label="Main navigation header"
      >
        <Link href="/" className={`sm-logo flex-shrink-0 flex items-center select-none pointer-events-auto transition-all duration-300 hover:opacity-80 ${open ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`} aria-label="NTL CareLink Home">
          <img
            src={logoUrl || '/ntl_logo.jpeg'}
            alt="Logo"
            className="sm-logo-img block h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-xl flex-shrink-0 border border-white/20 shadow-md"
            draggable={false}
          />
          <span className="ml-2.5 font-black text-xl sm:text-2xl flex items-center transition-all duration-300 tracking-tight text-slate-900 dark:text-white">
            NTL <span className="ml-1 text-medical-primary">CareLink</span>
          </span>
        </Link>
        
        <div className="pointer-events-auto flex items-center transition-all duration-300 mr-3">
          <ThemeToggle />
        </div>

        <button
          ref={toggleBtnRef}
          className={`sm-toggle flex-shrink-0 relative inline-flex items-center border-0 cursor-pointer overflow-visible pointer-events-auto h-12 w-12 justify-center rounded-2xl transition-all duration-300 ${
            open ? 'glass-btn-open' : 'glass-btn-closed'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span
            ref={iconRef}
            className="sm-icon relative w-[24px] h-[24px] shrink-0 inline-flex items-center justify-center [will-change:transform]"
            aria-hidden="true"
          >
            <span
              ref={lineTopRef}
              className="sm-icon-line absolute w-full h-[2.5px] bg-current rounded-full transition-transform"
            />
            <span
              ref={lineMidRef}
              className="sm-icon-line absolute w-full h-[2.5px] bg-current rounded-full transition-all"
            />
            <span
              ref={lineBotRef}
              className="sm-icon-line absolute w-full h-[2.5px] bg-current rounded-full transition-transform"
            />
          </span>
        </button>
      </header>

      {/* MENU PANEL & Pre-Layers */}
      <div
        className={
          (className ? className + ' ' : '') + 'staggered-menu-wrapper absolute inset-0 pointer-events-none z-40'
        }
        style={accentColor ? ({ ['--sm-accent' as any]: accentColor } as React.CSSProperties) : undefined}
        data-position={position}
        data-open={open || undefined}
      >
        <div
          ref={preLayersRef}
          className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
          aria-hidden="true"
        >
          {(() => {
            const raw = colors && colors.length ? colors.slice(0, 4) : ['rgba(0,163,173,0.15)', 'rgba(0,59,92,0.45)', 'rgba(0,163,173,0.3)'];
            let arr = [...raw];
            if (arr.length >= 3) {
              const mid = Math.floor(arr.length / 2);
              arr.splice(mid, 1);
            }
            return arr.map((c, i) => (
              <div
                key={i}
                className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0 backdrop-blur-3xl"
                style={{ background: c }}
              />
            ));
          })()}
        </div>

        <aside
          id="staggered-menu-panel"
          ref={panelRef}
          className="staggered-menu-panel absolute top-0 right-0 h-full w-[80vw] bg-white/45 dark:bg-slate-900/40 border-l border-white/20 flex flex-col p-[7.5em_1.5em_2.5em_1.5em] overflow-y-auto z-10 backdrop-blur-[35px] pointer-events-auto"
          style={{ WebkitBackdropFilter: 'blur(35px)' }}
          aria-hidden={!open}
        >
          <div className="sm-panel-inner flex-1 flex flex-col gap-10">
            <ul
              className="sm-panel-list list-none m-0 p-0 flex flex-col gap-0.5"
              role="list"
              data-numbering={displayItemNumbering || undefined}
            >
              {items && items.length ? (
                items.map((it, idx) => (
                  <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.label + idx}>
                    <Link
                      className="sm-panel-item relative text-medical-dark dark:text-gray-100 font-extrabold text-[1.45rem] cursor-pointer leading-tight tracking-[-0.02em] uppercase transition-[background,color,transform] duration-150 ease-linear inline-block no-underline pr-[1em] active:scale-95"
                      href={it.link}
                      aria-label={it.ariaLabel}
                      data-index={idx + 1}
                      onClick={closeMenu}
                    >
                      <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                        {it.label}
                      </span>
                    </Link>
                  </li>
                ))
              ) : null}
            </ul>

            {displaySocials && socialItems && socialItems.length > 0 && (
              <div className="sm-socials mt-auto pt-8 flex flex-col gap-4" aria-label="Social links">
                <h3 className="sm-socials-title m-0 text-xs font-black uppercase tracking-widest text-medical-primary">Connect</h3>
                <ul
                  className="sm-socials-list list-none m-0 p-0 flex flex-col items-start gap-4"
                  role="list"
                >
                  {socialItems.map((s, i) => (
                    <li key={s.label + i} className="sm-socials-item">
                      <Link
                        href={s.link}
                        target={s.link.startsWith('http') ? "_blank" : undefined}
                        rel={s.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="sm-socials-link text-[0.9rem] font-bold text-gray-700 dark:text-gray-300 no-underline relative inline-block py-[2px] transition-all hover:text-medical-primary active:scale-95 flex items-center gap-2"
                        onClick={closeMenu}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="sm-theme-toggle mt-4 pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between" style={{ opacity: open ? 1 : 0, transition: 'opacity 0.6s ease' }}>
               <span className="text-xs font-black uppercase tracking-widest text-medical-primary">Theme</span>
               <div className="pointer-events-auto">
                 <ThemeToggle />
               </div>
            </div>
          </div>
        </aside>
      </div>

      <style>{`
.sm-scope { transition: none; }
.sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 40; pointer-events: none; }
.sm-scope .staggered-menu-header { transition: background 0.3s ease, backdrop-filter 0.3s ease; }
.sm-scope .sm-logo { display: flex; align-items: center; user-select: none; }
.sm-scope .sm-logo-img { display: block; height: 32px; width: auto; object-fit: contain; }

.sm-scope .sm-toggle { position: relative; display: inline-flex; items-center; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); flex-shrink: 0; font-weight: 900; }
.sm-scope .glass-btn-closed { background: rgba(255, 255, 255, 0.3) !important; color: #003B5C !important; border: 1.5px solid rgba(255,255,255,0.5) !important; }
.sm-scope .glass-btn-open { background: rgba(255, 255, 255, 0.3) !important; color: #003B5C !important; border: 1.5px solid rgba(255,255,255,0.5); }

.sm-scope .sm-toggle:focus-visible { outline: 2px solid #00A3AD55; outline-offset: 4px; border-radius: 4px; }
.sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; }
.sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
.sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
.sm-scope .sm-icon { position: relative; width: 18px; height: 18px; flex: 0 0 18px; display: inline-flex; align-items: center; justify-content: center; will-change: transform; }
.sm-scope .sm-icon-line { will-change: transform, opacity; }

.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.sm-scope .staggered-menu-panel { position: absolute; top: 0; right: 0; width: 50vw; height: 100%; display: flex; flex-direction: column; padding: 6em 1.5em 2em 1.5em; overflow-y: auto; z-index: 10; }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; border-left: none; border-right: 1px solid rgba(255,255,255,0.2); }
.sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: 50vw; pointer-events: none; z-index: 5; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0); }

.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; }
.sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; }
.sm-scope .sm-socials-title { margin: 0; color: #00A3AD; }
.sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; align-items: flex-start; gap: 0.75rem; }
.sm-scope .sm-socials-link { text-decoration: none; position: relative; display: inline-block; transition: all 0.3s ease; }
.sm-scope .sm-socials-link:hover { color: #00A3AD; transform: translateX(4px); }

.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: column; }
.sm-scope .sm-panel-item { position: relative; cursor: pointer; display: inline-block; text-decoration: none; }
.sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-scope .sm-panel-item:hover { color: #003B5C; transform: translateX(4px); }

.dark .sm-scope .sm-panel-item:hover { color: #00A3AD; }

.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 0.8em; font-size: 11px; font-weight: 400; color: #00A3AD; letter-spacing: 0.15em; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }

@media (max-width: 639px) {
  .sm-scope .staggered-menu-panel, .sm-scope .sm-prelayers { width: 80vw; }
  .sm-scope .sm-panel-item { font-size: 1.35rem; }
}
      `}</style>
    </div>
  );
};

export default StaggeredMenu;
