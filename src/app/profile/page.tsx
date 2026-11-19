'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-surface/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
            PetRescue<span className="text-accent">.id</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text-muted hover:text-primary font-medium transition-colors">Beranda</Link>
            <Link href="/katalog" className="text-text-muted hover:text-primary font-medium transition-colors">Katalog</Link>
            <Link href="/pet-digital" className="text-text-muted hover:text-primary font-medium transition-colors">Pet Digital</Link>
            <Link href="/profile">
              <Button variant="secondary" className="gap-2 px-4 py-2">
                <User size={18} /> Profil
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text-main" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-gray-100 px-6 py-4 flex flex-col space-y-4 shadow-lg animate-fade-in-up">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-text-main font-medium">Beranda</Link>
          <Link href="/katalog" onClick={() => setIsOpen(false)} className="text-text-main font-medium">Katalog</Link>
          <Link href="/pet-digital" onClick={() => setIsOpen(false)} className="text-text-main font-medium">Pet Digital</Link>
          <Link href="/profile" onClick={() => setIsOpen(false)}>
            <Button variant="primary" fullWidth className="mt-2">Profil Saya</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}