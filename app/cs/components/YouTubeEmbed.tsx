'use client';
export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        allowFullScreen
        className="w-full h-full rounded-xl shadow-lg"
      />
    </div>
  );
}
