/**
 * Wedding Audio Engine
 * Dedicated single wedding track:
 * "Kartika Chandra - Damar Panggalih"
 * YouTube: https://youtube.com/shorts/1gFYRfueRa8?si=_L_UMBwgt29rPoPc
 */

import { AudioTrack } from '../types/wedding';

export function extractYoutubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export const FIXED_DEFAULT_TRACK: AudioTrack = {
  id: 'kartika_chandra_de_lyrics',
  title: 'Kartika Chandra - Damar Panggalih',
  artist: 'DE LYRICS (Viral Audio)',
  sourceType: 'youtube',
  youtubeId: '1gFYRfueRa8',
  url: 'https://youtube.com/shorts/1gFYRfueRa8?si=_L_UMBwgt29rPoPc',
  description: 'Lagu tunggal resmi pernikahan: "Kartika Chandra" (Tak Eman-Eman Sang Mustika).',
};

export const PRESET_TRACKS: AudioTrack[] = [
  FIXED_DEFAULT_TRACK,
];

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string | HTMLElement,
        config: {
          videoId?: string;
          height?: string | number;
          width?: string | number;
          playerVars?: Record<string, unknown>;
          events?: {
            onReady?: (event: { target: YTPlayerInstance }) => void;
            onStateChange?: (event: { data: number; target: YTPlayerInstance }) => void;
            onError?: (event: { data: number }) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  getPlayerState: () => number;
  loadVideoById: (videoId: string) => void;
  cueVideoById: (videoId: string) => void;
  destroy: () => void;
}

class WeddingAudioPlayer {
  private ytPlayer: YTPlayerInstance | null = null;
  private isYtReady = false;
  private pendingPlay = false;

  private currentTrack: AudioTrack = FIXED_DEFAULT_TRACK;
  private volume: number = 0.85;
  private isPlaying: boolean = false;
  private listeners: Set<(isPlaying: boolean, track: AudioTrack) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      this.initYouTubeAPI();
    }
  }

  private initYouTubeAPI() {
    if (typeof window === 'undefined') return;

    const existingScript = document.getElementById('yt-iframe-api-script');
    if (!existingScript) {
      const tag = document.createElement('script');
      tag.id = 'yt-iframe-api-script';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const previousOnReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (previousOnReady) previousOnReady();
      this.createYouTubePlayer();
    };

    if (window.YT && window.YT.Player) {
      this.createYouTubePlayer();
    }
  }

  private createYouTubePlayer() {
    if (this.ytPlayer || typeof document === 'undefined') return;

    let container = document.getElementById('youtube-wedding-player-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'youtube-wedding-player-container';
      container.style.position = 'fixed';
      container.style.bottom = '-9999px';
      container.style.right = '-9999px';
      container.style.width = '1px';
      container.style.height = '1px';
      container.style.opacity = '0';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '-999';
      document.body.appendChild(container);
    }

    const videoId = '1gFYRfueRa8';

    try {
      this.ytPlayer = new window.YT.Player('youtube-wedding-player-container', {
        videoId,
        width: 200,
        height: 200,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            this.isYtReady = true;
            event.target.setVolume(this.volume * 100);
            if (this.pendingPlay) {
              this.pendingPlay = false;
              event.target.playVideo();
              this.isPlaying = true;
              this.notify();
            }
          },
          onStateChange: (event) => {
            if (window.YT) {
              if (event.data === window.YT.PlayerState.PLAYING) {
                this.isPlaying = true;
                this.notify();
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                if (this.isPlaying) {
                  this.isPlaying = false;
                  this.notify();
                }
              } else if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
            }
          },
        },
      });
    } catch (e) {
      console.warn('Could not initialize YouTube player:', e);
    }
  }

  public subscribe(cb: (isPlaying: boolean, track: AudioTrack) => void) {
    this.listeners.add(cb);
    cb(this.isPlaying, this.currentTrack);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying, this.currentTrack));
  }

  public getTrack(): AudioTrack {
    return this.currentTrack;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.ytPlayer && this.isYtReady) {
      try {
        this.ytPlayer.setVolume(this.volume * 100);
      } catch {
        // ignore
      }
    }
  }

  public async play(): Promise<void> {
    this.isPlaying = true;
    this.notify();

    if (this.ytPlayer && this.isYtReady) {
      try {
        this.ytPlayer.setVolume(this.volume * 100);
        this.ytPlayer.playVideo();
      } catch {
        // ignore
      }
    } else {
      this.pendingPlay = true;
    }
  }

  public pause(): void {
    this.isPlaying = false;
    this.pendingPlay = false;
    if (this.ytPlayer && this.isYtReady) {
      try {
        this.ytPlayer.pauseVideo();
      } catch {
        // ignore
      }
    }
    this.notify();
  }

  public toggle(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
}

export const weddingAudio = new WeddingAudioPlayer();
