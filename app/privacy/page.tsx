import Link from 'next/link';

export const metadata = {
  title: 'Polityka Prywatności - LifeSaldo',
  description: 'Polityka prywatności aplikacji LifeSaldo',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="text-purple-600 hover:text-purple-700 mb-8 inline-block">
          ← Powrót do strony głównej
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Polityka Prywatności</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Ostatnia aktualizacja: 26 listopada 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Wprowadzenie</h2>
            <p>
              Niniejsza Polityka Prywatności opisuje, w jaki sposób LifeSaldo ("my", "nas", "nasz") 
              zbiera, wykorzystuje i chroni dane osobowe użytkowników ("Ty", "Twoje") korzystających z 
              aplikacji mobilnej LifeSaldo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Administrator Danych</h2>
            <p>
              Administratorem danych osobowych jest:<br />
              <strong>LifeSaldo</strong><br />
              Email: kontakt@lifesaldo.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Jakie Dane Zbieramy</h2>
            <p className="mb-4">Zbieramy następujące kategorie danych:</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1. Dane Konta</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Adres email (wymagany do rejestracji)</li>
              <li>Hasło (zaszyfrowane)</li>
              <li>Data utworzenia konta</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2. Dane Finansowe</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Transakcje (kwoty, daty, kategorie)</li>
              <li>Paragony (zdjęcia, pliki PDF)</li>
              <li>Grupy rozliczeniowe</li>
              <li>Historia rozliczeń</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.3. Dane Techniczne</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Typ urządzenia i system operacyjny</li>
              <li>Wersja aplikacji</li>
              <li>Logi błędów (anonimowe)</li>
              <li>Dane analityczne (anonimowe)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cel Przetwarzania Danych</h2>
            <p className="mb-4">Twoje dane przetwarzamy w następujących celach:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Świadczenie usług</strong> - zarządzanie kontem, transakcjami, grupami</li>
              <li><strong>Bezpieczeństwo</strong> - ochrona przed nieautoryzowanym dostępem</li>
              <li><strong>Ulepszanie aplikacji</strong> - analiza użytkowania, naprawa błędów</li>
              <li><strong>Komunikacja</strong> - powiadomienia, wsparcie techniczne</li>
              <li><strong>Zgodność z prawem</strong> - spełnienie wymogów prawnych</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Podstawa Prawna</h2>
            <p className="mb-4">Przetwarzamy Twoje dane na podstawie:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zgoda</strong> (Art. 6 ust. 1 lit. a RODO) - dla funkcji opcjonalnych</li>
              <li><strong>Wykonanie umowy</strong> (Art. 6 ust. 1 lit. b RODO) - świadczenie usług</li>
              <li><strong>Prawnie uzasadniony interes</strong> (Art. 6 ust. 1 lit. f RODO) - bezpieczeństwo, analityka</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Udostępnianie Danych</h2>
            <p className="mb-4">Twoje dane mogą być udostępniane:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supabase</strong> - hosting bazy danych (szyfrowanie end-to-end)</li>
              <li><strong>Google Firebase</strong> - analityka (dane anonimowe)</li>
              <li><strong>Sentry</strong> - monitoring błędów (dane anonimowe)</li>
              <li><strong>Członkowie grup</strong> - dane transakcji w grupach rozliczeniowych</li>
            </ul>
            <p className="mt-4">
              <strong>NIE sprzedajemy</strong> Twoich danych osobowych osobom trzecim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Bezpieczeństwo Danych</h2>
            <p className="mb-4">Stosujemy następujące środki bezpieczeństwa:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Szyfrowanie danych w tranzycie (TLS/SSL)</li>
              <li>Szyfrowanie danych w spoczynku (AES-256)</li>
              <li>Uwierzytelnianie dwuskładnikowe (opcjonalne)</li>
              <li>Regularne audyty bezpieczeństwa</li>
              <li>Ograniczony dostęp do danych (zasada najmniejszych uprawnień)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Twoje Prawa</h2>
            <p className="mb-4">Zgodnie z RODO masz prawo do:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dostępu</strong> - uzyskania kopii swoich danych</li>
              <li><strong>Sprostowania</strong> - poprawy nieprawidłowych danych</li>
              <li><strong>Usunięcia</strong> - "prawo do bycia zapomnianym"</li>
              <li><strong>Ograniczenia przetwarzania</strong> - wstrzymania przetwarzania</li>
              <li><strong>Przenoszenia danych</strong> - otrzymania danych w formacie CSV</li>
              <li><strong>Sprzeciwu</strong> - wobec przetwarzania na podstawie prawnie uzasadnionego interesu</li>
              <li><strong>Cofnięcia zgody</strong> - w dowolnym momencie</li>
            </ul>
            <p className="mt-4">
              Aby skorzystać z tych praw, skontaktuj się: <strong>kontakt@lifesaldo.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Przechowywanie Danych</h2>
            <p>
              Twoje dane przechowujemy przez okres niezbędny do świadczenia usług lub do momentu 
              usunięcia konta. Po usunięciu konta dane są trwale usuwane w ciągu 30 dni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Pliki Cookie</h2>
            <p>
              Aplikacja mobilna nie używa plików cookie. Strona internetowa używa podstawowych 
              plików cookie do analizy ruchu (Google Analytics) - możesz je wyłączyć w ustawieniach przeglądarki.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Zmiany w Polityce</h2>
            <p>
              Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki Prywatności. O istotnych 
              zmianach poinformujemy Cię przez email lub powiadomienie w aplikacji.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Kontakt</h2>
            <p>
              W razie pytań dotyczących Polityki Prywatności, skontaktuj się:<br />
              <strong>Email:</strong> kontakt@lifesaldo.com<br />
              <strong>Odpowiadamy w ciągu:</strong> 48 godzin
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Prawo do Skargi</h2>
            <p>
              Masz prawo wnieść skargę do organu nadzorczego:<br />
              <strong>Urząd Ochrony Danych Osobowych (UODO)</strong><br />
              ul. Stawki 2, 00-193 Warszawa<br />
              <a href="https://uodo.gov.pl" className="text-purple-600 hover:underline">https://uodo.gov.pl</a>
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Powrót do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
}
