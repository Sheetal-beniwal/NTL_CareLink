import React from 'react';
import Link from 'next/link';
import { Settings, Database, Users, LayoutDashboard, FileText } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-medical-dark text-white flex flex-col shrink-0 overflow-y-auto">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold">NTL Admin</h2>
          <p className="text-sm text-gray-400 mt-1">Management Portal</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/registrations" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
            <Users size={20} />
            <span className="font-medium">Registrations</span>
          </Link>
          <Link href="/admin/cms" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-medical-primary text-white shadow-md transition-colors">
            <FileText size={20} />
            <span className="font-medium">Content (CMS)</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm text-gray-400">
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-medical-primary/20 flex items-center justify-center text-medical-primary font-bold">
              A
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto bg-slate-50 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
