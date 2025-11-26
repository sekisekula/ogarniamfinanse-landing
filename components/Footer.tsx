import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">OgarniamFinanse</h3>
            <p className="text-sm">
              Zarządzaj finansami w grupie. Prosto i bezpiecznie.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-white transition">Funkcje</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition">Cennik</Link></li>
              <li><Link href="#download" className="hover:text-white transition">Pobierz</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Prawne</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Polityka Prywatności</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Regulamin</Link></li>
              <li><span className="text-gray-500">Cookies (wkrótce)</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:kontakt@ogarniamfinanse.pl" className="hover:text-white transition">kontakt@ogarniamfinanse.pl</a></li>
              <li><Link href="/support" className="hover:text-white transition">Wsparcie</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2025 OgarniamFinanse. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
