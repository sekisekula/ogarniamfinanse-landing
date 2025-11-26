import { Scan, Users, TrendingUp, Zap, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Scan,
    title: 'Inteligentne Skanowanie',
    description: 'OCR + AI automatycznie rozpoznaje paragony z Biedronki, Lidla i innych sklepów.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Rozliczenia Grupowe',
    description: 'Dziel wydatki z rodziną lub znajomymi. Automatyczne rozliczenia i przypomnienia.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Analiza Wydatków',
    description: 'Wykresy, budżety i predykcje. Zobacz gdzie idą Twoje pieniądze.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Zap,
    title: 'Błyskawiczne Dodawanie',
    description: 'Dodaj wydatek w 3 sekundy. Bez zbędnych formularzy.',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Shield,
    title: 'Bezpieczeństwo',
    description: 'Szyfrowanie end-to-end. Twoje dane są tylko Twoje. RODO compliant.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Sparkles,
    title: 'AI Asystent',
    description: 'Inteligentne sugestie kategorii i wykrywanie duplikatów.',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Wszystko czego potrzebujesz
          </h2>
          <p className="text-xl text-gray-600">
            Kompleksowe narzędzie do zarządzania finansami osobistymi i grupowymi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
