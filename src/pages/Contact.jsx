import 'tailwindcss/tailwind.css';
import {  FaGithub,
  FaLinkedin,
  FaEnvelope,} from 'react-icons/fa';

const Contact = () => (
  <div className="p-6 text-center bg-[#EAE3EA] dark:bg-gray-900  sm:mx-full md:mx-auto md:max-w-4xl">
    <h2 className="text-4xl font-bold mt-2 p-3">Let's Talk!</h2>
    <p className="text-3xl leading-7 mt-3">
      Feel free to get in touch and talk code:
    </p>
    <div className="flex flex-col items-center mt-4 text-2xl space-y-4">
      <a
        href="mailto:corinnehaggerty2@gmail.com"
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500"
      >
        <FaEnvelope className="text-2xl mt-1" />
        <span className="text-xl">corinnehaggerty2@gmail.com</span>
      </a>
      <h3 className="text-2xl leading-7 mt-3 p-2">Connect with me:</h3>
      <div className="flex space-x-4">
        <a
          href="https://github.com/C1904H"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-black"
        >
          <FaGithub className="text-5xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/corinne-haggerty"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-700"
        >
          <FaLinkedin className="text-5xl" />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;