import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas';
import { ART_PLATES, PRACTITIONER } from '../lib/site-data';

const DEFAULT_NOTES = [
  {
    id: 'note-1',
    date: 'Studio note',
    category: 'Color Chemistry',
    title: 'Earth Pigment Absorption & Packaging Substrates',
    content: 'Studying how raw umber and burnt sienna dry on unbleached kraft board compared to coated SBS boards. Physical samples help evaluate colour differences that digital mockups may not show.'
  },
  {
    id: 'note-2',
    date: 'Studio note',
    category: 'Anatomy & Form',
    title: 'Observations from CAVA Plaster Cast Sessions',
    content: 'The weight of a line at the clavicle dictates the posture of the entire torso. In packaging dielines, the visual weight of the primary product descriptor plays an identical structural role.'
  },
  {
    id: 'note-3',
    date: 'Studio note',
    category: 'Pedagogy',
    title: 'Teaching Visual Thinking to Young Artists at Openhouse',
    content: 'Students immediately understand negative space when asked to draw the space inside a cup handle rather than the handle itself. Visual thinking is about shifting reference frames.'
  }
];

export default function ArtPage() {
  const [selectedMedium, setSelectedMedium] = useState('all');
  const [activePlate, setActivePlate] = useState(null);
  const [diaryNotes, setDiaryNotes] = useState(DEFAULT_NOTES);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Studio Observation');
  const [newContent, setNewContent] = useState('');
  const [savedStatus, setSavedStatus] = useState('');

  // Load browser-local diary notes
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sivnco_personal_diary_v1');
      if (stored) {
        setDiaryNotes(JSON.parse(stored));
      }
    } catch (e) {}
  }, []);

  const saveDiaryNotes = (updated) => {
    setDiaryNotes(updated);
    try {
      localStorage.setItem('sivnco_personal_diary_v1', JSON.stringify(updated));
      setSavedStatus('Saved to browser storage');
      setTimeout(() => setSavedStatus(''), 2500);
    } catch (e) {}
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newEntry = {
      id: `note-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      category: newCategory,
      title: newTitle.trim(),
      content: newContent.trim()
    };

    const updated = [newEntry, ...diaryNotes];
    saveDiaryNotes(updated);
    setNewTitle('');
    setNewContent('');
  };

  const handleDeleteNote = (id) => {
    const updated = diaryNotes.filter(n => n.id !== id);
    saveDiaryNotes(updated);
  };

  const exportAsJSON = () => {
    const blob = new Blob([JSON.stringify(diaryNotes, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sivnco_art_diary_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportAsMarkdown = () => {
    let md = `# H P SHIVARAJ — ART & SKETCHBOOK DIARY\nExported on: ${new Date().toLocaleDateString()}\n\n---\n\n`;
    diaryNotes.forEach(n => {
      md += `### ${n.title}\n**Date:** ${n.date} | **Category:** ${n.category}\n\n${n.content}\n\n---\n\n`;
    });
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sivnco_art_diary_${new Date().toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredPlates = ART_PLATES.filter(p => {
    if (selectedMedium === 'all') return true;
    if (selectedMedium === 'academic' && (p.notes.includes('CAVA') || p.notes.includes('Cast') || p.notes.includes('Academic'))) return true;
    if (selectedMedium === 'watercolor' && p.medium.toLowerCase().includes('watercolor')) return true;
    if (selectedMedium === 'portrait' && (p.title.includes('Portrait') || p.title.includes('Child') || p.title.includes('Life'))) return true;
    return true;
  });

  return (
    <>
      <Head>
        <title>Art Journal & Digital Sketchbook (WANDER) — H P Shivaraj | SIVNCO</title>
        <meta name="description" content="Classical fine art archive, CAVA academic studies, plein air watercolors, and personal studio diary of H P Shivaraj." />
      </Head>

      <FluidAmbientCanvas />
      <Navbar />

      <main className="min-h-screen bg-[#0A0906] text-[#F0EDE6] pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto font-sans relative z-10">
        
        {/* Header Block */}
        <header className="border-b border-white/10 pb-10 mb-14">
          <div className="br-label acid mb-3">
            ■ 05 // FINE ART ARCHIVE · CAVA GOLD MEDALIST STUDIES
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}>
            Chaos in the <span className="text-[#D4600A]">sketchbook.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F0EDE6]/70 max-w-3xl leading-relaxed">
            The artistic foundation that gives commercial work its emotional specificity. Graduated as <strong className="text-white">Gold Medalist and University Topper (BVA Applied Arts)</strong> from CAVA, University of Mysore. This archive preserves classical academic studies, plein air watercolors, anatomical research, and real-time studio observations.
          </p>

          <div className="flex flex-wrap gap-3 mt-6 text-xs font-mono text-[#F0EDE6]/60">
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">CAVA University of Mysore</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">18 Classical Plates</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Local Studio Diary</span>
            <Link href="/artist-educator/commissions" className="text-[#D4600A] hover:underline px-3 py-1">
              Private Art Commissions →
            </Link>
          </div>
        </header>

        {/* Visual Diary Canonical Link Banner */}
        <div className="bg-[#D4600A]/10 border border-[#D4600A]/30 rounded-2xl p-5 mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[#D4600A] text-xs font-mono tracking-widest uppercase font-bold mb-1">
              CANONICAL VISUAL ARCHIVE
            </div>
            <p className="text-sm sm:text-base text-[#F0EDE6]">
              Looking for chronological sketches, rejected packaging directions, 3D/AI prompts, and early concepts?
            </p>
          </div>
          <Link
            href="/visual-diary"
            className="inline-flex items-center gap-2 bg-[#D4600A] text-[#0A0906] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#e8701a] transition-all"
          >
            Explore Visual Diary →
          </Link>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              { id: 'all', label: 'All 18 Works' },
              { id: 'academic', label: 'Academic & CAVA Rigor' },
              { id: 'watercolor', label: 'Watercolor & Washes' },
              { id: 'portrait', label: 'Portraiture & Form' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedMedium(f.id)}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  selectedMedium === f.id
                    ? 'bg-[#D4600A] text-[#0A0906] border-[#D4600A] font-semibold'
                    : 'bg-white/5 text-[#F0EDE6]/70 border-white/10 hover:border-white/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <span className="text-xs font-mono text-[#F0EDE6]/40">
            Showing {filteredPlates.length} Plates
          </span>
        </div>

        {/* Gallery Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {filteredPlates.map((plate) => (
            <div
              key={plate.id}
              onClick={() => setActivePlate(plate)}
              className="group bg-[#0E0C09] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#D4600A]/50 transition-all duration-300 shadow-xl flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <img
                  src={plate.img}
                  alt={plate.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono border border-white/10 text-[#D4600A]">
                  PLATE {plate.plate}
                </span>
                <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-mono border border-white/10 text-[#F0EDE6]/60">
                  {plate.year}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#F0EDE6] mb-1 group-hover:text-[#D4600A] transition-colors">
                    {plate.title}
                  </h3>
                  <p className="text-xs font-mono text-[#D4600A] mb-3">
                    {plate.medium}
                  </p>
                  <p className="text-xs text-[#F0EDE6]/65 leading-relaxed">
                    {plate.notes}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-[#F0EDE6]/40 flex justify-between items-center">
                  <span>CAVA Foundation</span>
                  <span className="group-hover:translate-x-1 transition-transform">Inspect Plate ↗</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Plate Modal Lightbox */}
        {activePlate && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActivePlate(null)}
          >
            <div 
              className="bg-[#0C0B08] border border-white/20 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActivePlate(null)}
                className="absolute top-5 right-5 text-2xl text-white/60 hover:text-white"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="max-h-[60vh] flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={activePlate.img} 
                  alt={activePlate.title} 
                  className="max-h-[58vh] w-auto object-contain rounded-xl"
                />
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#D4600A] mb-2">
                  <span>PLATE {activePlate.plate} // CAVA ARCHIVE</span>
                  <span>{activePlate.year}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#F0EDE6]">
                  {activePlate.title}
                </h2>
                <p className="text-sm font-mono text-[#F0EDE6]/60 mb-4">
                  {activePlate.medium}
                </p>
                <p className="text-sm text-[#F0EDE6]/80 leading-relaxed max-w-2xl">
                  {activePlate.notes}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Digital Sketchbook & Personal Diary Section */}
        <section className="mt-28 border-t border-white/10 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[#D4600A] text-xs font-mono tracking-widest uppercase mb-2">
                PERSONAL DIGITAL DIARY // PRIVATE SKETCHBOOK NOTES
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}>
                Studio Observations
              </h2>
            </div>

            {/* Export Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={exportAsJSON}
                className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-[#F0EDE6] hover:border-[#D4600A] transition-colors"
                title="Download your notes as JSON file"
              >
                Export JSON
              </button>
              <button
                onClick={exportAsMarkdown}
                className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-[#F0EDE6] hover:border-[#D4600A] transition-colors"
                title="Download your notes as Markdown file"
              >
                Export Markdown
              </button>
            </div>
          </div>

          {/* Privacy Notice Banner */}
          <div className="bg-[#14120E] border border-amber-500/20 rounded-2xl p-4 sm:p-5 mb-8 flex items-start gap-3.5 text-xs text-[#F0EDE6]/75 leading-relaxed font-mono">
            <span className="text-[#D4600A] text-base leading-none">🔒</span>
            <div>
              <strong className="text-white">Privacy Guarantee:</strong> Notes written here are stored strictly in your browser’s local storage (<code>localStorage</code>). No personal notes or reflections are ever transmitted to any remote server or third-party database.
              {savedStatus && <span className="ml-3 text-emerald-400 font-semibold">• {savedStatus}</span>}
            </div>
          </div>

          {/* Diary Notes Feed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {diaryNotes.map((note) => (
              <div 
                key={note.id}
                className="bg-[#0E0C09] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-white/20 transition-all shadow-md"
              >
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#F0EDE6]/50 mb-2">
                    <span className="text-[#D4600A]">{note.category}</span>
                    <span>{note.date}</span>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2 leading-snug">
                    {note.title}
                  </h4>
                  <p className="text-xs text-[#F0EDE6]/70 leading-relaxed">
                    {note.content}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-end">
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="text-[10px] font-mono text-red-400/60 hover:text-red-400 transition-colors"
                    title="Delete note locally"
                  >
                    Delete Note
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* New Note Form */}
          <form onSubmit={handleAddNote} className="bg-[#0C0B08] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white mb-4 font-mono text-xs uppercase tracking-widest text-[#D4600A]">
              + Add a Studio Observation or Sketchbook Thought
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-mono text-[#F0EDE6]/60 mb-1">NOTE TITLE</label>
                <input
                  type="text"
                  placeholder="e.g. Interaction of daylight with raw packaging paper"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4600A]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[#F0EDE6]/60 mb-1">CATEGORY</label>
                <select
                  value={newCategory}
                  onChange={e => setNewCategory(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4600A]"
                >
                  <option value="Studio Observation">Studio Observation</option>
                  <option value="Color Chemistry">Color Chemistry</option>
                  <option value="Anatomy & Form">Anatomy & Form</option>
                  <option value="Pedagogy & Teaching">Pedagogy & Teaching</option>
                  <option value="Packaging Reflection">Packaging Reflection</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[11px] font-mono text-[#F0EDE6]/60 mb-1">OBSERVATION CONTENT</label>
              <textarea
                rows={3}
                placeholder="Write your raw, honest studio thought or design critique here..."
                value={newContent}
                onChange={e => setNewContent(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4600A]"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-[#D4600A] text-[#0A0906] font-semibold rounded-full text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors"
            >
              Save Note Locally
            </button>
          </form>
        </section>

        {/* Cross Link to Other Portals */}
        <nav aria-label="Portal Navigation" className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono">
          <Link href="/journal" className="text-[#F0EDE6]/70 hover:text-[#D4600A] transition-colors flex items-center gap-2">
            <span>←</span>
            <span>UNPACK — Process & Design Journal</span>
          </Link>
          <Link href="/#work" className="text-[#F0EDE6]/70 hover:text-[#D4600A] transition-colors flex items-center gap-2">
            <span>SEE — Selected Work</span>
            <span>→</span>
          </Link>
        </nav>

      </main>

      <Footer />
    </>
  );
}
