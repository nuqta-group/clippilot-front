export function ClipPilotPreview() {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-video rounded-2xl border shadow-lg bg-zinc-900 overflow-hidden">
      {/* Video Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center animate-pulse">
          <div className="w-4 h-4 border-l-4 border-white transform rotate-45"></div>
        </div>
      </div>

      {/* Caption */}
      <div className="absolute top-6 left-6 bg-white text-zinc-800 px-4 py-2 rounded-xl shadow-md animate-fade-in delay-500">
        “Learn how I grew my channel 3x!”
      </div>

      {/* Hook */}
      <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-3 py-1 rounded-xl shadow-md animate-slide-in-left delay-[700ms]">
        Hook: “Stop Scrolling”
      </div>

      {/* Hashtag */}
      <div className="absolute bottom-6 right-6 bg-purple-500 text-white px-3 py-1 rounded-xl shadow-md animate-slide-in-right delay-[900ms]">
        #viral #growth
      </div>
    </div>
  );
}
