'use client';
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="px-24 py-12 bg-white text-gray-800 dark:bg-gray-200 dark:text-gray-800">
      <div className="container flex flex-col md:flex-row items-center">
        <Image
          src="/FR.png"
          alt="Profile Photo"
          width={400}
          height={400}
          className="rounded-3xl"
           
        />
        <div className="mt-4 md:mt-0 md:ml-8">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p>
            Hi, I’m Friat Weldekidan, an aspiring Front-end Developer based in Addis Ababa, Ethiopia, with a solid grasp of full-stack MERN development. I specialize in creating responsive, visually appealing web interfaces using HTML, CSS, JavaScript, and React.js. My passion lies in collaborating with teams to deliver high-quality development projects from start to finish. With experience in building robust web applications, integrating APIs, and enhancing user experiences, I am eager to bring creativity and determination to every project I undertake.
          </p>
          <section>
            <h2 className="text-xl font-bold mt-4">Education</h2>
            <ul>
              <li>Bachelor of Science: Electromechanical Engineering, University of Addis Ababa Science and Technology (2012 - 2016)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mt-4">Certifications</h2>
            <ul>
              <li>Full Stack Web Development (MERN) – Evangadi Tech</li>
              <li>Responsive Web Design – freeCodeCamp</li>
              <li>Programming Fundamentals – Udacity</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
