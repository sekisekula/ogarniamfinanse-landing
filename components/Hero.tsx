import Link from 'next/link';
import { ArrowRight, Smartphone, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Nowa wersja 2.0 dostępna
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ogarnij swoje finanse
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> w grupie</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Skanuj paragony, dziel wydatki, analizuj budżet. 
              Wszystko w jednej aplikacji z AI i automatycznym OCR.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <span className="text-gray-700 font-medium">500+ użytkowników</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-gray-700 font-medium">4.8/5 ocena</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🆓</span>
                <span className="text-gray-700 font-medium">Darmowy start</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#download" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Smartphone className="w-5 h-5" />
                Pobierz aplikację
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#features" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all"
              >
                Zobacz funkcje
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% bezpieczne</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>RODO compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column - App Mockup */}
          <div className="lg:w-1/2 relative">
            <div className="relative mx-auto w-full max-w-md">
              {/* Floating Cards */}
              <div className="absolute -top-10 -left-10 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Oszczędności</p>
                    <p className="text-lg font-bold text-gray-900">+2,450 zł</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Grupa</p>
                    <p className="text-lg font-bold text-gray-900">5 osób</p>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="aspect-[9/19] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg">
                        <Smartphone className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-gray-600 font-medium">Screenshot aplikacji</p>
                      <p className="text-sm text-gray-500">Wkrótce dodamy prawdziwe zrzuty ekranu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
