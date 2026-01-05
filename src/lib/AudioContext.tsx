'use client';

import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

interface AudioContextType {
    // Background Music Controls
    playMusic: (src: string) => void;
    pauseMusic: () => void;
    toggleMusic: () => void;
    isMusicPlaying: boolean;
    currentMusicSrc: string | null;
    musicVolume: number;
    setMusicVolume: (vol: number) => void;

    // Narrative / Scene Audio Controls
    playNarrative: (src: string) => void;
    pauseNarrative: () => void;
    isNarrativePlaying: boolean;
    currentNarrativeSrc: string | null;

    // Time Controls
    currentTime: number;
    duration: number;
    seekMusic: (time: number) => void;
    hasMusicEnded: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
    // Refs for dual audio objects
    const musicRef = useRef<HTMLAudioElement | null>(null);
    const narrativeRef = useRef<HTMLAudioElement | null>(null);

    // State
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [currentMusicSrc, setCurrentMusicSrc] = useState<string | null>(null);
    const [musicVolume, setMusicVolume] = useState(0.3); // Default low for background
    const [hasMusicEnded, setHasMusicEnded] = useState(false);

    const [isNarrativePlaying, setIsNarrativePlaying] = useState(false);
    const [currentNarrativeSrc, setCurrentNarrativeSrc] = useState<string | null>(null);

    // Time State
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Initialize Audio Objects
    useEffect(() => {
        musicRef.current = new Audio();
        musicRef.current.loop = false;
        musicRef.current.volume = musicVolume;

        const updateTime = () => {
            if (musicRef.current) {
                setCurrentTime(musicRef.current.currentTime);
                setDuration(musicRef.current.duration || 0);
            }
        };

        const handleEnded = () => {
            setHasMusicEnded(true);
            setIsMusicPlaying(false);
        };

        musicRef.current.addEventListener('timeupdate', updateTime);
        musicRef.current.addEventListener('loadedmetadata', updateTime);
        musicRef.current.addEventListener('ended', handleEnded);

        narrativeRef.current = new Audio();
        narrativeRef.current.onended = () => setIsNarrativePlaying(false);

        return () => {
            musicRef.current?.removeEventListener('timeupdate', updateTime);
            musicRef.current?.removeEventListener('loadedmetadata', updateTime);
            musicRef.current?.removeEventListener('ended', handleEnded);
            musicRef.current?.pause();
            narrativeRef.current?.pause();
        };
    }, []);

    // Handle Volume Changes
    useEffect(() => {
        if (musicRef.current) {
            // Ducking Logic: If narrative is playing, lower music volume drastically
            const targetVolume = isNarrativePlaying ? musicVolume * 0.2 : musicVolume;
            musicRef.current.volume = targetVolume;
        }
    }, [musicVolume, isNarrativePlaying]);

    // --- Music Handlers ---
    const playMusic = (src: string) => {
        if (!musicRef.current) return;
        setHasMusicEnded(false);
        if (currentMusicSrc !== src) {
            musicRef.current.src = src;
            setCurrentMusicSrc(src);
        }
        musicRef.current.play().catch(e => console.error("Music play failed:", e));
        setIsMusicPlaying(true);
    };

    const pauseMusic = () => {
        musicRef.current?.pause();
        setIsMusicPlaying(false);
    };

    const toggleMusic = () => {
        if (isMusicPlaying) pauseMusic();
        else if (currentMusicSrc) musicRef.current?.play().then(() => setIsMusicPlaying(true));
    };

    // --- Narrative Handlers ---
    const playNarrative = (src: string) => {
        if (!narrativeRef.current) return;

        // If clicking same track that is playing, pause it
        if (currentNarrativeSrc === src && isNarrativePlaying) {
            pauseNarrative();
            return;
        }

        narrativeRef.current.src = src;
        setCurrentNarrativeSrc(src);
        narrativeRef.current.play().catch(e => console.error("Narrative play failed:", e));
        setIsNarrativePlaying(true);
    };

    const pauseNarrative = () => {
        narrativeRef.current?.pause();
        setIsNarrativePlaying(false);
    };

    const seekMusic = (time: number) => {
        if (musicRef.current) {
            musicRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    return (
        <AudioContext.Provider value={{
            playMusic, pauseMusic, toggleMusic, isMusicPlaying, currentMusicSrc, musicVolume, setMusicVolume,
            playNarrative, pauseNarrative, isNarrativePlaying, currentNarrativeSrc,
            currentTime, duration, seekMusic, hasMusicEnded
        }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
}
