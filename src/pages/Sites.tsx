import Navigation from "@/components/Navigation";
import DecorativeElements from "@/components/DecorativeElements";
import { useLenis } from "@/hooks/useLenis";
const Sites = () => {
  useLenis();
  return (
    <div className="relative min-h-screen w-screen bg-black text-white overflow-x-hidden">
      {/* Background Image with Parallax */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Construction sites"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ transform: 'translateZ(0)' }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative z-10 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="font-libre-caslon text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] text-white">
            Sites of Principle
          </h1>
        </div>
      </div>
      {/* Content Sections */}
      <div className="relative z-10 bg-black pb-20 sm:pb-24 lg:pb-32">
        {/* Essay Introduction */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto animate-fade-in [animation-delay:200ms]">
            <div className="prose prose-lg prose-invert max-w-none space-y-6 sm:space-y-8">
              <p className="font-manrope text-lg sm:text-xl leading-relaxed text-slate-200">
                In the vocabulary of construction, each site speaks a different dialect of necessity. 
                These are not merely locations where buildings rise—they are theaters of transformation, 
                stages where raw materials surrender to human will and architectural vision.
              </p>
              
              <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                Every construction site begins as a conversation between ambition and constraint. 
                The earth beneath our feet carries the weight of geological time, while our blueprints 
                project into an uncertain future. Between these temporal boundaries, we work.
              </p>
            </div>
          </div>
        </section>
        {/* The Meridian Complex */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
              <div className="lg:col-span-8 animate-fade-in [animation-delay:400ms]">
                <div className="space-y-4 sm:space-y-6">
                  <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                    The Meridian Complex emerged from a conversation between earth and sky, 
                    its foundations carved deep into bedrock while its crown reaches toward 
                    an infinite horizon. Here, the brutalist philosophy finds its purest expression.
                  </p>
                  <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                    Each beam placed with deliberate intent, each surface bearing the honest 
                    marks of its creation. This is architecture without pretense, 
                    construction without compromise.
                  </p>
                  <p className="font-manrope text-sm sm:text-base leading-relaxed text-slate-400">
                    During the foundation phase, we excavated through seventeen distinct 
                    soil strata, each telling a story of this land's geological past.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 animate-fade-in [animation-delay:600ms]">
                <img
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Meridian Complex construction"
                  className="w-full h-48 sm:h-64 object-cover mb-2"
                />
                <div className="font-mono text-xs text-slate-500 space-y-1">
                  <div>MERIDIAN COMPLEX / PHASE 02</div>
                  <div>EXCAVATION: 18.5M</div>
                  <div>CONCRETE: 12,500 M³</div>
                  <div>DURATION: 847 DAYS</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Typographic Break */}
        <div className="relative my-24 sm:my-32 animate-fade-in [animation-delay:800ms]">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 sm:opacity-10">
            <span className="font-libre-caslon text-6xl sm:text-7xl lg:text-9xl text-slate-400 font-light">
              PERMANENCE
            </span>
          </div>
          <div className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto text-center">
              What we build today will outlast us. Each decision echoes through decades, 
              each material choice a promise to future generations.
            </p>
          </div>
        </div>
        {/* The Urban Monument Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
              <div className="lg:col-span-2 animate-fade-in [animation-delay:1000ms]">
                <div className="font-mono text-sm text-slate-500 lg:transform lg:-rotate-90 lg:origin-top-left lg:mt-8 mb-4 lg:mb-0">
                  THE URBAN MONUMENT
                </div>
              </div>
              <div className="lg:col-span-8 animate-fade-in [animation-delay:1200ms]">
                <div className="space-y-4 sm:space-y-6">
                  <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                    The Apex Tower stands not as defiance against the cityscape, 
                    but as natural evolution of urban density. Its monolithic presence 
                    commands attention through material honesty and execution precision.
                  </p>
                  <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                    Concrete and steel find harmony in their essential properties—
                    one providing mass and thermal stability, the other offering 
                    tensile strength and structural flexibility.
                  </p>
                  <p className="font-manrope text-sm sm:text-base leading-relaxed text-slate-400">
                    The construction sequence was choreographed like a dance: 
                    foundation work in winter, core walls rising by spring, 
                    thermal mass regulating internal climate.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 animate-fade-in [animation-delay:1400ms]">
                <div className="font-mono text-xs sm:text-sm text-slate-500 italic leading-relaxed bg-black/30 p-4 border border-slate-700">
                  "Architecture is the learned game, correct and magnificent, 
                  of forms assembled in the light."
                  <div className="text-slate-600 text-xs mt-2">— Le Corbusier</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Full Width Image Break */}
        <section className="animate-fade-in [animation-delay:1600ms]">
          <img
            src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Apex Tower under construction"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover grayscale"
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 font-mono text-xs text-slate-500">
              <div>
                <div className="text-slate-300 mb-2 text-sm">SITE CONDITIONS</div>
                <div className="space-y-1">
                  <div>SOIL: 350 KPA</div>
                  <div>WATER: 4.2M BELOW</div>
                  <div>SEISMIC: MODERATE</div>
                  <div>WIND: CATEGORY C</div>
                </div>
              </div>
              <div>
                <div className="text-slate-300 mb-2 text-sm">CONSTRUCTION</div>
                <div className="space-y-1">
                  <div>CRANE: 1,847 LIFTS</div>
                  <div>TRUCKS: 2,156</div>
                  <div>HOURS: 284,000</div>
                  <div>SAFETY: ZERO INCIDENTS</div>
                </div>
              </div>
              <div>
                <div className="text-slate-300 mb-2 text-sm">MATERIALS</div>
                <div className="space-y-1">
                  <div>CONCRETE: 45,000 M³</div>
                  <div>REBAR: 3,200 TONNES</div>
                  <div>STEEL: 1,800 TONNES</div>
                  <div>PRECAST: 847 UNITS</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Philosophy Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto animate-fade-in [animation-delay:1800ms]">
            <h2 className="font-libre-caslon text-3xl sm:text-4xl font-light text-slate-200 mb-8 sm:mb-12 text-center">
              The Philosophy of Construction
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-6 sm:space-y-8">
                <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                  These sites become laboratories of possibility, testing grounds where theory 
                  meets physics. Every project adds to our understanding of what buildings 
                  can be when focused on essential purpose.
                </p>
                <p className="font-manrope text-sm sm:text-base leading-relaxed text-slate-400">
                  Construction is archaeology in reverse. We build the future story by story. 
                  Each floor becomes a stratum for future investigators.
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="bg-black/50 backdrop-blur-sm p-4 sm:p-6 border border-slate-700">
                  <div className="font-mono text-xs sm:text-sm text-slate-400 space-y-3 sm:space-y-4">
                    <div>
                      <div className="text-slate-200 mb-1">PRINCIPLES</div>
                      <div className="space-y-1 text-xs">
                        <div>MATERIAL HONESTY</div>
                        <div>STRUCTURAL CLARITY</div>
                        <div>FUNCTIONAL INTEGRATION</div>
                        <div>TEMPORAL DURABILITY</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-200 mb-1">CONSIDERATIONS</div>
                      <div className="space-y-1 text-xs">
                        <div>GEOLOGICAL CONTEXT</div>
                        <div>CLIMATIC RESPONSE</div>
                        <div>URBAN INTEGRATION</div>
                        <div>FUTURE ADAPTABILITY</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Waterfront Laboratory */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 animate-fade-in [animation-delay:2000ms]">
                <h3 className="font-manrope text-lg sm:text-xl font-medium uppercase tracking-wider text-white mb-4 sm:mb-6">
                  WATERFRONT LABORATORY
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300">
                    Our newest site challenges conventional marine construction. 
                    Built on reclaimed land, demonstrating brutalist adaptation 
                    to demanding environmental conditions.
                  </p>
                  <p className="font-manrope text-sm sm:text-base leading-relaxed text-slate-400">
                    Foundation extends 25 meters below tide, anchored through 
                    bored piles and ground improvement. Each pile tested to 
                    twice design capacity.
                  </p>
                  <div className="font-mono text-xs sm:text-sm text-slate-500 space-y-1 sm:space-y-2">
                    <div>DEPTH: 25M BELOW MLW</div>
                    <div>DIAMETER: 1.5M</div>
                    <div>LOAD: 8,000 KN/PILE</div>
                    <div>WAVE: 4.2M DESIGN</div>
                    <div>SURGE: +2.8M</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 animate-fade-in [animation-delay:2200ms]">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Waterfront construction"
                  className="w-full h-64 sm:h-80 object-cover mb-4"
                />
                <p className="font-manrope text-sm sm:text-base leading-relaxed text-slate-400">
                  The building envelope responds to salt spray and hurricane winds 
                  with a double-wall system. Outer precast concrete shell takes 
                  environmental assault while inner structure maintains controls.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in [animation-delay:2400ms]">
            <p className="font-manrope text-base sm:text-lg leading-relaxed text-slate-300 mb-6 sm:mb-8">
              These sites of principle continue to teach us that great construction 
              emerges from the marriage of vision and constraint, ambition and humility.
            </p>
            <div className="font-mono text-xs sm:text-sm text-slate-500 space-y-1">
              <div>DOCUMENTED SITES: 23 ACTIVE / 47 COMPLETED</div>
              <div>TOTAL VALUE: $2.8 BILLION</div>
              <div>EXPERIENCE: 1,247 PROJECT-YEARS</div>
            </div>
          </div>
        </section>
      </div>
      
      <DecorativeElements />
    </div>
  );
};
export default Sites;