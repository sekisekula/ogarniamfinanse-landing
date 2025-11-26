import { Camera, Sparkles, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Skanuj Paragon',
    description: 'Zrób zdjęcie lub wybierz PDF. AI automatycznie rozpozna wszystkie produkty i kwoty.',
  },
  {
    icon: Sparkles,
    title: 'Automatyczna Kategoryzacja',
    description: 'Inteligentny system przypisuje kategorie i wykrywa duplikaty. Zero ręcznej pracy.',
  },
  {
    icon: BarChart3,
    title: 'Analizuj i Oszczędzaj',
    description: 'Zobacz trendy, ustaw budżety i osiągaj cele finansowe. Wszystko w jednym miejscu.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Jak to działa?
          </h2>
          <p className="text-xl text-gray-600">
            Trzy proste kroki do pełnej kontroli nad finansami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 -z-10" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-xl opacity-30" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-purple-600">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
