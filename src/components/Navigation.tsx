import { Square } from "lucide-react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center font-manrope">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center">
          <Square className="w-5 h-5 text-slate-300" strokeWidth={2} />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-normal">
          <Link to="/blueprints" className="hover:text-white transition-colors">Blueprints</Link>
          <Link to="/materials" className="hover:text-white transition-colors">Materials</Link>
          <Link to="/sites" className="hover:text-white transition-colors">Sites</Link>
        </div>
      </div>
      <div className="text-sm text-slate-300 font-normal">
        <a href="#" className="hover:text-white transition-colors">EN ⌄</a>
      </div>
    </nav>
  );
};
export default Navigation;