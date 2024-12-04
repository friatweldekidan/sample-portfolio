import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      <section id="contact" className="px-24 py-12 bg-blue-400 text-gray-800">
        <h2 className="text-2xl text-white font-bold mb-6">Contact Me</h2>
        <div className="text-white mt-4">
          <p className="mb-2">Phone: +251 92 064 1902</p>
          <p>Email: friatweld@gmail.com</p>
          <div className="flex mt-4">
            <a
              href="https://www.linkedin.com/in/friat-weldekidan/"
              className="mr-2 text-gray-800 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/friatweldekidan"
              className="mx-2 text-gray-800 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://friat-folio-omega.vercel.app/projects"
              className="mx-2 text-gray-800 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe size={24} />
            </a>
          </div>
        </div>
      </section>
      <section id="copyright" className="px-12 py-3 bg-gray-800 text-white">
        <h2 className="text-lg text-center">© 2024 Friat Weldekidan. All rights reserved.</h2>
      </section>
    </>
  );
};

export default Footer;
