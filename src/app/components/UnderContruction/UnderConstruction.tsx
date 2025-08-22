'use client';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import './UnderConstruction.css';

export default function UnderConstruction() {
  return (
    <div className="under-construction">
      <h1 className="h1-under-construction">Under Construction/Sob construção</h1>
      <p className="p-under-construction">Funcionalidade ou página ainda em construção. Workability or page under construction.</p>
      <p className="p-under-construction">Desculpe pelo transtorno, logo resolverei!. Sorry for the disturbance, I'm working on it!</p>
    </div>
  );
}