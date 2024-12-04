const About: React.FC = () => {
    return (
      <section id="about" className="px-6 py-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-32 h-32 mb-6 md:mb-0 md:mr-6 rounded-full bg-blue-300 dark:bg-blue-600"></div>
          <div>
            <h2 className="text-2xl font-bold">About Me</h2>
            <p>I am a passionate frontend developer skilled in creating responsive and user-friendly interfaces.</p>
            <ul className="mt-4">
              <li>B.Sc. in Electromechanical Engineering - Addis Ababa Science & Tech</li>
              <li>Certifications: MERN Stack, Responsive Web Design</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  