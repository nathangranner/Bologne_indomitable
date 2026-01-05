'use client';

import { scenes } from '@/data/story-scenes';

export default function VideoPage() {
    const videoScenes = scenes.filter(scene => scene.type === 'video');

    return (
        <div className="min-h-screen bg-black p-8 text-white">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-yellow-500 mb-4">Video Archive</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of visual moments from the life of Joseph Bologne.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoScenes.map((scene) => (
                        <div key={scene.id} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-xl hover:border-yellow-600/50 transition-all group">
                            <div className="relative aspect-video bg-black">
                                <video
                                    src={scene.imageSrc}
                                    controls
                                    className="w-full h-full object-cover"
                                    preload="metadata"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-yellow-500 transition-colors">{scene.title}</h3>
                                <p className="text-sm text-gray-400 line-clamp-3">{scene.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="/" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors uppercase tracking-widest text-sm font-bold">
                        ← Back to Narrative
                    </a>
                </div>
            </div>
        </div>
    );
}
