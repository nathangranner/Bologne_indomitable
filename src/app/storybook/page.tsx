'use client';

import { StorySection } from '@/components/scrollytelling/StorySection';
import { scenes } from '@/data/story-scenes';

export default function StorybookPage() {
    return (
        <main className="bg-zinc-950 min-h-screen text-white">
            {scenes.map((scene, index) => (
                <StorySection
                    key={scene.id}
                    id={scene.id}
                    title={scene.title}
                    description={scene.description}
                    imageSrc={scene.imageSrc}
                    audioSrc={scene.audioSrc}
                    index={index}
                />
            ))}
        </main>
    );
}
