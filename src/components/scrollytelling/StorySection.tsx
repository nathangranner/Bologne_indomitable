'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { useAudio } from '@/lib/AudioContext';
import { VersaillesPlayer } from '../ui/VersaillesPlayer';

interface StorySectionProps {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    audioSrc: string;
    index: number;
    type?: 'video' | 'image';
}

function InViewVideo({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 } // Load when 10% visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isInView && videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
        } else if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [isInView]);

    return (
        <video
            ref={videoRef}
            src={isInView ? src : undefined} // Only load source when in view
            preload="none"
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-1000"
        />
    );
}



export function StorySection({ id, title, description, imageSrc, audioSrc, index, type = 'image' }: StorySectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { playNarrative, isNarrativePlaying, currentNarrativeSrc, playMusic } = useAudio();
    const router = useRouter();

    // Auto-detect type if not provided, for backward compatibility or ease of use
    const isVideo = type === 'video' || imageSrc.toLowerCase().endsWith('.mp4');

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center snap-center">
            {/* Background Media */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 z-0 bg-black"
            >
                {isVideo ? (
                    <InViewVideo src={imageSrc} />
                ) : (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover opacity-60"
                        priority={index === 0}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity, y }}
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
            >
                <h2 className={`
                    font-serif font-bold mb-6 drop-shadow-lg pb-2
                    ${index === 0
                        ? 'text-5xl md:text-7xl lg:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#F1D78A] to-[#996515] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                        : 'text-5xl md:text-7xl text-white'}
                `}>
                    {title}
                </h2>
                <p className={`
                    font-light leading-relaxed max-w-2xl mx-auto
                    ${index === 0
                        ? 'text-xl md:text-3xl text-[#D4AF37] font-serif tracking-widest uppercase drop-shadow-md'
                        : 'text-xl md:text-2xl text-gray-200 mb-10'}
                `}>
                    {description}
                </p>

                {audioSrc && index !== 12 && (
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => playNarrative(audioSrc)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all group backdrop-blur-md border ${currentNarrativeSrc === audioSrc && isNarrativePlaying ? 'bg-yellow-600 border-yellow-500 text-white shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 'bg-white/10 hover:bg-white/20 border-white/30 text-white'}`}
                        >
                            {currentNarrativeSrc === audioSrc && isNarrativePlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                            <span className="font-medium tracking-wide font-serif">
                                {currentNarrativeSrc === audioSrc && isNarrativePlaying ? 'Listening...' : 'Listen to Story'}
                            </span>
                        </button>
                    </div>
                )}

                {/* Listen While You Read Button - Only on First Slide */}
                {index === 0 && (
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => {
                                playMusic("/depuis_louder.mp3");
                            }}
                            className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-serif text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
                        >
                            <Music className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                            <span className="tracking-wide text-gray-100 group-hover:text-white">Listen while you scroll</span>
                        </button>
                    </div>
                )}

                {/* Hear the Full Story Button - Only on Last Slide */}
                {index === 12 && (
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => router.push('/podcast')}
                            className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-serif text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
                        >
                            <Music className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                            <span className="tracking-wide text-gray-100 group-hover:text-white">Hear the Full Story</span>
                        </button>
                    </div>
                )}
            </motion.div>
        </section>
    );
}
