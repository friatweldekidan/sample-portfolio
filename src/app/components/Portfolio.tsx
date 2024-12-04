import Link from 'next/link';


const projects = [
  {
    id: 1,
    name: 'Personal Portfolio',
    description: 'A modern and responsive personal portfolio website created using Next.js. It showcases projects, skills, and experiences, with dynamic routing and optimized performance.',
    link: 'https://friat-folio-omega.vercel.app/projects',
    img: '/projects/img1.png',
  },
  {
    id: 2,
    name: 'Tic Tac Toe',
    description: 'I built a browser-based Tic Tac Toe game as a way to practice modular code design and organize logic into objects and modules while keeping the structure clean and scalable.',
    link: 'https://friatweldekidan.github.io/tic-tac-toe/',
    img: '/projects/img2.png',
  },
  {
    id: 3,
    name: 'Import Export Website',
    description: 'I developed a website for an import and export company using Next.js.',
    link: 'https://lijuimportexport.com/',
    img: '/projects/img3.png',
  },
  {
    id: 4,
    name: 'Restaurant Page',
    description: 'The Restaurant Page project involved creating a dynamic multi-page website using JavaScript and DOM manipulation.',
    link: 'https://friatweldekidan.github.io/Restaurant-page/',
    img: '/projects/img4.png',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="px-24 py-12 bg-white text-gray-800  dark:bg-gray-800 dark:text-gray-800">
      <h2 className="text-2xl font-bold mb-6 dark:text-gray-200">Portfolio</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="p-4 rounded-md shadow-md bg-gray-100">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <Link href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
