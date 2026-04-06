const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
  return (
    <div className="group relative inline-flex cursor-pointer">
      {children}
      <div className="absolute bottom-full left-1/2 z-10 mb-1 hidden -translate-x-1/2 group-hover:block">
        <div className="bg-gray-g5 text-gray-g6 relative w-52 rounded px-2 py-1 text-xs whitespace-normal shadow-sm">
          {text}
          <div className="border-t-gray-g5 absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
