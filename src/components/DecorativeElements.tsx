const DecorativeElements = () => {
  return (
    <>
      {/* Decorative Right Side Label - Hidden on mobile */}
      <div className="hidden lg:block absolute top-16 right-10 h-full flex items-center z-10 pointer-events-none">
        <span 
          className="text-slate-400 font-manrope text-sm uppercase tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          PROJECT B-7 / SECTOR-04
        </span>
      </div>
      
      {/* Footer Labels - Responsive */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm border-t border-slate-800/50 pointer-events-none">
        <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            <div className="font-manrope text-xs sm:text-sm text-slate-400 text-center sm:text-left">
              <span className="hidden sm:inline">▲ BUILT TO LAST // EST. 2024</span>
              <span className="sm:hidden">▲ EST. 2024</span>
            </div>
            <div className="font-manrope text-xs sm:text-sm text-slate-500">
              © CONSTRUCT
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default DecorativeElements;