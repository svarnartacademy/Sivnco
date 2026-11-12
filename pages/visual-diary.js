import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import { createPortal } from 'react-dom';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas';
import { ART_PLATES, JOURNAL_RECORDS } from '../lib/site-data';

// ─── VISUAL DIARY DATA ENTRIES ───────────────────────────────────────────────

const DIARY_ITEMS = [
  {
    "id": "sketch-desi-bar-gully",
    "discipline": "experiments",
    "badge": "PROJECT IMAGE",
    "badgeColor": "#D4600A",
    "year": "Undated",
    "title": "Desi Energy Bar — Visual 1",
    "medium": "Digital project image",
    "dimensions": "Image archive",
    "img": "/images/jusamazin/desi_bar/runway_handdrawn.jpg",
    "summary": "A retained image from the commercial project archive.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/jusamazin/desi-energy-bar",
    "caseTitle": "Related Packaging Work"
  },
  {
    "id": "sketch-claims-icons",
    "discipline": "experiments",
    "badge": "PROJECT IMAGE",
    "badgeColor": "#D4600A",
    "year": "Undated",
    "title": "Jus’Amazin — Project Image 2",
    "medium": "Digital project image",
    "dimensions": "Image archive",
    "img": "/images/jusamazin/process/draft_packaging_05.jpg",
    "summary": "A retained image from the commercial project archive.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/jusamazin",
    "caseTitle": "Related Packaging Work"
  },
  {
    "id": "sketch-geometric-foundations",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 10",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_10.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "sketch-urban-ink",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 12",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_12.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "rejected-desi-sterile-tech",
    "discipline": "experiments",
    "badge": "PROJECT IMAGE",
    "badgeColor": "#EF4444",
    "year": "Undated",
    "title": "Desi Energy Bar — Visual 5",
    "medium": "Digital project image",
    "dimensions": "Image archive",
    "img": "/images/jusamazin/desi_bar/runway_layout.jpg",
    "summary": "A retained image from the commercial project archive.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/jusamazin/desi-energy-bar",
    "caseTitle": "Related Packaging Work"
  },
  {
    "id": "rejected-white-pouch-system",
    "discipline": "experiments",
    "badge": "PROJECT IMAGE",
    "badgeColor": "#EF4444",
    "year": "Undated",
    "title": "Jus’Amazin — Project Image 6",
    "medium": "Digital project image",
    "dimensions": "Image archive",
    "img": "/images/jusamazin/process/draft_packaging_06.jpg",
    "summary": "A retained image from the commercial project archive.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/jusamazin",
    "caseTitle": "Related Packaging Work"
  },
  {
    "id": "rejected-lilstars-palette",
    "discipline": "experiments",
    "badge": "PROJECT IMAGE",
    "badgeColor": "#EF4444",
    "year": "Undated",
    "title": "Lil’Stars — Packaging Visual 7",
    "medium": "Digital project image",
    "dimensions": "Image archive",
    "img": "/images/jusamazin/lilstars/pancake_berry_blast.png",
    "summary": "A retained image from the commercial project archive.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/jusamazin/lilstars",
    "caseTitle": "Related Packaging Work"
  },
  {
    "id": "influence-ravi-varma",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 6",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_6.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "influence-street-typography",
    "discipline": "experiments",
    "badge": "PROJECT IMAGE",
    "badgeColor": "#D4600A",
    "year": "Undated",
    "title": "Desi Energy Bar — Visual 9",
    "medium": "Digital project image",
    "dimensions": "Image archive",
    "img": "/images/jusamazin/desi_bar/runway_typo.jpg",
    "summary": "A retained image from the commercial project archive.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/jusamazin/desi-energy-bar",
    "caseTitle": "Related Packaging Work"
  },
  {
    "id": "influence-pigment-substrate",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 22",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_22.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-1",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 1",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_1.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-2",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 2",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_2.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-3",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 3",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_3.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-4",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 4",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_4.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-5",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 5",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_5.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-6",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 6",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_6.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-7",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 7",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_7.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-8",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 8",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_8.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-9",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 9",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_9.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-10",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 10",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_10.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-11",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 11",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_11.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-12",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 12",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_12.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-13",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 13",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_13.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-14",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 14",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_14.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-15",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 15",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_15.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-16",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 16",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_16.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-17",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 17",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_17.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-18",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 18",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_18.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-19",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 19",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_19.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-20",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 20",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_20.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-21",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 21",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_21.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-22",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 22",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_22.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "art-plate-23",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 23",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_23.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "exp-3d-glb-jar",
    "discipline": "experiments",
    "badge": "PROJECT IMAGE",
    "badgeColor": "#8B5CF6",
    "year": "Undated",
    "title": "Packaging & Visualization — Image 34",
    "medium": "Digital project image",
    "dimensions": "Image archive",
    "img": "/images/hero_packaging.jpg",
    "summary": "A retained image from the commercial project archive.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/jusamazin",
    "caseTitle": "Related Packaging Work"
  },
  {
    "id": "exp-veo-motion",
    "discipline": "experiments",
    "badge": "PROJECT IMAGE",
    "badgeColor": "#8B5CF6",
    "year": "Undated",
    "title": "Lil’Stars — Packaging Visual 35",
    "medium": "Digital project image",
    "dimensions": "Image archive",
    "img": "/images/jusamazin/lilstars/pancake_choco_delight.png",
    "summary": "A retained image from the commercial project archive.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/jusamazin/lilstars",
    "caseTitle": "Related Packaging Work"
  },
  {
    "id": "exp-press-run-footage",
    "discipline": "experiments",
    "badge": "PROJECT IMAGE",
    "badgeColor": "#3B82F6",
    "year": "Undated",
    "title": "Jus’Amazin — Project Image 36",
    "medium": "Digital project image",
    "dimensions": "Image archive",
    "img": "/images/jusamazin/process/retail_trial_02.jpg",
    "summary": "A retained image from the commercial project archive.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/jusamazin",
    "caseTitle": "Related Packaging Work"
  },
  {
    "id": "pedagogy-svarnart-curriculum",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#0EA5E9",
    "year": "Undated",
    "title": "Art Collection — 16",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_16.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "pedagogy-openhouse-drawing",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#0EA5E9",
    "year": "Undated",
    "title": "Art Collection — 8",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_8.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "progression-refresh-kid",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#EAB308",
    "year": "Undated",
    "title": "Art Collection — 11",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_11.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  },
  {
    "id": "progression-cava-gold-medal",
    "discipline": "fine-art",
    "badge": "ART COLLECTION",
    "badgeColor": "#10B981",
    "year": "Undated",
    "title": "Art Collection — 4",
    "medium": "Personal art collection",
    "dimensions": "Image archive",
    "img": "/images/paintings/painting_4.jpg",
    "summary": "A retained image from the personal art collection.",
    "reflection": "This image is preserved as part of the creative journey. Unverified dates, material descriptions and rejection narratives have been omitted.",
    "caseLink": "/artist-educator",
    "caseTitle": "Art & Education"
  }
];

const DISCIPLINES = [{id:'all',label:'All Entries'},{id:'fine-art',label:'Art Collection'},{id:'experiments',label:'Project Images'}];

const YEARS = ['all', 'Undated'];

export default function VisualDiary() {
  const router = useRouter();
  const dialogRef = useRef(null);
  const [activeDiscipline, setActiveDiscipline] = useState('all');
  const [activeYear, setActiveYear] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Honour links from project cases and browser back/forward navigation.
  useEffect(() => {
    if (!router.isReady) return;
    const discipline = Array.isArray(router.query.discipline) ? router.query.discipline[0] : router.query.discipline;
    const year = Array.isArray(router.query.year) ? router.query.year[0] : router.query.year;
    setActiveDiscipline(DISCIPLINES.some(d => d.id === discipline) ? discipline : 'all');
    setActiveYear(YEARS.includes(year) ? year : 'all');
  }, [router.isReady, router.query.discipline, router.query.year]);

  useEffect(() => {
    if (!activeModalItem) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dialog = dialogRef.current;
    dialog?.querySelector('button')?.focus();
    const trapFocus = (event) => {
      if (event.key !== 'Tab' || !dialog) return;
      const controls = [...dialog.querySelectorAll('button, a[href], [tabindex="0"]')].filter(el => !el.disabled);
      const first = controls[0], last = controls[controls.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', trapFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', trapFocus);
      previousFocus?.focus?.();
    };
  }, [Boolean(activeModalItem)]);

  // Filter items
  const filteredItems = useMemo(() => {
    return DIARY_ITEMS.filter(item => {
      const matchDisc = activeDiscipline === 'all' || item.discipline === activeDiscipline;
      const matchYear = activeYear === 'all' || item.year === activeYear;
      return matchDisc && matchYear;
    });
  }, [activeDiscipline, activeYear]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKey = (e) => {
      if (!activeModalItem) return;
      if (e.key === 'Escape') setActiveModalItem(null);
      if (e.key === 'ArrowRight') {
        const idx = filteredItems.findIndex(i => i.id === activeModalItem.id);
        if (idx !== -1 && idx < filteredItems.length - 1) {
          setActiveModalItem(filteredItems[idx + 1]);
        }
      }
      if (e.key === 'ArrowLeft') {
        const idx = filteredItems.findIndex(i => i.id === activeModalItem.id);
        if (idx > 0) {
          setActiveModalItem(filteredItems[idx - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeModalItem, filteredItems]);

  return (
    <>
      <Head>
        <title>Visual Diary &amp; Creative Record — H P Shivaraj | SIVNCO</title>
        <meta name="description" content="Sketches, rejected directions, fine art studies, 3D experiments, pedagogy, and reflections documenting the creative progression of H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/visual-diary" />
      </Head>

      <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.18)" secondaryColor="rgba(216, 252, 113, 0.08)" />
      <Navbar />

      <main className="min-h-screen bg-[#0A0906] text-[#F0EDE6] pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto font-sans relative z-10">
        
        {/* Editorial Header */}
        <header className="br-section-head border-b border-[#F0EDE6]/10 pb-10 mb-10">
          <div>
            <div className="br-label acid mb-3">
              ■ 02 // PRIMARY ARCHIVE &middot; THE COMPLETE VISUAL DIARY
            </div>

            <h1 style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)', fontWeight: 900, fontSize: 'clamp(38px, 6.4vw, 88px)', lineHeight: 0.96, letterSpacing: '-0.05em', color: '#FFFFFF', margin: '12px 0 0' }}>
              Order in the system.<br />
              <span className="accent">Chaos in the sketchbook.</span>
            </h1>
          </div>

          <p style={{ maxWidth: '520px', color: 'rgba(240,237,230,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            This visual diary preserves the creative collection of H P Shivaraj. Here live the artworks, 
            packaging visuals and experiments collected through the practice. 
            Images remain available without unverified dates or material descriptions. Earlier editorial notes are preserved in the historical archive.
          </p>

          <div className="w-full flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F0EDE6]/08 text-xs font-mono text-[#F0EDE6]/50 uppercase tracking-widest">
            <span>{DIARY_ITEMS.length} Archive Entries</span>
            <span>✦</span>
            <span>Art &amp; Project Images</span>
            <span>✦</span>
            <span>Open an item for context</span>
          </div>
        </header>

        <p className="mb-8"><Link href="/archive/visual-diary" className="underline">Open earlier diary notes and reflections ↗</Link></p>
        {/* Dual-Axis Filter Controls */}
        <div className="mb-10 space-y-5">
          {/* Discipline Filters */}
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#D4600A] mb-2.5">
              Filter by Discipline:
            </div>
            <div className="flex flex-wrap gap-2">
              {DISCIPLINES.map(d => (
                <button
                  key={d.id}
                  onClick={() => setActiveDiscipline(d.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    activeDiscipline === d.id
                      ? 'bg-[#D4600A] text-[#0A0906] font-bold shadow-[0_0_16px_rgba(212,96,10,0.5)]'
                      : 'bg-white/5 text-[#F0EDE6]/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filters */}
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#D4600A] mb-2.5">
              Date information:
            </div>
            <div className="flex flex-wrap gap-2">
              {YEARS.map(y => (
                <button
                  key={y}
                  onClick={() => setActiveYear(y)}
                  className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    activeYear === y
                      ? 'bg-[#D8FC71] text-[#0A0906] font-bold shadow-[0_0_14px_rgba(216,252,113,0.4)]'
                      : 'bg-white/5 text-[#F0EDE6]/60 hover:bg-white/10 hover:text-white border border-white/08'
                  }`}
                >
                  {y === 'all' ? 'All Entries' : y}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Count Feedback */}
        <div className="text-xs font-mono text-[#F0EDE6]/40 mb-6 uppercase tracking-wider">
          Showing {filteredItems.length} of {DIARY_ITEMS.length} entries
        </div>

        {/* Visual Diary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <article
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${item.title}`}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveModalItem(item);
                }
              }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0F0E0B]/80 hover:bg-[#14120D] transition-all duration-300 hover:border-[#D4600A]/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
            >
              {/* Media Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-black/40">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold"
                    style={{
                      background: 'rgba(10,9,6,0.85)',
                      color: item.badgeColor,
                      border: `1px solid ${item.badgeColor}55`,
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    {item.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-[#F0EDE6]/70 bg-black/60 backdrop-blur-sm border border-white/10">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Text Card */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#D4600A] uppercase tracking-wider mb-1.5">
                    {item.medium}
                  </div>
                  <h3 className="font-bold text-lg text-[#F0EDE6] group-hover:text-[#D4600A] transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#F0EDE6]/65 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/08 flex items-center justify-between text-xs font-mono text-[#D8FC71]">
                  <span>Inspect Entry</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Detailed Modal Viewer */}
        {activeModalItem && createPortal((
          <div
            className="fixed inset-0 z-[200000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="diary-entry-title"
              className="bg-[#0F0E0B] border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4600A] hover:text-black transition-colors flex items-center justify-center font-mono text-sm border border-white/20 text-[#F0EDE6]"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                  style={{
                    background: `${activeModalItem.badgeColor}22`,
                    color: activeModalItem.badgeColor,
                    border: `1px solid ${activeModalItem.badgeColor}66`
                  }}
                >
                  {activeModalItem.badge}
                </span>
                <span className="text-xs font-mono text-[#F0EDE6]/60">
                  Year: {activeModalItem.year}
                </span>
                <span className="text-xs font-mono text-[#F0EDE6]/60">
                  ✦
                </span>
                <span className="text-xs font-mono text-[#F0EDE6]/60">
                  Format: {activeModalItem.dimensions}
                </span>
              </div>

              <h2 id="diary-entry-title" className="text-2xl sm:text-4xl font-bold mb-3 text-white">
                {activeModalItem.title}
              </h2>

              <div className="text-xs font-mono text-[#D4600A] uppercase tracking-wider mb-6">
                Medium: {activeModalItem.medium}
              </div>

              {/* Clean Artwork / Visual Display */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/60 mb-6 flex items-center justify-center max-h-[500px]">
                <img
                  src={activeModalItem.img}
                  alt={activeModalItem.title}
                  className="max-h-[500px] w-auto object-contain mx-auto"
                />
              </div>

              {/* Provenance & Reflection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-sm">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8FC71] mb-2">
                    Observation &amp; Context
                  </h4>
                  <p className="text-[#F0EDE6]/80 leading-relaxed">
                    {activeModalItem.summary}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4600A] mb-2">
                    Design Reflection &amp; Significance
                  </h4>
                  <p className="text-[#F0EDE6]/80 leading-relaxed italic">
                    &ldquo;{activeModalItem.reflection}&rdquo;
                  </p>
                </div>
              </div>

              {/* Case Study Cross-Link */}
              {activeModalItem.caseLink && (
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#F0EDE6]/60 uppercase">
                    Related Canonical Work:
                  </span>
                  <Link
                    href={activeModalItem.caseLink}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4600A] text-[#0A0906] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#D8FC71] transition-colors"
                  >
                    <span>{activeModalItem.caseTitle}</span>
                    <span>→</span>
                  </Link>
                </div>
              )}

              {/* Modal Navigation Hint */}
              <div className="mt-6 text-center text-[10px] font-mono text-[#F0EDE6]/30 uppercase tracking-widest">
                Press ESC to close · Arrow keys to navigate
              </div>
            </div>
          </div>
        ), document.body)}
      </main>
      <Footer />
    </>
  );
}
