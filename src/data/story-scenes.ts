export interface StoryScene {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    audioSrc: string;
    type: 'video' | 'image';
}

export const scenes: StoryScene[] = [
    {
        id: "title-cover",
        title: "Joseph Bologne",
        description: "Chevalier de Saint-Georges",
        imageSrc: "/assets_import/Slow_Joseph_cover_v2.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "roots",
        title: "From Guadeloupe",
        description: "Born in 1745 in the lush, vibrant island of Guadeloupe, Joseph was the son of Georges de Bologne Saint-Georges, a wealthy French plantation owner, and Nanon, his enslaved African mother. She imparted a heritage of resilience and dignity that would define his destiny.",
        imageSrc: "/assets_import/BOlogne Mom Nanon.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "childhood",
        title: "The Journey",
        description: "At the tender age of seven, Joseph's life took a significant turn. Determined to provide him with new opportunities, his father brought him across the vast Atlantic to France—a voyage from the world of his mother to the complex society of Paris.",
        imageSrc: "/assets_import/Bologne Child.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "arrival",
        title: "Arrival in Paris",
        description: "In Paris, young Joseph entered the elite Academy of Monsieur de Boëssière. There, he honed his skills in literature, science, and horsemanship, immersing himself in a refined world far removed from the Caribbean breeze of his birth.",
        imageSrc: "/assets_import/young man BOlogne.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "fencing-student",
        title: "The Art of the Sword",
        description: "The clashing of swords became a new rhythm in his life. At the academy, his prowess with the blade was unparalleled. Tales spread of his speed, precision, and elegance as he mastered the art of fencing.",
        imageSrc: "/assets_import/young man bologne sword.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "the-duel",
        title: "The Duelist",
        description: "By fifteen, he was defeating seasoned masters, earning both admiration and envy. The Chevalier de Saint-Georges was born not merely by title, but by the undeniable mastery he displayed with every parry and thrust.",
        imageSrc: "/assets_import/bologne salute.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "virtuoso",
        title: "The Virtuoso",
        description: "But the violin soon became his true instrument of choice. Immersed in the rich musical scene of Paris, he studied under esteemed composers and quickly rose to prominence, his musical talent rivaling his skill with the sword.",
        imageSrc: "/assets_import/Bologne young man playing violin.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "maestro",
        title: "The Maestro & Haydn",
        description: "As concertmaster of the prestigious Concert des Amateurs, Joseph caught the eye of Franz Josef Haydn. He collaborated with the Austrian master, assisting in the debut of Haydn's 'Paris Symphonies' and pushing the boundaries of classical music.",
        imageSrc: "/assets_import/bologne and franz joseph haydn.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "court",
        title: "The Sting of Rejection",
        description: "In 1776, he was nominated to direct the Paris Opéra. But a group of performers petitioned Queen Marie Antoinette, refusing to submit to a man of mixed race. Though the rejection was sharp, Joseph channeled his energy into his music.",
        imageSrc: "/assets_import/bologne and Antoinette.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "revolution",
        title: "Colonel Saint-Georges",
        description: "When the Revolution swept France, Joseph became an ardent abolitionist. He was appointed colonel of the Légion St.-Georges, the first all-Black regiment in Europe, fighting for 'Liberté, égalité, fraternité' alongside men like Thomas-Alexandre Dumas.",
        imageSrc: "/assets_import/Bologne center hero 1.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "shadows",
        title: "The Shadow of the Prison",
        description: "During the Reign of Terror, the Revolution turned on its own. Accused unjustly, Joseph spent months in a dank prison cell facing possible execution. He survived, but emerged to find a shifted France and his status diminished.",
        imageSrc: "/assets_import/bolognes prison.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "reflections",
        title: "Return to Harmony",
        description: "In his later years, he returned to his first love—music—directing a new orchestra, Le Cercle de l'Harmonie. He passed away in 1799, quietly leaving behind a legacy that echoed the profound impact he had made.",
        imageSrc: "/assets_import/bologne old man in his goden years.mp4",
        audioSrc: "",
        type: "video"
    },
    {
        id: "legend",
        title: "The Legend",
        description: "Today, the Chevalier de Saint-Georges is remembered as a symbol of excellence against all odds. His life is a testament to the power of talent and perseverance, his melodies resonating through history forever.",
        imageSrc: "/assets_import/Bologne enshrined.png",
        audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_01_-_Promenade_Allegro_giusto_nel_modo_russico_senza_allegrezza_ma_poco_sostenuto.mp3",
        type: "image"
    }
];
