'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import Image from 'next/image';
import { useAudio } from '@/lib/AudioContext';

export default function PodcastPage() {
    const { pauseMusic: pauseGlobalAudio } = useAudio();

    // Ref for the single audio track
    const audioRef = useRef<HTMLAudioElement>(null);

    // Refs for visualization
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const sourceNodesRef = useRef<MediaElementAudioSourceNode[]>([]);
    const rafRef = useRef<number | null>(null);
    const visualizerBarsRef = useRef<(HTMLDivElement | null)[]>([]);
    const shimmerRef = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isAudioContextReady, setIsAudioContextReady] = useState(false);

    // Pause global audio when entering this page
    useEffect(() => {
        pauseGlobalAudio();

        // Cleanup AudioContext on unmount
        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [pauseGlobalAudio]);

    const initializeAudioContext = () => {
        if (audioContextRef.current) return;

        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContext();
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 64; // Small FFT size for ~32 frequency bins, enough for 20 bars

        // Connect Podcast Source
        if (audioRef.current) {
            const src = ctx.createMediaElementSource(audioRef.current);
            src.connect(analyser);
            sourceNodesRef.current.push(src);
        }

        // Connect Analyser to Destination (Speakers)
        analyser.connect(ctx.destination);

        audioContextRef.current = ctx;
        analyserRef.current = analyser;
        setIsAudioContextReady(true);
    };

    const updateVisualizer = () => {
        if (!analyserRef.current || !isPlaying) return;

        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);

        // Map frequency data to bars
        let totalVolume = 0;
        let count = 0;

        visualizerBarsRef.current.forEach((bar, index) => {
            if (bar) {
                // Simple mapping: use index + 1 to skip very low freqs
                const value = dataArray[index + 1] || 0;
                totalVolume += value;
                count++;

                // Scale value (0-255) to height percentage (0-100)
                // Add a minimum height so they don't disappear completely
                const height = Math.max(10, (value / 255) * 100);
                bar.style.height = `${height}%`;
            }
        });

        // Background Shimmer Effect
        if (shimmerRef.current && count > 0) {
            const avgVolume = totalVolume / count;
            // Map avgVolume (0-255) to opacity (0.05 - 0.20)
            const opacity = 0.05 + (avgVolume / 255) * 0.15;
            shimmerRef.current.style.opacity = opacity.toString();
        }

        rafRef.current = requestAnimationFrame(updateVisualizer);
    };

    // Watch play state to start/stop animation
    useEffect(() => {
        if (isPlaying && isAudioContextReady) {
            updateVisualizer();
        } else if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }
    }, [isPlaying, isAudioContextReady]);


    // Handle loading metadata to get duration
    const onLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    // Sync time update
    const onTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const togglePlay = async () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                // Ensure global audio is paused again just in case
                pauseGlobalAudio();

                // Initialize Audio Context on first user interaction if needed
                if (!audioContextRef.current) {
                    initializeAudioContext();
                }
                // Resume context if suspended (browser autoplay policy)
                if (audioContextRef.current?.state === 'suspended') {
                    await audioContextRef.current.resume();
                }

                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const vol = parseFloat(e.target.value);
        setVolume(vol);
        if (audioRef.current) audioRef.current.volume = vol;
        setIsMuted(vol === 0);
    };

    const toggleMute = () => {
        if (isMuted) {
            setVolume(1);
            if (audioRef.current) audioRef.current.volume = 1;
            setIsMuted(false);
        } else {
            setVolume(0);
            if (audioRef.current) audioRef.current.volume = 0;
            setIsMuted(true);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-black text-white pt-20 px-4 pb-20 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets_import/podcast_bg.png"
                    alt="Podcast Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />

                {/* Static Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

                {/* Audio Reactive Shimmer Overlay */}
                <div
                    ref={shimmerRef}
                    className="absolute inset-0 bg-yellow-500/30 mix-blend-overlay transition-opacity duration-75 ease-out opacity-0"
                />
            </div>

            {/* Title Section with Opacity Transition */}
            <div className={`relative z-10 max-w-4xl mx-auto flex flex-col items-center transition-opacity duration-700 ${isPlaying ? 'opacity-20' : 'opacity-100'}`}>
                <h1 className="text-5xl font-serif font-bold mb-4 text-yellow-500">The Podcast</h1>
                <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl">
                    Experience the complete story of Joseph Bologne, brought to life with full narration and the Chevalier's own compositions.
                </p>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                {/* Cassette / Player Visual */}
                <div className="w-full max-w-2xl bg-zinc-900/80 rounded-3xl p-8 shadow-2xl border border-zinc-800 relative overflow-hidden">
                    {/* Cover Art Bg */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        {/* Abstract or image pattern could go here */}
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        {/* Audio Visualization / Status */}
                        <div className="w-full h-32 bg-black/50 rounded-xl flex items-center justify-center border border-zinc-800">
                            <div className="flex gap-1 items-end h-16 px-4">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div
                                        key={i}
                                        ref={(el) => { visualizerBarsRef.current[i] = el; }}
                                        className="w-2 bg-yellow-600 rounded-t-sm transition-all duration-75 ease-out"
                                        style={{
                                            height: '10%', // Initial baseline height
                                        }}
                                    />
                                ))}
                            </div>
                            {!isPlaying && !currentTime && (
                                <span className="absolute text-zinc-600 font-serif italic">Ready to play</span>
                            )}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full space-y-2">
                            <input
                                type="range"
                                min="0"
                                max={duration || 100}
                                value={currentTime}
                                onChange={handleSeek}
                                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                            />
                            <div className="flex justify-between text-sm text-zinc-400 font-mono">
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-8">
                            <button className="text-zinc-400 hover:text-white transition-colors">
                                <SkipBack size={28} />
                            </button>

                            <button
                                onClick={togglePlay}
                                className="w-20 h-20 bg-yellow-600 hover:bg-yellow-500 rounded-full flex items-center justify-center text-black transition-transform hover:scale-105 shadow-xl shadow-yellow-600/20"
                            >
                                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                            </button>

                            <button className="text-zinc-400 hover:text-white transition-colors">
                                <SkipForward size={28} />
                            </button>
                        </div>

                        {/* Volume */}
                        <div className="flex items-center gap-4 w-full max-w-xs">
                            <button onClick={toggleMute} className="text-zinc-400 hover:text-white">
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-zinc-400"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src="/new_podcast.mp3"
                crossOrigin="anonymous"
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    );
}
