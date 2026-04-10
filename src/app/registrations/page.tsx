'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Search, 
  ExternalLink, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Stethoscope, 
  Calendar,
  Layers
} from 'lucide-react';

interface Registration {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  location?: string;
  service: string;
  message?: string;
  submittedAt: string;
}

export default function RegistrationsDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReg, setSelectedReg] = useState<Registration | null>(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('/api/registrations');
        const data = await response.json();
        setRegistrations(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const filteredRegistrations = registrations.filter(reg => 
    reg.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    // We can still trigger the CSV/Excel export if they really want it, 
    // but the main goal was to show data here.
    window.location.href = '/api/registrations/csv'; 
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Registration Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Manage and view all incoming patient inquiries synced with Google Sheets.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:border-medical-primary transition-colors shadow-sm"
            >
              <Download size={18} />
              <span>Export CSV</span>
            </button>
            <a
              href="https://docs.google.com/spreadsheets/d/1v_vQd6p9g7Y2U3hY9f4Z2y-9zPQ_U1O3_vN_vQd6p9g" // Placeholder Sheet Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-medical-primary text-white rounded-xl hover:bg-medical-dark transition-all shadow-[0_8px_20px_rgba(0,163,173,0.3)]"
            >
              <ExternalLink size={18} />
              <span>View Google Sheet</span>
            </a>
          </div>
        </div>

        {/* Search & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-3 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, email or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-medical-primary focus:border-transparent outline-none transition-all shadow-sm text-slate-900 dark:text-white"
            />
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col justify-center shadow-sm">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Registrations</span>
            <span className="text-3xl font-bold text-medical-primary">{registrations.length}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table Area */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                      <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Patient Details</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Service</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Date</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {isLoading ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-20 text-center">
                          <div className="flex flex-col items-center gap-4 text-slate-400">
                            <div className="w-10 h-10 border-4 border-slate-200 border-t-medical-primary rounded-full animate-spin"></div>
                            <span>Loading registrations...</span>
                          </div>
                        </td>
                      </tr>
                    ) : filteredRegistrations.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-20 text-center text-slate-400">
                          No registrations found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredRegistrations.map((reg) => (
                        <tr 
                          key={reg._id}
                          onClick={() => setSelectedReg(reg)}
                          className={`group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${selectedReg?._id === reg._id ? 'bg-medical-primary/5 dark:bg-medical-primary/10' : ''}`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-medical-primary transition-colors">
                                {reg.fullName}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                {reg.email}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-medical-primary/10 text-medical-primary dark:bg-medical-primary/20">
                              {reg.service}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                            {new Date(reg.submittedAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <ChevronRight size={18} className="text-slate-300 group-hover:text-medical-primary transform group-hover:translate-x-1 transition-all" />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              {selectedReg ? (
                <motion.div
                  key={selectedReg._id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl sticky top-32"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-medical-primary/10 rounded-2xl flex items-center justify-center text-medical-primary font-bold text-2xl">
                      {selectedReg.fullName.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">{selectedReg.fullName}</h2>
                      <p className="text-sm text-slate-500">Patient Identity: {selectedReg._id.slice(-6).toUpperCase()}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-400">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email Address</p>
                        <p className="text-slate-900 dark:text-slate-200 font-medium">{selectedReg.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-400">
                        <Phone size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Phone Number</p>
                        <p className="text-slate-900 dark:text-slate-200 font-medium">{selectedReg.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-400">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Location</p>
                        <p className="text-slate-900 dark:text-slate-200 font-medium">{selectedReg.location || 'Not provided'}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-400">
                        <Stethoscope size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Requested Service</p>
                        <p className="text-slate-900 dark:text-slate-200 font-medium">{selectedReg.service}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-400">
                        <Calendar size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Submission Date</p>
                        <p className="text-slate-900 dark:text-slate-200 font-medium">
                          {new Date(selectedReg.submittedAt).toLocaleDateString()} at {new Date(selectedReg.submittedAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Patient Message</p>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                        "{selectedReg.message || 'No additional notes provided by the patient.'}"
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-dashed rounded-3xl p-12 text-center h-[600px] flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-300">
                    <Layers size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Select a registration</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-[240px] mx-auto">
                    Choose a record from the list to view detailed patient information and messages.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
