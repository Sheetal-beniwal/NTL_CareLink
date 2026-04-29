'use client';

import React, { useState, useEffect } from 'react';
import { Save, Loader2, AlertCircle, LayoutTemplate, Settings, Plus, Trash2, Image as ImageIcon } from 'lucide-react';

// --- Dynamic Form Components ---
const DynamicField = ({ label, value, onChange }: { label: string, value: any, onChange: (v: any) => void }) => {
  // Helpers
  const formatLabel = (str: string) => {
    if (!str) return '';
    const result = str.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  // 1. Primitive types (String / Number)
  if (typeof value === 'string' || typeof value === 'number') {
    const isImage = typeof value === 'string' && (value.includes('.png') || value.includes('.jpg') || value.includes('.jpeg') || label.toLowerCase().includes('image') || label.toLowerCase().includes('img') || label.toLowerCase() === 'src');
    const isLongText = typeof value === 'string' && (value.length > 60 || label.toLowerCase().includes('desc') || label.toLowerCase().includes('text') || label.toLowerCase().includes('paragraph') || label.toLowerCase().includes('subtitle'));

    return (
      <div className="mb-4">
        {label && <label className="block text-sm font-semibold text-gray-700 mb-1.5">{formatLabel(label)}</label>}
        
        {isImage ? (
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded bg-gray-100 border border-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
              {value ? <img src={value as string} alt="" className="w-full h-full object-cover" /> : <ImageIcon className="text-gray-400" size={20} />}
            </div>
            <input 
              type="text" 
              value={value} 
              onChange={e => onChange(e.target.value)} 
              className="flex-1 p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-medical-primary/20 focus:border-medical-primary outline-none text-sm transition-all"
              placeholder="/images/example.png"
            />
          </div>
        ) : isLongText ? (
          <textarea 
            value={value} 
            onChange={e => onChange(e.target.value)} 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-medical-primary/20 focus:border-medical-primary outline-none text-sm transition-all resize-y min-h-[80px]"
          />
        ) : (
          <input 
            type={typeof value === 'number' ? 'number' : 'text'} 
            value={value} 
            onChange={e => onChange(typeof value === 'number' ? Number(e.target.value) : e.target.value)} 
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-medical-primary/20 focus:border-medical-primary outline-none text-sm transition-all"
          />
        )}
      </div>
    );
  }

  // 2. Arrays
  if (Array.isArray(value)) {
    return (
      <div className="mb-6 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
        {label && (
          <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
            <h4 className="font-bold text-slate-700">{formatLabel(label)}</h4>
            <span className="text-xs font-semibold bg-slate-200 text-slate-600 px-2 py-1 rounded-full">{value.length} items</span>
          </div>
        )}
        <div className="p-4 space-y-4">
          {value.map((item, index) => (
            <div key={index} className="relative bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="absolute top-3 right-3 z-10">
                <button 
                  onClick={() => {
                    const newArr = [...value];
                    newArr.splice(index, 1);
                    onChange(newArr);
                  }}
                  className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors"
                  title="Remove Item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              
              <div className="p-4 pt-5">
                <DynamicField 
                  label="" 
                  value={item} 
                  onChange={(newVal) => {
                    const newArr = [...value];
                    newArr[index] = newVal;
                    onChange(newArr);
                  }} 
                />
              </div>
            </div>
          ))}
          
          <button 
            onClick={() => {
              // Copy structure of the last item, or use empty string
              let template = "";
              if (value.length > 0) {
                // simple deep clone for templates
                template = JSON.parse(JSON.stringify(value[value.length - 1]));
                // Try to clear out values
                if (typeof template === 'object' && template !== null) {
                  Object.keys(template).forEach(k => {
                    if (typeof template[k] === 'string') template[k] = '';
                    if (typeof template[k] === 'number') template[k] = 0;
                  });
                } else {
                  template = typeof template === 'number' ? 0 : "";
                }
              }
              onChange([...value, template]);
            }}
            className="w-full py-3 flex justify-center items-center gap-2 text-sm font-bold text-medical-primary bg-medical-primary/5 hover:bg-medical-primary/10 border border-medical-primary/20 border-dashed rounded-lg transition-colors"
          >
            <Plus size={16} />
            Add New {formatLabel(label)}
          </button>
        </div>
      </div>
    );
  }

  // 3. Objects
  if (typeof value === 'object' && value !== null) {
    return (
      <div className={label ? "mb-6" : ""}>
        {label && (
          <div className="flex items-center gap-2 mb-3">
            <Settings size={16} className="text-gray-400" />
            <h4 className="font-bold text-gray-800 text-lg">{formatLabel(label)}</h4>
          </div>
        )}
        <div className={`grid gap-4 ${!label ? '' : 'p-5 bg-white border border-gray-100 shadow-sm rounded-xl'}`}>
          {Object.keys(value).map(key => {
            // Internal IDs shouldn't be edited directly usually, but we'll show them
            if (key === '_id') return null;
            
            return (
              <DynamicField 
                key={key} 
                label={key} 
                value={value[key]} 
                onChange={(newVal) => {
                  onChange({ ...value, [key]: newVal });
                }} 
              />
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};


// --- Main CMS Page ---
export default function CMSPage() {
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedSection, setSelectedSection] = useState<any | null>(null);
  const [formContent, setFormContent] = useState<any | null>(null);
  
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const res = await fetch('/api/cms');
      const data = await res.json();
      setSections(data);
      if (data.length > 0) {
        handleSelectSection(data[0]);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleSelectSection = (section: any) => {
    setSelectedSection(section);
    // Deep clone content for editing
    setFormContent(JSON.parse(JSON.stringify(section.content)));
    setSaveStatus('idle');
    setErrorMsg('');
  };

  const handleSave = async () => {
    if (!selectedSection || !formContent) return;
    
    setSaveStatus('saving');
    setErrorMsg('');

    try {
      const res = await fetch('/api/cms', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageId: selectedSection.pageId,
          sectionId: selectedSection.sectionId,
          content: formContent
        })
      });
      
      if (!res.ok) throw new Error('Failed to save content');
      
      setSaveStatus('success');
      
      // Update local state so switching back keeps the new data
      setSections(sections.map(s => 
        s._id === selectedSection._id 
          ? { ...s, content: formContent } 
          : s
      ));
      
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (err: any) {
      setErrorMsg(err.message);
      setSaveStatus('error');
    }
  };

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-medical-primary" />
      </div>
    );
  }

  // Group sections by page for the sidebar navigation
  const pages = sections.reduce((acc, curr) => {
    if (!acc[curr.pageId]) acc[curr.pageId] = [];
    acc[curr.pageId].push(curr);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white z-10 shadow-sm relative">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Content Management</h2>
          <p className="text-gray-500 text-sm mt-0.5">Edit your website's text, images, and content blocks without coding.</p>
        </div>
        
        <div className="flex items-center gap-3">
          {saveStatus === 'success' && (
            <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full font-bold">✓ Saved</span>
          )}
          {saveStatus === 'error' && (
            <span className="text-sm text-red-600 bg-red-50 px-3 py-1.5 rounded-full font-bold flex items-center gap-1">
              <AlertCircle size={16} /> Error
            </span>
          )}
          <button
            onClick={handleSave}
            disabled={saveStatus === 'saving'}
            className="flex items-center gap-2 px-6 py-2.5 bg-medical-primary text-white rounded-xl font-bold hover:bg-medical-dark transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:shadow-none"
          >
            {saveStatus === 'saving' ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {saveStatus === 'saving' ? 'Saving...' : 'Publish Changes'}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: Content Menu */}
        <div className="w-72 border-r border-gray-100 bg-gray-50 overflow-y-auto pb-8">
          {Object.keys(pages).map(pageId => (
            <div key={pageId} className="mt-4">
              <div className="px-5 py-2 text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <LayoutTemplate size={14} />
                {pageId} Page
              </div>
              <div className="mt-1 space-y-1 px-3">
                {pages[pageId].map(section => (
                  <button
                    key={section.sectionId}
                    onClick={() => handleSelectSection(section)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                      selectedSection?._id === section._id
                        ? 'bg-white text-medical-primary shadow-sm border border-gray-200/60'
                        : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900 border border-transparent'
                    }`}
                  >
                    <span className="capitalize">{section.sectionId.replace(/_/g, ' ')}</span>
                    {selectedSection?._id === section._id && <div className="w-1.5 h-1.5 rounded-full bg-medical-primary" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Editor Form Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50/50">
          {selectedSection && formContent ? (
            <div className="max-w-4xl mx-auto p-8 pb-24">
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 capitalize">
                  {selectedSection.sectionId.replace(/_/g, ' ')}
                </h3>
                <p className="text-gray-500 mt-1">Make changes to the fields below to update this section on the live site.</p>
              </div>

              {errorMsg && (
                <div className="mb-8 px-6 py-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-start gap-3">
                  <AlertCircle className="mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold">Failed to save</h4>
                    <p className="text-sm opacity-90">{errorMsg}</p>
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                {/* Render the dynamic form */}
                <DynamicField 
                  label="" 
                  value={formContent} 
                  onChange={(newContent) => setFormContent(newContent)} 
                />
              </div>
              
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400 flex-col gap-3">
              <LayoutTemplate size={48} className="opacity-20" />
              <p>Select a section from the left sidebar to edit</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
