'use client';

import React, { useState } from 'react';
import { useAudio } from '@/lib/AudioContext';
import { Music, Play, Pause, Volume2, ChevronUp, ChevronDown, SkipForward, SkipBack } from 'lucide-react';

const TRACKS = [
    { title: "Depuis longtemps - Joseph Bologne | Nathan Granner - Ombre di Luce - Pentatone Music", src: "/depuis_louder.mp3" },
    { title: "The Remarkable life of Joseph Bologne Pt. 1", src: "/music.m4a" },
    { title: "Chevalier of Swordplay", src: "/composition.mp3" },
    { title: "The Tale of the Chevalier", src: "/music/The Tale of the Chevalier.wav" },
    { title: "Indomitable Spirit", src: "/music/The Tale of the Chevalier1.wav" },
    { title: "The Good Life", src: "/music/The Tale of the Chevalier (Cover)3.wav" },
    { title: "Depuis Longtemps Variations", src: "/music/The Tale of the Chevalier (Cover)5.wav" },
    { title: "The Tale of the Chevalier (Interlude)", src: "/music/The Tale of the Chevalier piano violin inspiring filler.wav" },
];

export function VersaillesPlayer({ embedded = false }: { embedded?: boolean }) {
    const { isMusicPlaying, toggleMusic, playMusic, currentMusicSrc, musicVolume, setMusicVolume, currentTime, duration, seekMusic, hasMusicEnded } = useAudio();
    const [isOpen, setIsOpen] = useState(embedded); // Default open if embedded
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    const handleNext = React.useCallback(() => {
        const nextIndex = (currentTrackIndex + 1) % TRACKS.length;
        setCurrentTrackIndex(nextIndex);
        playMusic(TRACKS[nextIndex].src);
    }, [currentTrackIndex, playMusic]);

    // Auto-advance when music ends
    React.useEffect(() => {
        if (hasMusicEnded) {
            handleNext();
        }
    }, [hasMusicEnded, handleNext]);

    const handlePrevious = () => {
        const prevIndex = (currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
        setCurrentTrackIndex(prevIndex);
        playMusic(TRACKS[prevIndex].src);
    };

    const handleTrackSelect = (index: number) => {
        setCurrentTrackIndex(index);
        playMusic(TRACKS[index].src);
    };

    const formatTime = (time: number) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // If embedded, we don't use the fixed/floating layout logic
    const containerClasses = embedded
        ? "relative z-10 w-80"
        : `fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out ${isOpen ? 'w-80' : 'w-16 h-16 rounded-full'}`;

    return (
        <div className={containerClasses}>
            <div className={`
                relative bg-black/80 backdrop-blur-xl border-2 border-yellow-500/60 shadow-[0_0_15px_rgba(234,179,8,0.3)]
                ${isOpen || embedded ? 'rounded-xl p-4 min-h-[300px]' : 'w-full h-full rounded-full flex items-center justify-center cursor-pointer hover:border-yellow-400 hover:scale-105 transition-transform'}
            `}>

                {/* Minimized State Button - Hide if embedded */}
                {!isOpen && !embedded && (
                    <button onClick={() => setIsOpen(true)} className="text-yellow-500">
                        <Music className={`w-8 h-8 ${isMusicPlaying ? 'animate-pulse' : ''}`} />
                    </button>
                )}

                {/* Maximized Player UI */}
                {(isOpen || embedded) && (
                    <div className="flex flex-col h-full text-white">
                        {/* Header / Close */}
                        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                            <h3 className="font-serif text-yellow-500 text-lg flex items-center gap-2">
                                <span className="text-xl">⚜</span> Special Bologne Playlist
                            </h3>
                            {/* Hide minimize button if embedded */}
                            {!embedded && (
                                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                    <ChevronDown size={20} />
                                </button>
                            )}
                        </div>

                        {/* Now Playing */}
                        <div className="mb-4 text-center">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-700 to-yellow-900 rounded-full flex items-center justify-center mb-3 shadow-lg border border-yellow-500/30">
                                <Music className="w-8 h-8 text-yellow-100" />
                            </div>
                            <p className="text-xs font-medium text-yellow-100 tracking-wide px-1 font-serif leading-relaxed" title={TRACKS[currentTrackIndex].title}>
                                {TRACKS[currentTrackIndex].title}
                            </p>
                            <p className="text-[10px] text-yellow-500/60 uppercase tracking-widest mt-2">Now Playing</p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-center gap-6 mb-4">
                            <button onClick={handlePrevious} className="text-gray-400 hover:text-white transition-colors">
                                <SkipBack size={24} />
                            </button>
                            <button
                                onClick={toggleMusic}
                                className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg"
                            >
                                {isMusicPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
                            </button>
                            <button onClick={handleNext} className="text-gray-400 hover:text-white transition-colors">
                                <SkipForward size={24} />
                            </button>
                        </div>

                        {/* Time Counter & Progress */}
                        <div className="mb-4 px-1">
                            <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-1">
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max={duration || 100}
                                value={currentTime}
                                onChange={(e) => seekMusic(parseFloat(e.target.value))}
                                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500 hover:accent-yellow-400"
                            />
                        </div>

                        {/* Volume Slider */}
                        <div className="flex items-center gap-3 mb-4 px-1">
                            <Volume2 size={16} className="text-gray-500" />
                            <input
                                type="range"
                                min="0" max="1" step="0.05"
                                value={musicVolume}
                                onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
                                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                            />
                        </div>

                        {/* Playlist Toggle / List */}
                        <div className="mt-auto pt-4 border-t border-white/10">
                            <p className="text-xs text-gray-500 mb-2 font-serif uppercase">Select Movement</p>
                            <div className="max-h-40 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                                {TRACKS.map((track, idx) => (
                                    <button
                                        key={track.src}
                                        onClick={() => handleTrackSelect(idx)}
                                        className={`w-full text-left text-xs py-2 px-3 rounded hover:bg-white/5 transition-colors leading-relaxed border border-transparent ${currentTrackIndex === idx ? 'text-yellow-500 border-yellow-500/20 bg-yellow-500/10' : 'text-gray-400'}`}
                                        title={track.title}
                                    >
                                        {track.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Ornate corner decorations (CSS only) */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-500/40 rounded-tl-sm pointer-events-none" />
                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-yellow-500/40 rounded-tr-sm pointer-events-none" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-yellow-500/40 rounded-bl-sm pointer-events-none" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-yellow-500/40 rounded-br-sm pointer-events-none" />
                    </div>
                )}
            </div>
        </div>
    );
}
