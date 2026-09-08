import React, { useState, useMemo } from 'react';
import { 
  ShieldAlert, 
  MapPin, 
  TrendingUp, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  X, 
  PhoneCall, 
  CheckCircle2, 
  ExternalLink,
  Radio,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { REAL_SCAM_CASES, SCAM_CATEGORIES, RealScamCase } from '../../data/realScamCases';

export const LiveFraudTracker: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Cases');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(null);

  // Filter cases based on category and search query
  const filteredCases = useMemo(() => {
    return REAL_SCAM_CASES.filter((c) => {
      const matchesCategory = selectedCategory === 'All Cases' || c.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.keyRedFlag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedCaseId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold tracking-tight shadow-xs">
            <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>LIVE INCIDENT RADAR • NATIONWIDE VERIFIED CASES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Real Cyber Crime Incidents in India
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Documented real-life cases, active fraud rings, and verified police advisories across Indian states. Learn how scammers operate before they target you.
          </p>
        </div>

        {/* Live Source Badge */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-2xs self-start md:self-auto shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
          <div className="text-left">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Source Feed</div>
            <div className="text-xs font-black text-slate-800">I4C / State Cyber Cells</div>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="space-y-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search recent scams by keyword, city (e.g. Delhi, Bengaluru, Mumbai), or tactic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
          {SCAM_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            const count = category === 'All Cases' 
              ? REAL_SCAM_CASES.length 
              : REAL_SCAM_CASES.filter(c => c.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CASE INCIDENTS GRID */}
      {filteredCases.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-3">
          <ShieldAlert className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-700">No matching incident cases found.</p>
          <button
            onClick={() => { setSelectedCategory('All Cases'); setSearchQuery(''); }}
            className="text-xs text-blue-600 hover:underline font-bold"
          >
            Reset filters to view all real incidents
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCases.map((incident) => {
            const isExpanded = expandedCaseId === incident.id;

            return (
              <div
                key={incident.id}
                className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md ${
                  isExpanded ? 'border-blue-400 ring-2 ring-blue-100' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="p-5 sm:p-6 space-y-3.5">
                  
                  {/* Incident Meta & Badges */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{incident.location}</span>
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                      {incident.badge}
                    </span>
                  </div>

                  {/* Incident Title */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {incident.title}
                  </h3>

                  {/* Financial Loss / Impact Highlight */}
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-150 text-xs">
                    <span className="text-slate-500 font-medium">Financial Impact:</span>
                    <span className="font-extrabold text-red-600">{incident.financialImpact}</span>
                  </div>

                  {/* Summary of Incident */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {incident.summary}
                  </p>

                  {/* Key Red Flag Callout */}
                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-2.5 text-xs text-amber-900 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-[11px] text-amber-950 uppercase tracking-tight">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>The Critical Red Flag</span>
                    </div>
                    <p className="leading-snug text-[11px] text-amber-900">
                      {incident.keyRedFlag}
                    </p>
                  </div>

                  {/* Expanded Step-by-Step Breakdown */}
                  {isExpanded && (
                    <div className="pt-2 border-t border-slate-100 space-y-3 animate-fadeIn">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                          <span>Modus Operandi (How It Happened):</span>
                        </h4>
                        <ul className="space-y-1.5">
                          {incident.howItUnfolded.map((step, idx) => (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                              <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="leading-snug">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Official Police Advisory */}
                      <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-2.5 text-xs text-emerald-950 space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-[11px] text-emerald-900">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Police Safety Advisory</span>
                        </div>
                        <p className="text-[11px] text-emerald-900 leading-snug">
                          {incident.policeAdvisory}
                        </p>
                      </div>

                      {/* Authority Source */}
                      <div className="text-[10px] text-slate-400 font-medium pt-1">
                        Verified via: {incident.sourceAuthority}
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Action Footer */}
                <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {incident.reportedTime}
                  </span>

                  <button
                    onClick={() => toggleExpand(incident.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>{isExpanded ? 'Less Details' : 'Full Modus Operandi'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* BOTTOM ACTION BANNER */}
      <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <PhoneCall className="w-5 h-5 text-white animate-bounce" />
          </div>
          <div>
            <h4 className="text-sm font-bold">Defrauded or Suspicious Call Right Now?</h4>
            <p className="text-xs text-red-100">
              Dial <strong>1930</strong> immediately within the 1-2 hour Golden Hour to freeze bank transactions before money leaves.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
          <a
            href="tel:1930"
            className="flex-1 sm:flex-none px-4 py-2 bg-white hover:bg-red-50 text-red-700 font-bold text-xs rounded-xl transition-all text-center shadow-xs"
          >
            Call 1930 Now
          </a>
          <Link
            to="/if-scammed"
            className="flex-1 sm:flex-none px-4 py-2 bg-black/20 hover:bg-black/30 text-white font-semibold text-xs rounded-xl transition-colors text-center"
          >
            View Checklist →
          </Link>
        </div>
      </div>

    </section>
  );
};
