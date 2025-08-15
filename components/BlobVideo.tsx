type Props = {
  src: string;           // video URL
  poster?: string;       // optional image in /public
  className?: string;    // extra Tailwind classes
  autoPlay?: boolean;    // autoplay?
  loop?: boolean;        // loop playback?
  muted?: boolean;       // muted?
  controls?: boolean;    // show controls?
};

export default function BlobVideo({
  src,
  poster,
  className = "",
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
}: Props) {
  return (
    <video
      src={src}
      poster={poster}
      className={`w-full h-auto rounded-xl ${className}`}
      controls={controls}
      playsInline
      preload="metadata"
      {...(autoPlay ? { autoPlay: true } : {})}
      {...(loop ? { loop: true } : {})}
      {...(muted ? { muted: true } : {})}
    />
  );
}
