import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  queryCandidateKeywords,
  convertKeywordsToCSV,
  generateContentBrief,
  LOCATIONS,
  TECHNOLOGIES,
} from '../data/keywordDatabase';
import {
  Search,
  Download,
  Filter,
  FileText,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Database,
  Layers,
  Sparkles,
  TrendingUp,
  X,
  Copy,
  Check,
} from 'lucide-react';

export default function SeoAdminPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedIntent, setSelectedIntent] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeBrief, setActiveBrief] = useState(null);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const pageSize = 25;

  const queryResult = useMemo(() => {
    return queryCandidateKeywords({
      search: searchTerm,
      category: selectedCategory,
      location: selectedLocation,
      intent: selectedIntent,
      priority: selectedPriority,
      page: currentPage,
      pageSize,
    });
  }, [searchTerm, selectedCategory, selectedLocation, selectedIntent, selectedPriority, currentPage]);

  const handleExportCSV = () => {
    // Export full filtered slice (up to 1,000 for browser safety)
    const exportResult = queryCandidateKeywords({
      search: searchTerm,
      category: selectedCategory,
      location: selectedLocation,
      intent: selectedIntent,
      priority: selectedPriority,
      page: 1,
      pageSize: 1500,
    });
    const csvData = convertKeywordsToCSV(exportResult.keywords);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `surxtech-keywords-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenBrief = (keywordItem) => {
    const brief = generateContentBrief(keywordItem);
    setActiveBrief(brief);
    setCopiedBrief(false);
  };

  const handleCopyBrief = () => {
    if (!activeBrief) return;
    const text = `CONTENT BRIEF: ${activeBrief.targetKeyword}
Target URL: ${activeBrief.targetUrl}
Search Intent: ${activeBrief.searchIntent}
Recommended Title: ${activeBrief.recommendedTitle}
Recommended H1: ${activeBrief.recommendedH1}
Meta Description: ${activeBrief.suggestedMetaDescription}
Target Audience: ${activeBrief.targetAudience}
Recommended Schema: ${activeBrief.recommendedSchema}

Recommended Sections:
${activeBrief.recommendedSections.join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 3000);
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '90vh' }}>
      <SEO
        title="SEO & Keyword Management Engine | SURXTECH Internal"
        description="Internal SEO keyword database and content brief generator for SURXTECH."
        canonical="/seo-admin"
      />

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
          <div>
            <div className="s-label" style={{ marginBottom: '8px' }}>
              <Database size={14} style={{ marginRight: '6px' }} /> Scalable SEO Management Engine
            </div>
            <h1 className="s-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '8px' }}>
              Keyword Research &amp; <span className="highlight-text">Mapping Dashboard</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '680px', margin: 0 }}>
              Supporting 100,000+ candidate keywords mapped to production landing pages across Tamil Nadu. Filter, generate briefs, and export datasets.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handleExportCSV}
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', fontSize: '14px' }}
              title="Download filtered keywords as CSV"
            >
              <Download size={16} /> Export CSV ({queryResult.total.toLocaleString()})
            </button>
            <Link
              to="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', fontSize: '14px' }}
            >
              <ExternalLink size={16} /> View Live Sitemap.xml
            </Link>
          </div>
        </div>

        {/* KPI Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '36px' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '22px 24px', boxShadow: 'var(--shadow-xs)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
              <span>Total Candidate Combinations</span>
              <Database size={18} color="var(--blue)" />
            </div>
            <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--ink)', marginTop: '10px' }}>
              124,800+
            </div>
            <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px', fontWeight: 600 }}>
              ✓ Programmatically Expandable
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '22px 24px', boxShadow: 'var(--shadow-xs)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
              <span>Active Indexed Matrix Pool</span>
              <Layers size={18} color="#8b5cf6" />
            </div>
            <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--ink)', marginTop: '10px' }}>
              {queryResult.total.toLocaleString()}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
              Deduplicated Target Keywords
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '22px 24px', boxShadow: 'var(--shadow-xs)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
              <span>Locations Covered in TN</span>
              <MapPin size={18} color="#10b981" />
            </div>
            <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--ink)', marginTop: '10px' }}>
              {LOCATIONS.length} Cities
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
              Nilakottai, Dindigul, Madurai +
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '22px 24px', boxShadow: 'var(--shadow-xs)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
              <span>Technologies Tracked</span>
              <Sparkles size={18} color="#f59e0b" />
            </div>
            <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--ink)', marginTop: '10px' }}>
              {TECHNOLOGIES.length} Stacks
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
              React, Next, MERN, Python, AI/ML
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', flex: '1 1 260px' }}>
            <Search size={16} color="var(--muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search keyword or technology..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="f-inp"
              style={{ paddingLeft: '38px', height: '42px', fontSize: '13.5px' }}
            />
          </div>

          {/* Category Filter */}
          <div style={{ flex: '0 1 180px' }}>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="f-sel"
              style={{ height: '42px', fontSize: '13.5px' }}
            >
              <option value="all">All Categories</option>
              <option value="Business">Business Solutions</option>
              <option value="Student Projects">Student Projects</option>
              <option value="Long-Tail / Guides">Guides &amp; Blog</option>
            </select>
          </div>

          {/* Location Filter */}
          <div style={{ flex: '0 1 170px' }}>
            <select
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                setCurrentPage(1);
              }}
              className="f-sel"
              style={{ height: '42px', fontSize: '13.5px' }}
            >
              <option value="all">All Locations (TN)</option>
              {LOCATIONS.map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Intent Filter */}
          <div style={{ flex: '0 1 160px' }}>
            <select
              value={selectedIntent}
              onChange={(e) => {
                setSelectedIntent(e.target.value);
                setCurrentPage(1);
              }}
              className="f-sel"
              style={{ height: '42px', fontSize: '13.5px' }}
            >
              <option value="all">All Search Intents</option>
              <option value="Commercial">Commercial</option>
              <option value="Transactional">Transactional</option>
              <option value="Informational">Informational</option>
              <option value="Local-Direct">Local Direct</option>
              <option value="Local-Commercial">Local Commercial</option>
            </select>
          </div>

          {/* Priority Filter */}
          <div style={{ flex: '0 1 150px' }}>
            <select
              value={selectedPriority}
              onChange={(e) => {
                setSelectedPriority(e.target.value);
                setCurrentPage(1);
              }}
              className="f-sel"
              style={{ height: '42px', fontSize: '13.5px' }}
            >
              <option value="all">All Priorities</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>
          </div>
        </div>

        {/* Keyword Table */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-xs)' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-subtle, rgba(0,0,0,0.02))', borderBottom: '1px solid var(--border)', color: 'var(--muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '14px 18px', width: '100px' }}>ID</th>
                  <th style={{ padding: '14px 18px' }}>Target Keyword</th>
                  <th style={{ padding: '14px 18px' }}>Category</th>
                  <th style={{ padding: '14px 18px' }}>Location</th>
                  <th style={{ padding: '14px 18px' }}>Mapped URL</th>
                  <th style={{ padding: '14px 18px' }}>Search Intent</th>
                  <th style={{ padding: '14px 18px' }}>Priority</th>
                  <th style={{ padding: '14px 18px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {queryResult.keywords.map((k) => (
                  <tr key={k.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}>
                    <td style={{ padding: '14px 18px', fontFamily: 'monospace', color: 'var(--muted)', fontSize: '12px' }}>
                      {k.id}
                    </td>
                    <td style={{ padding: '14px 18px', fontWeight: 600, color: 'var(--ink)' }}>
                      <div>{k.keyword}</div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                        Tech: <span style={{ color: 'var(--blue)' }}>{k.technology}</span> · Vol: {k.searchVolumeTier}
                      </div>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span
                        style={{
                          padding: '3px 8px',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: 700,
                          background: k.category === 'Business' ? 'rgba(37,99,235,0.08)' : 'rgba(16,185,129,0.08)',
                          color: k.category === 'Business' ? 'var(--blue)' : '#059669',
                        }}
                      >
                        {k.category}
                      </span>
                    </td>
                    <td style={{ padding: '14px 18px', color: 'var(--ink)' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} color="var(--muted)" /> {k.targetLocation}
                      </div>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <Link
                        to={k.targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}
                      >
                        {k.targetUrl} <ExternalLink size={11} />
                      </Link>
                    </td>
                    <td style={{ padding: '14px 18px', color: 'var(--muted)' }}>
                      {k.searchIntent}
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: k.priority === 'Critical' ? '#ef4444' : k.priority === 'High' ? '#f59e0b' : 'var(--muted)',
                        }}
                      >
                        {k.priority}
                      </span>
                    </td>
                    <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                      <button
                        onClick={() => handleOpenBrief(k)}
                        style={{
                          background: 'transparent',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          padding: '6px 12px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          color: 'var(--ink)',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <FileText size={12} /> Brief
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
              Showing {Math.min(queryResult.total, (currentPage - 1) * pageSize + 1)} to {Math.min(queryResult.total, currentPage * pageSize)} of {queryResult.total.toLocaleString()} filtered keywords
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  opacity: currentPage === 1 ? 0.5 : 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ChevronLeft size={16} /> Prev
              </button>
              <span style={{ fontSize: '13px', fontWeight: 600, padding: '0 8px' }}>
                Page {currentPage} of {queryResult.totalPages || 1}
              </span>
              <button
                disabled={currentPage >= queryResult.totalPages}
                onClick={() => setCurrentPage((p) => Math.min(queryResult.totalPages, p + 1))}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  cursor: currentPage >= queryResult.totalPages ? 'not-allowed' : 'pointer',
                  opacity: currentPage >= queryResult.totalPages ? 0.5 : 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Brief Modal */}
        {activeBrief && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.6)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setActiveBrief(null)}
          >
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                maxWidth: '720px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '32px',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveBrief(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--muted)',
                }}
              >
                <X size={20} />
              </button>

              <div className="s-label" style={{ marginBottom: '8px' }}>
                <FileText size={14} style={{ marginRight: '6px' }} /> Automated SEO Content Brief
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>
                {activeBrief.targetKeyword}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px', fontSize: '13.5px' }}>
                <div style={{ background: 'var(--bg-subtle, rgba(0,0,0,0.02))', padding: '12px 16px', borderRadius: '10px' }}>
                  <div style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', fontWeight: 700 }}>Target URL</div>
                  <div style={{ color: 'var(--blue)', fontWeight: 600, wordBreak: 'break-all', marginTop: '2px' }}>{activeBrief.targetUrl}</div>
                </div>
                <div style={{ background: 'var(--bg-subtle, rgba(0,0,0,0.02))', padding: '12px 16px', borderRadius: '10px' }}>
                  <div style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', fontWeight: 700 }}>Search Intent</div>
                  <div style={{ color: 'var(--ink)', fontWeight: 600, marginTop: '2px' }}>{activeBrief.searchIntent}</div>
                </div>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)' }}>Recommended Page Title (50-60 chars)</label>
                <div style={{ padding: '10px 14px', background: 'var(--bg-subtle, rgba(0,0,0,0.02))', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginTop: '4px' }}>
                  {activeBrief.recommendedTitle}
                </div>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)' }}>Recommended H1 Heading</label>
                <div style={{ padding: '10px 14px', background: 'var(--bg-subtle, rgba(0,0,0,0.02))', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginTop: '4px' }}>
                  {activeBrief.recommendedH1}
                </div>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)' }}>Meta Description (150-160 chars)</label>
                <div style={{ padding: '10px 14px', background: 'var(--bg-subtle, rgba(0,0,0,0.02))', borderRadius: '8px', fontSize: '13.5px', color: 'var(--ink)', lineHeight: '1.6', marginTop: '4px' }}>
                  {activeBrief.suggestedMetaDescription}
                </div>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)' }}>Target Audience Definition</label>
                <div style={{ padding: '10px 14px', background: 'var(--bg-subtle, rgba(0,0,0,0.02))', borderRadius: '8px', fontSize: '13.5px', color: 'var(--muted)', lineHeight: '1.6', marginTop: '4px' }}>
                  {activeBrief.targetAudience}
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)' }}>Recommended Section Outlines</label>
                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle, rgba(0,0,0,0.02))', borderRadius: '8px', marginTop: '4px' }}>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', lineHeight: '1.8', color: 'var(--ink)' }}>
                    {activeBrief.recommendedSections.map((sec, i) => (
                      <li key={i}>{sec}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  onClick={handleCopyBrief}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  {copiedBrief ? <Check size={16} /> : <Copy size={16} />}
                  {copiedBrief ? 'Copied to Clipboard!' : 'Copy Full Content Brief'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
