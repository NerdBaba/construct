const VideoBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        src="https://videos.pexels.com/video-files/1654216/1654216-hd_1920_1080_30fps.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};
export default VideoBackground;