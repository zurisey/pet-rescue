import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tight mb-4 block">
              PetRescue<span className="text-accent">.id</span>
            </Link>
            <p className="text-text-muted max-w-sm">
              Platform terpadu untuk menyelamatkan hewan terlantar, donasi transparan, dan pengalaman adopsi yang bertanggung jawab.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-text-main mb-4">Tautan</h4>
            <ul className="space-y-2 text-text-muted">
              <li><Link href="/katalog" className="hover:text-primary transition-colors">Katalog Hewan</Link></li>
              <li><Link href="/pet-digital" className="hover:text-primary transition-colors">Pet Digital</Link></li>
              <li><Link href="/profile" className="hover:text-primary transition-colors">Daftar Shelter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main mb-4">Kontak</h4>
            <ul className="space-y-2 text-text-muted">
              <li>Bantuan & Dukungan</li>
              <li>halo@petrescue.id</li>
              <li>Semarang, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-text-muted text-sm pt-8 border-t border-gray-50">
          &copy; {new Date().getFullYear()} PetRescue.id. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}