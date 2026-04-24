export type Book = {
  id: number;
  title: string;
  year?: number;
  image: string;
  description: string;
  slug: string;
};

export const booksData: Book[] = [
  {
    id: 1,
    title: "There Is No Such Thing As Self-Made",
    year: 2025,
    image: "/books/there-is-no-such-thing-as-self-made.png",
    description: "A direct challenge to the myth of solo success and the unseen forces behind achievement.",
    slug: "there-is-no-such-thing-as-self-made",
  },
  {
    id: 2,
    title: "The Risk of Success",
    year: 2019,
    image: "/books/success-risk.png",
    description: "Understanding the risks and rewards on the path to success.",
    slug: "success-risk",
  },
  {
    id: 3,
    title: "Both Sides of POOR and RICH",
    year: 2024,
    image: "/books/both-sides.jpeg",
    description: "Exploring perspectives from both sides of life's challenges and opportunities.",
    slug: "both-sides",
  },
  {
    id: 4,
    title: "How To Get A Job And Keep It",
    year: 2023,
    image: "/books/get-a-job.jpeg",
    description: "A practical guide to career development and professional success.",
    slug: "get-a-job",
  },
  {
    id: 5,
    title: "Why Liberty Is so Important",
    year: 2022,
    image: "/books/liberty.jpeg",
    description: "A comprehensive exploration of freedom, rights, and personal liberty.",
    slug: "liberty",
  },
  {
    id: 6,
    title: "They Never Saw It Coming",
    year: 2021,
    image: "/books/never-saw-it.png",
    description: "Uncovering hidden truths and perspectives you never saw coming.",
    slug: "never-saw-it",
  },
  {
    id: 7,
    title: "Overwhelming Force",
    year: 2020,
    image: "/books/overwhelming-force.jpeg",
    description: "Harnessing the power of overwhelming force for breakthrough results.",
    slug: "overwhelming-force",
  },
  {
    id: 8,
    title: "Blessed Because of My Father",
    image: "/books/blessed-because-of-my-father.png",
    description: "A personal reflection on faith, family, and the lasting influence of a father's example.",
    slug: "blessed-because-of-my-father",
  },
  {
    id: 9,
    title: "Mistakes That Made Me a Trillionaire",
    image: "/books/mistakes-that-made-me-a-trillionaire.png",
    description: "Lessons drawn from mistakes, setbacks, and the decisions that shaped a bigger vision.",
    slug: "mistakes-that-made-me-a-trillionaire",
  },
];
