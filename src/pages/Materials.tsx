import Navigation from "@/components/Navigation";
import DecorativeElements from "@/components/DecorativeElements";
import { useLenis } from "@/hooks/useLenis";
const Materials = () => {
  useLenis();
  return (
    <div className="relative min-h-screen w-screen bg-black text-white overflow-x-hidden">
      {/* Background Image with Parallax */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Concrete materials"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ transform: 'translateZ(0)' }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative z-10 h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-libre-caslon text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
              Materials
            </h1>
          </div>
        </div>
      </div>
      {/* Content Sections */}
      <div className="relative z-10 bg-black pb-20 sm:pb-24 lg:pb-32">
        {/* Béton Brut Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5 animate-fade-in [animation-delay:200ms]">
                <h2 className="font-manrope font-medium uppercase tracking-wider text-white text-lg sm:text-xl mb-6 sm:mb-8">
                  BÉTON BRUT
                </h2>
                <div className="space-y-6 sm:space-y-8">
                  <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                    Raw concrete in its most honest expression. Each pour captures 
                    the memory of wood grain, the subtle variations of human craft 
                    married to industrial precision. This is material truth—
                    unadorned, uncompromising, eternal.
                  </p>
                  <p className="font-manrope text-sm sm:text-base leading-relaxed text-slate-400">
                    The aggregate composition speaks volumes: Portland cement binds 
                    crushed granite, limestone dust, and carefully graded sand. 
                    Water becomes the catalyst, initiating crystalline formations 
                    that will outlast civilizations.
                  </p>
                  <div className="bg-black/50 backdrop-blur-sm p-4 border border-slate-700 inline-block">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-600 mb-2"></div>
                    <div className="font-mono text-xs text-slate-500">
                      SPECIMEN-01: BOARD-FORMED
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 animate-fade-in [animation-delay:400ms]">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Concrete texture"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover mb-6"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="font-mono text-xs sm:text-sm text-slate-400 space-y-1">
                    <div>STRENGTH: 35-50 MPA</div>
                    <div>DENSITY: 2400 KG/M³</div>
                    <div>THERMAL: 1.7 W/M·K</div>
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-slate-400 space-y-1">
                    <div>CURE: 28 DAYS</div>
                    <div>SLUMP: 75-100MM</div>
                    <div>W/C RATIO: 0.45</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Transition Space */}
        <div className="h-24 sm:h-32 lg:h-48"></div>
        {/* Corten Steel Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Corten steel weathering"
              className="w-full h-32 sm:h-40 lg:h-48 object-cover mb-12 sm:mb-16 animate-fade-in [animation-delay:600ms]"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-7 animate-fade-in [animation-delay:800ms]">
                <h2 className="font-manrope font-medium uppercase tracking-wider text-white text-lg sm:text-xl mb-6">
                  WEATHERING STEEL
                </h2>
                <div className="space-y-6">
                  <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                    Time becomes architect. Corten steel evolves, its surface 
                    transforming from pristine metal to protective patina. 
                    Each season writes another chapter in rust and oxidation.
                  </p>
                  <p className="font-manrope text-sm sm:text-base leading-relaxed text-slate-400">
                    The patina forms a protective barrier, self-healing and regenerative. 
                    Unlike common steel that rusts through, weathering steel creates 
                    its own armor through controlled oxidation.
                  </p>
                  <div className="bg-black/50 backdrop-blur-sm p-4 border border-slate-700 inline-block">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-900 mb-2"></div>
                    <div className="font-mono text-xs text-slate-500">
                      SPECIMEN-02: WEATHERED
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 animate-fade-in [animation-delay:1000ms]">
                <div className="font-mono text-xs sm:text-sm text-slate-400 space-y-2 sm:space-y-3">
                  <div>COMPOSITION: Fe, Cu, Cr, Ni</div>
                  <div>THICKNESS: 6-25MM</div>
                  <div>PATINA: 18-36 MONTHS</div>
                  <div>TENSILE: 485-630 MPA</div>
                  <div>RATE: 0.03MM/YEAR</div>
                  <div>MAINTENANCE: NONE</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Structural Glass Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-8 animate-fade-in [animation-delay:1200ms]">
                <img
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Structural glass"
                  className="w-full h-64 sm:h-80 object-cover mb-6"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-500">
                  <div>
                    <div className="text-slate-300 mb-1 text-sm">COMPOSITION</div>
                    <div>2 x 10MM GLASS</div>
                    <div>1.52MM PVB</div>
                    <div>TOTAL: 21.52MM</div>
                  </div>
                  <div>
                    <div className="text-slate-300 mb-1 text-sm">PERFORMANCE</div>
                    <div>LOAD: 2.5 KN/M²</div>
                    <div>IMPACT: CLASS A</div>
                    <div>UV: &lt;1%</div>
                  </div>
                  <div>
                    <div className="text-slate-300 mb-1 text-sm">OPTICAL</div>
                    <div>LIGHT: 89%</div>
                    <div>THERMAL: 0.9 W/M²K</div>
                    <div>ACOUSTIC: 42 DB</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-center animate-fade-in [animation-delay:1400ms]">
                <h2 className="font-manrope font-medium uppercase tracking-wider text-white text-lg sm:text-xl mb-6">
                  STRUCTURAL GLASS
                </h2>
                <div className="space-y-6">
                  <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                    Transparency as structure. Glass panels that bear load while 
                    dissolving boundaries between interior and exterior.
                  </p>
                  <p className="font-manrope text-sm sm:text-base leading-relaxed text-slate-400">
                    Modern laminated glass achieves structural strength without 
                    visual weight. The PVB interlayer holds fragments together 
                    while carrying compressive loads.
                  </p>
                  <div className="bg-black/50 backdrop-blur-sm p-4 border border-slate-700 inline-block">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-200 opacity-20 mb-2"></div>
                    <div className="font-mono text-xs text-slate-500">
                      SPECIMEN-03: LOW-IRON
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Rebar Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-2 mb-8 lg:mb-0 animate-fade-in [animation-delay:1600ms]">
                <h2 className="font-manrope font-medium uppercase tracking-wider text-white text-lg sm:text-xl lg:transform lg:-rotate-90 lg:origin-top-left lg:mt-20">
                  REINFORCEMENT
                </h2>
              </div>
              <div className="lg:col-span-6 animate-fade-in [animation-delay:1800ms]">
                <div className="space-y-6 sm:space-y-8 mb-8">
                  <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                    Hidden within concrete lies the skeleton: deformed steel bars 
                    providing tensile strength. The ribs create mechanical bond 
                    between materials with different properties.
                  </p>
                  <p className="font-manrope text-sm sm:text-base leading-relaxed text-slate-400">
                    Grade 60 steel, yielding at 420 MPa, forms the muscular system. 
                    Each bar placed with calculated spacing, each bend radius controlled.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Steel reinforcement"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
              <div className="lg:col-span-3 animate-fade-in [animation-delay:2000ms]">
                <div className="font-mono text-xs sm:text-sm text-slate-500 space-y-3 sm:space-y-4">
                  <div>
                    <div className="text-slate-300 mb-1">SIZES</div>
                    <div>#4 (12.7MM)</div>
                    <div>#5 (15.9MM)</div>
                    <div>#6 (19.1MM)</div>
                    <div>#8 (25.4MM)</div>
                  </div>
                  <div>
                    <div className="text-slate-300 mb-1">SPACING</div>
                    <div>MIN: 25MM</div>
                    <div>MAX: 450MM</div>
                    <div>TYP: 200MM O.C.</div>
                  </div>
                  <div>
                    <div className="text-slate-300 mb-1">COVER</div>
                    <div>EXT: 40MM</div>
                    <div>INT: 20MM</div>
                    <div>FOUND: 75MM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <DecorativeElements />
    </div>
  );
};
export default Materials;