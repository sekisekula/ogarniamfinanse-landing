import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Darmowy',
    price: '0 zł',
    description: 'Idealny na start',
    features: [
      'Nieograniczone transakcje',
      'Skanowanie paragonów (30/mies)',
      '2 grupy (do 4 osób każda)',
      'Podstawowe wykresy',
      'Historia 3 miesiące',
      '10 kategorii',
      '3 budżety',
    ],
    cta: 'Pobierz za darmo',
    popular: false,
  },
  {
    name: 'Premium',
    price: '19.99 zł',
    period: '/miesiąc',
    description: 'Dla wymagających',
    features: [
      'Wszystko z planu Darmowego',
      'Nielimitowane skany (500/mies)',
      'Nielimitowane grupy i członkowie',
      'Pełna historia transakcji',
      'Nielimitowane kategorie i budżety',
      'Eksport danych (CSV, Excel)',
    ],
    cta: 'Wkrótce dostępne',
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Prosty cennik
          </h2>
          <p className="text-xl text-gray-600">
            Zacznij za darmo. Przejdź na Premium gdy będziesz gotowy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 ${
                plan.popular
                  ? 'ring-2 ring-purple-600 shadow-2xl scale-105'
                  : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Najpopularniejszy
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12">
          Wszystkie ceny zawierają VAT. Możesz anulować w każdej chwili.
        </p>
      </div>
    </section>
  );
}
