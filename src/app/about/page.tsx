'use client';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-12 pb-20 font-serif leading-relaxed flex items-center justify-center">
            <article className="max-w-3xl mx-auto space-y-12 text-center">
                {/* Header */}
                <header className="mb-12 border-b border-zinc-800 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4 drop-shadow-xl">Credits</h1>
                    <div className="h-1 w-16 bg-yellow-600/50 rounded-full mx-auto"></div>
                </header>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                    This Joseph Bologne storybook made for the <strong>Pasadena Vocal Competition</strong> is in honor of the <strong>Chevalier Award</strong>, given to the best video submission of an aria by a composer from the African Diaspora and in thanks to <strong>Courtney B. Vance</strong>.
                </p>

                <div className="w-full flex justify-center py-6">
                    <span className="text-2xl text-yellow-500/50">⚜</span>
                </div>

                <p className="text-lg md:text-xl text-gray-400 font-light">
                    The special project was designed by <strong className="text-white">Nathan Granner</strong> and <strong className="text-white">A Lab Studios</strong>.
                </p>

                <p className="text-lg md:text-xl text-gray-400 font-light">
                    The opening song <em>Depuis Longtemps</em> is from the album <a href="https://www.pentatonemusic.com/product/ombre-di-luce/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline underline-offset-4 transition-colors">Ombre di Luce</a> courtesy of <strong>Pentatone Music</strong>.
                </p>
            </article>
        </div>
    );
}
