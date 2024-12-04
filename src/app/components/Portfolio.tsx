const projects = [
    { id: 1, name: 'Restaurant Website', description: 'A dynamic website for a restaurant.', link: '#' },
    { id: 2, name: 'To-Do App', description: 'A task management app with date sorting.', link: '#' },
  ];
  
  const Portfolio: React.FC = () => {
    return (
      <section id="portfolio" className="px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              <h3 className="font-bold">{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-500">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  