'use client';

import { StorySection } from '@/components/scrollytelling/StorySection';
import { scenes } from '@/data/story-scenes';

export default function Home() {
    const titleScene = scenes[0];

    return (
        <main className="bg-zinc-950 min-h-screen text-white">
            {/* Title Card Section */}
            <div className="h-screen w-full relative">
                <StorySection
                    key={titleScene.id}
                    id={titleScene.id}
                    title={titleScene.title}
                    description={titleScene.description}
                    imageSrc={titleScene.imageSrc}
                    audioSrc={titleScene.audioSrc}
                    index={0}
                />
            </div>

            {/* The Story - Text Content */}
            <div className="bg-black text-white px-6 md:px-12 py-20 font-serif leading-relaxed text-center relative z-20">
                <article className="max-w-4xl mx-auto space-y-8 text-left">

                    {/* Introduction */}
                    <section className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <p className="text-xl md:text-2xl font-light text-white mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-yellow-500 first-letter:mr-3 float-left">
                            History has often been unkind to its most brilliant anomalies, but few have been as deliberately erased as Joseph Bologne, Chevalier de Saint-Georges.
                        </p>
                        <p>
                            Conducting the finest orchestra in Paris, dazzling Queen Marie Antoinette with his violin, and disarming opponents with legendary fencing prowess—Joseph Bologne did it all. He was a man of superlatives: the best fencer in France, a virtuoso violinist who rivaled Mozart, and a pioneering composer. Yet, for centuries, his name was relegated to footnotes, often diminished by the moniker "The Black Mozart," a title that fails to capture the singularity of his genius. He was not a shadow of another; he was a blazing sun in the firmament of 18th-century Europe, a man who defied the rigid racial and social hierarchies of his time to define excellence on his own terms.
                        </p>
                    </section>

                    {/* Early Life */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-yellow-100 border-l-4 border-yellow-600 pl-4 mt-12 mb-6">Origins in Guadeloupe</h2>
                        <p className="text-gray-300 text-lg">
                            Joseph Bologne was born on Christmas Day, 1745, in Baillif, Guadeloupe. His birth was the result of a liaison between Georges de Bologne Saint-Georges, a wealthy French planter and minor noble, and Nanon, a 16-year-old enslaved Senegalese woman who served as his wife’s personal maid. Under the brutal <em>Code Noir</em> of the French colonies, Joseph was born enslaved, inherited from the status of his mother.
                        </p>
                        <p className="text-gray-300 text-lg">
                            However, his father defied convention. Georges de Bologne not only acknowledged his son but bestowed his surname upon him. In 1753, arguably to escape the legal precarity of the islands and a looming murder charge (which was later resolved), Georges took Nanon and the 7-year-old Joseph to France. This journey across the Atlantic was more than a relocation; it was a transcendence of destiny. In Paris, young Joseph was not treated as a servant but as a nobleman’s son, afforded an education that many legitimate heirs would envy.
                        </p>
                    </section>

                    {/* Fencing and Education */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-yellow-100 border-l-4 border-yellow-600 pl-4 mt-12 mb-6">The Art of the Sword</h2>
                        <p className="text-gray-300 text-lg">
                            At age 13, Joseph was enrolled in the academy of Nicolas Texier de La Boëssière, a master of arms who transformed fencing into a science. It was here that Bologne first made his name. He possessed a rare combination of physical power—standing nearly six feet tall—and balletic grace. He developed a speed that was said to be imperceptible to the eye.
                        </p>
                        <p className="text-gray-300 text-lg">
                            By 17, he was unbeatable. When a fencing master named Picard publicly mocked him as "Boëssière's mulatto," Bologne challenged him to a duel and defeated him with such elegance that Picard was forced to apologize. King Louis XV, hearing of the young prodigy’s exploits, appointed him a <em>Gendarme de la Garde</em> and granted him the title <strong>Chevalier de Saint-Georges</strong>. He was a paradox: a mixed-race man in a society built on racial purity, yet upheld as the very model of French chivalry and masculine perfection.
                        </p>
                    </section>

                    {/* Music Career */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-yellow-100 border-l-4 border-yellow-600 pl-4 mt-12 mb-6">A Virtuoso in Paris</h2>
                        <p className="text-gray-300 text-lg">
                            While his sword brought him fame, his bow brought him immortality. How Joseph learned music remains a mystery, though it is believed he studied under Jean-Marie Leclair and François-Joseph Gossec. In 1769, he joined Gossec’s new orchestra, the <em>Concert des Amateurs</em>, as a first violinist. Three years later, he made his debut as a soloist, performing his own concertos (Op. 2). The audience was stunned.
                        </p>
                        <p className="text-gray-300 text-lg">
                            His innovative style bridged the gap between the Baroque and Classical eras. He pioneered the <em>Sinfonia Concertante</em>, a genre combining the symphony with the concerto, which heavily influenced Mozart during his visit to Paris. In 1773, Bologne took over the conductorship of the <em>Concert des Amateurs</em>. Under his baton, it became recognized as the finest orchestra in Paris, and arguably all of Europe, celebrated for its precision and dynamic range.
                        </p>
                    </section>

                    {/* The Opera Incident */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-yellow-100 border-l-4 border-yellow-600 pl-4 mt-12 mb-6">The Glass Ceiling</h2>
                        <p className="text-gray-300 text-lg">
                            His talent gained him entry into the inner sanctum of Versailles. He became a favorite of Queen Marie Antoinette, often playing private duets with her. Emboldened by this royal favor, Bologne sought the directorship of the Paris Opéra (the Royal Academy of Music) in 1776. It was the highest musical post in the nation.
                        </p>
                        <p className="text-gray-300 text-lg">
                            But the aristocracy that applauded his fencing and violin could not stomach a man of color in a position of authority. Three leading sopranos, including the famous Sophie Arnould, petitioned the Queen, stating that their "honor and delicate conscience could never allow them to submit to the orders of a mulatto." The racism was naked and effective. The Queen, unwilling to court scandal, withdrew her support. It was a crushing, public rejection that marked a turning point in Bologne's life, sowing the seeds of disillusionment with the monarchy.
                        </p>
                    </section>

                    {/* Revolution */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-yellow-100 border-l-4 border-yellow-600 pl-4 mt-12 mb-6">The Revolution and the Legion</h2>
                        <p className="text-gray-300 text-lg">
                            When the French Revolution erupted in 1789, the Chevalier did not flee with his noble peers. Instead, he embraced the ideals of <em>Liberté, Égalité, Fraternité</em>. For him, the Rights of Man were not abstract; they were a roadmap to his own humanity. He joined the National Guard and, in 1792, was appointed colonel of the first all-Black regiment in Europe, the <em>Légion Franche de Cavalerie des Américains</em>, which became known simply as the <strong>Légion Saint-Georges</strong>.
                        </p>
                        <p className="text-gray-300 text-lg">
                            He fought bravely, defending the Republic against Austrian forces. Yet, the Terror that followed consumed its own. Suspected of royalist sympathies due to his past proximity to the Queen, Bologne was betrayed, arrested, and imprisoned for nearly a year in 1793. He narrowly escaped the guillotine, saved only by the fall of Robespierre.
                        </p>
                    </section>

                    {/* Legacy */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-yellow-100 border-l-4 border-yellow-600 pl-4 mt-12 mb-6">Erasure and Resurrection</h2>
                        <p className="text-gray-300 text-lg">
                            Broken by imprisonment and disillusionment, Bologne returned to Paris but found the world changed. Napoleon Bonaparte re-established slavery in 1802 and banned the music of Saint-Georges. The Emperor ordered his works destroyed, an act of cultural erasure that nearly succeeded. Bologne spent his final years in relative obscurity, directing a new orchestra, <em>Le Cercle de l'Harmonie</em>, before dying of a bladder infection in 1799 at the age of 53.
                        </p>
                        <p className="text-gray-300 text-lg">
                            For two centuries, Joseph Bologne was a ghost, his scores gathering dust in archives. But truth, like great music, resonates across time. Today, the Chevalier de Saint-Georges has returned to the stage. His operas are performed, his concertos recorded, and his life celebrated in film and literature. He stands once again as a testament to brilliance that cannot be silenced—a man who lived without compromise and left a legacy of unassailable excellence.
                        </p>
                    </section>

                    <footer className="mt-20 pt-10 border-t border-zinc-800 text-center text-gray-500 text-sm">
                        <p>Researched and compiled for the Joseph Bologne Project.</p>
                    </footer>
                </article>
            </div>
        </main>
    );
}
