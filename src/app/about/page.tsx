'use client';

import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-12 pb-20 font-serif leading-relaxed flex items-center justify-center">
            <article className="max-w-4xl mx-auto space-y-16 text-center">

                {/* PVC Logo */}


                {/* Award Text Section */}
                <section className="space-y-8 text-lg md:text-xl text-gray-300 font-light text-left md:text-justify leading-loose">
                    <p>
                        The Pasadena Vocal Competition presents the <strong>Courtney B. Vance Chevalier Award</strong> to a singer whose performance includes an aria from an opera written by a composer from the Black diaspora. The award recognizes artistic excellence while affirming the importance of repertoire shaped by a broader range of histories and lived experience than opera has traditionally presented.
                    </p>
                    <p>
                        Opera has always been built to carry human experience. Its emotional language endures: love, loss, loyalty, joy, betrayal, longing. These feelings do not belong to one culture or one era. They persist because they are shared. What keeps things exciting over time is not the substance of the plot lines, but different lives and perspectives that are allowed to give them voice.
                    </p>
                    <p>
                        When the same emotional narratives are told through a limited range of voices, the art form can begin to feel settled... not because it has lost relevance. Opera, like any audience-driven endeavor, grows when more voices are invited in. Community widens, interest deepens, and the art form gains strength through wider participation. The stories do not change; our understanding of them does.
                    </p>
                    <p>
                        Joseph Bologne, Chevalier de Saint-Georges, exemplifies this widened plane. A composer, conductor, and violinist of exceptional ability, his career unfolded at the center of European musical life. His work was substantial; music enduring without pushing a marketing narrative, yet remaining available long enough to be heard again in an era that needs it.
                    </p>
                    <p>
                        History does not surface everything it contains on its own. Recognition needs intention, attention and moreover? Effort. In the status quo, absence is often mistaken for mediocrity, when it is more accurately the result of meritocracy. The long push of a glistening trickle of water against a blocked passage eventually finds its way through.
                    </p>
                    <p>
                        The Chevalier Award reflects this understanding in practice. It does not seek to replace tradition or revise history, but to allow the field to hold more of what it has always been capable of carrying.
                    </p>
                    <p>
                        What looks minimal is often what holds the most. A newly paved parking lot can appear stark in its minimalism. Flat and open, it is easy to mistake it for emptiness, when in fact it is built for countless stories to take place on its cleared monolithic slab.
                    </p>
                    <p>
                        And still, there are moments no parking system fully plans for. Pressure builds. A fissure forms. A green stalk and leaf breaks through the prescribed order, quietly and without permission.
                    </p>
                    <p>
                        The Chevalier Award honors the artists who make that emergence possible — and in doing so, allow opera’s enduring truths to be heard again with greater clarity and room for many more stories.
                    </p>

                    {/* PVC Logo */}
                    <div className="flex justify-center py-8">
                        <div className="relative w-64 h-32 md:w-80 md:h-40">
                            <Image
                                src="/assets_import/pvc_logo.png"
                                alt="Pasadena Vocal Competition Logo"
                                fill
                                className="object-contain filter invert opacity-90"
                                priority
                            />
                        </div>
                    </div>

                    <div className="py-8 text-center space-y-4">
                        <p className="text-xl md:text-2xl text-yellow-500 font-medium">
                            The Pasadena Vocal Competition gratefully acknowledges the generosity of the Chevalier Award sponsor Courtney B. Vance, whose support makes this recognition possible.
                        </p>
                        <p className="text-base text-gray-500">
                            For more information please visit the <a href="https://pasadenavocalcompetition.org/about-us/" target="_blank" rel="noopener noreferrer" className="text-yellow-500/80 hover:text-yellow-500 underline decoration-1 underline-offset-4">Pasadena Vocal Competition</a>
                        </p>
                    </div>
                </section>

                <div className="w-full flex justify-center py-6">
                    <span className="text-3xl text-yellow-500/30">⚜</span>
                </div>

                {/* Credits Header */}
                <header className="mb-12 border-b border-zinc-800 pb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4 tracking-wider uppercase">Credits</h1>
                </header>

                <div className="space-y-6 text-gray-400 font-light">
                    <p className="text-lg">
                        This Joseph Bologne storybook made for the <strong>Pasadena Vocal Competition</strong> is in honor of the <strong>Chevalier Award</strong>.
                    </p>

                    <p className="text-lg">
                        The special project was designed by <strong className="text-white">Nathan Granner</strong> and <strong className="text-white">A Lab Studios</strong>.
                    </p>

                    <p className="text-lg">
                        The opening song <em>Depuis Longtemps</em> is from the album <a href="https://www.pentatonemusic.com/product/ombre-di-luce/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline underline-offset-4 transition-colors">Ombre di Luce</a> courtesy of <strong>Pentatone Music</strong>.
                    </p>
                </div>
            </article>
        </div>
    );
}
