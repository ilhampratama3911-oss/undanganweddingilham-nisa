import React, { useState, useEffect } from 'react';
import {
  Disc3,
  Music2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { AudioTrack } from '../types/wedding';
import { weddingAudio } from '../services/audioEngine';

interface AudioFloatingPlayerProps {
  onOpenCustomizer?: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const AudioFloatingPlayer: React.FC<AudioFloatingPlayerProps> = ({
  isPlaying,
  onTogglePlay,
}) => {
  const [currentTrack, setCurrentTrack] = useState<AudioTrack>(weddingAudio.getTrack());
  const [volume, setVolume] = useState(0.85);
  const [showVolumePopup, setShowVolumePopup] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((_, track) => {
      setCurrentTrack(track);
    });
    return unsubscribe;
  }, []);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    weddingAudio.setVolume(val);
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2 select-none">
      {/* Volume Popup */}
      {showVolumePopup && (
        <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#141C17]/95 border border-[#C9A86A]/40 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 mb-1">
          <button
            onClick={() => {
              const newVol = volume > 0 ? 0 : 0.85;
              setVolume(newVol);
              weddingAudio.setVolume(newVol);
            }}
            className="text-[#DFB76C] hover:text-white cursor-pointer"
          >
            {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-[#C9A86A] h-1.5 bg-stone-700 rounded-lg cursor-pointer"
          />
          <span className="text-[10px] text-stone-300 font-mono tabular-nums w-7">
            {Math.round(volume * 100)}%
          </span>
        </div>
      )}

      {/* Floating Control Cluster */}
      <div className="flex items-center p-1.5 rounded-full bg-[#141A16]/95 border border-[#C9A86A]/60 backdrop-blur-md shadow-2xl gold-glow">
        {/* Track Title Indicator */}
        <div
          title="Lagu Pernikahan: Kartika Chandra"
          className="hidden sm:flex items-center gap-2 pl-3.5 pr-2 py-1 text-xs text-[#E2D8CC] max-w-[200px]"
        >
          <Music2 className="w-3.5 h-3.5 text-[#DFB76C] shrink-0" />
          <span className="truncate text-[11px] font-medium">
            Kartika Chandra
          </span>
        </div>

        {/* Volume toggle affordance */}
        <button
          onClick={() => setShowVolumePopup(!showVolumePopup)}
          title="Atur Volume"
          className="p-2 rounded-full text-[#DFB76C] hover:bg-[#1F2A23] transition-colors cursor-pointer"
        >
          {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Main Play/Pause Spinning Disc Button */}
        <button
          onClick={onTogglePlay}
          title={isPlaying ? 'Jeda Lagu' : 'Putar Lagu'}
          className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-[#C9A86A] via-[#ECCB85] to-[#DFB76C] p-0.5 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center text-[#121814]"
        >
          <div className="w-full h-full rounded-full bg-[#121814] flex items-center justify-center relative overflow-hidden">
            {/* Spinning vinyl grooves */}
            <Disc3
              className={`w-8 h-8 text-[#ECCB85] ${
                isPlaying ? 'animate-spin-slow' : 'opacity-70'
              }`}
            />
            {/* Center Play/Pause indicator icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 text-[#ECCB85] fill-[#ECCB85]" />
              ) : (
                <Play className="w-3.5 h-3.5 text-[#ECCB85] fill-[#ECCB85] ml-0.5" />
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
