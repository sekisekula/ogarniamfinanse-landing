import Link from 'next/link';

export const metadata = {
  title: 'Regulamin - LifeSaldo',
  description: 'Regulamin korzystania z aplikacji LifeSaldo',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="text-purple-600 hover:text-purple-700 mb-8 inline-block">
          ← Powrót do strony głównej
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Regulamin Usługi</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Ostatnia aktualizacja: 26 listopada 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Postanowienia Ogólne</h2>
            <p className="mb-4">
              Niniejszy Regulamin określa zasady korzystania z aplikacji mobilnej LifeSaldo 
              ("Aplikacja", "Usługa") dostępnej na platformach Android i iOS.
            </p>
            <p>
              Korzystając z Aplikacji, akceptujesz niniejszy Regulamin oraz Politykę Prywatności.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definicje</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usługodawca</strong> - LifeSaldo</li>
              <li><strong>Użytkownik</strong> - osoba korzystająca z Aplikacji</li>
              <li><strong>Konto</strong> - indywidualne konto Użytkownika w Aplikacji</li>
              <li><strong>Grupa</strong> - funkcja umożliwiająca wspólne zarządzanie finansami</li>
              <li><strong>Transakcja</strong> - wpis dotyczący wydatku lub przychodu</li>
              <li><strong>Paragon</strong> - zdjęcie lub plik PDF dowodu zakupu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Warunki Korzystania</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1. Rejestracja</h3>
            <p className="mb-4">
              Aby korzystać z Aplikacji, musisz utworzyć Konto podając:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Prawidłowy adres email</li>
              <li>Bezpieczne hasło (min. 8 znaków)</li>
            </ul>
            <p className="mb-4">
              Jesteś odpowiedzialny za zachowanie poufności danych logowania.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2. Wymagania Wiekowe</h3>
            <p className="mb-4">
              Aplikacja jest przeznaczona dla osób, które ukończyły 16 lat. Osoby poniżej 16 roku życia 
              mogą korzystać z Aplikacji wyłącznie za zgodą rodzica lub opiekuna prawnego.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.3. Zakaz Nadużyć</h3>
            <p className="mb-4">Zabrania się:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Udostępniania konta innym osobom</li>
              <li>Używania Aplikacji w celach nielegalnych</li>
              <li>Próby włamania lub naruszenia bezpieczeństwa</li>
              <li>Automatycznego pobierania danych (scraping)</li>
              <li>Przesyłania złośliwego oprogramowania</li>
              <li>Naruszania praw innych Użytkowników</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Funkcje Aplikacji</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1. Plan Darmowy</h3>
            <p className="mb-4">Obejmuje:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nieograniczone transakcje</li>
              <li>Skanowanie paragonów (OCR)</li>
              <li>1 grupa (do 5 osób)</li>
              <li>Podstawowe wykresy</li>
              <li>Eksport do CSV</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2. Plan Premium</h3>
            <p className="mb-4">Dodatkowo:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nieograniczone grupy</li>
              <li>AI Asystent finansowy</li>
              <li>Zaawansowane analizy</li>
              <li>Automatyczne kategoryzacje</li>
              <li>Priorytetowe wsparcie</li>
            </ul>
            <p>
              Szczegóły cennika dostępne w Aplikacji.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Płatności i Subskrypcje</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1. Metody Płatności</h3>
            <p className="mb-4">
              Płatności są przetwarzane przez bezpieczne bramki płatnicze (Stripe, Przelewy24).
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2. Okres Próbny</h3>
            <p className="mb-4">
              Plan Premium oferuje 14-dniowy bezpłatny okres próbny. Możesz anulować w dowolnym 
              momencie przed końcem okresu próbnego bez opłat.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.3. Anulowanie</h3>
            <p className="mb-4">
              Subskrypcję możesz anulować w dowolnym momencie w ustawieniach Konta. Anulowanie 
              obowiązuje od następnego okresu rozliczeniowego.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.4. Zwroty</h3>
            <p className="mb-4">
              Zwroty są możliwe w ciągu 14 dni od zakupu zgodnie z prawem konsumenckim. 
              Skontaktuj się: kontakt@lifesaldo.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Własność Intelektualna</h2>
            <p className="mb-4">
              Wszystkie prawa do Aplikacji, w tym kod źródłowy, design, logo i treści, należą do 
              Usługodawcy i są chronione prawem autorskim.
            </p>
            <p>
              Użytkownik otrzymuje ograniczoną, niewyłączną licencję na korzystanie z Aplikacji 
              wyłącznie w celach osobistych.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Odpowiedzialność</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">7.1. Ograniczenie Odpowiedzialności</h3>
            <p className="mb-4">
              Aplikacja jest dostarczana "tak jak jest". Usługodawca nie ponosi odpowiedzialności za:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Utratę danych spowodowaną błędami Użytkownika</li>
              <li>Decyzje finansowe podjęte na podstawie danych z Aplikacji</li>
              <li>Przerwy w działaniu spowodowane siłą wyższą</li>
              <li>Działania osób trzecich (np. włamania)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">7.2. Backup Danych</h3>
            <p className="mb-4">
              Zalecamy regularne eksportowanie danych (CSV). Usługodawca wykonuje automatyczne 
              kopie zapasowe, ale nie gwarantuje 100% odzyskania danych w przypadku awarii.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Rozwiązanie Umowy</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">8.1. Przez Użytkownika</h3>
            <p className="mb-4">
              Możesz usunąć Konto w dowolnym momencie w ustawieniach Aplikacji. Dane zostaną 
              trwale usunięte w ciągu 30 dni.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">8.2. Przez Usługodawcę</h3>
            <p className="mb-4">
              Usługodawca może zawiesić lub usunąć Konto w przypadku:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Naruszenia Regulaminu</li>
              <li>Nielegalnej działalności</li>
              <li>Braku aktywności przez 24 miesiące</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Zmiany w Regulaminie</h2>
            <p>
              Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O istotnych zmianach 
              poinformujemy Cię przez email lub powiadomienie w Aplikacji z 14-dniowym wyprzedzeniem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Prawo Właściwe</h2>
            <p>
              Niniejszy Regulamin podlega prawu polskiemu. Spory będą rozstrzygane przez sądy 
              właściwe dla siedziby Usługodawcy, z zastrzeżeniem bezwzględnie obowiązujących 
              przepisów o ochronie konsumentów.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Kontakt</h2>
            <p>
              W razie pytań dotyczących Regulaminu, skontaktuj się:<br />
              <strong>Email:</strong> kontakt@lifesaldo.com<br />
              <strong>Odpowiadamy w ciągu:</strong> 48 godzin
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Postanowienia Końcowe</h2>
            <p className="mb-4">
              Jeśli którekolwiek postanowienie Regulaminu zostanie uznane za nieważne, pozostałe 
              postanowienia pozostają w mocy.
            </p>
            <p>
              Akceptując Regulamin, potwierdzasz, że zapoznałeś się z jego treścią i rozumiesz 
              swoje prawa i obowiązki.
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
