import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HLSVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export function HLSVideo({ src, ...props }: HLSVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    const startPlayback = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (err) {
        // Autoplay might be blocked, handled by muted attribute usually
      }
    };

    if (src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          startPlayback();
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          startPlayback();
        });
      }
    } else {
      // Regular MP4 fallback
      video.src = src;
      startPlayback();
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return <video ref={videoRef} {...props} />;
}
