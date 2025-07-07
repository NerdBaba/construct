import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <div className="z-10 relative flex items-center h-screen">
      <div className="max-w-2xl px-8 text-white">
        <h1 className="font-libre-caslon text-6xl font-light tracking-tight leading-[1.1]">
          Forged in Concrete
        </h1>
        <p className="mt-4 font-manrope text-base font-normal text-slate-200">
          Beyond the veneer lies the unyielding truth of structure. Raw, unapologetic, and built to withstand the test of time.
        </p>
        <Link to="/sites" className="inline-block">
          <button className="mt-8 bg-white/90 text-black px-6 py-3 rounded-sm font-manrope text-sm font-medium hover:bg-white transition-all duration-300">
            Explore the Foundation →
          </button>
        </Link>
      </div>
    </div>
  );
};
export default HeroContent;