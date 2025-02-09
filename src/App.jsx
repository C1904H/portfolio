import React, { useState, useEffect } from 'react';
// import { Card, CardContent } from '../components/ui/card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Button } from '../components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaBootstrap,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaVideo,
  FaDesktop,
  FaSearch
} from 'react-icons/fa';
import {
  SiRedux,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiJest,
  SiTypescript,
  SiDjango,
  SiAngular,
  SiExpo,
  SiGit,
  SiGithub,
  SiHeroku,
  SiNetlify,
  SiRailway,
  SiPostman,
  SiJquery
} from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';

const Home = () => (
  <div className="p-6 flex flex-col items-center text-center">
    <img
      src="profileportrait.jpg"
      className="w-48 h-48 rounded-full"
      alt="Corinne Haggerty Portrait"
    />
    <h1 className="text-2xl font-bold">Corinne Haggerty</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      I'm a web developer from Scotland. I enjoy creating functional and
      engaging websites and apps. Feel free to explore my portfolio, and connect
      with me—I’d love to discuss opportunities to work together!
    </p>
    <Button
      className="mt-4"
      onClick={() => window.open('Corinne-Haggerty-Resume.pdf', '_blank')}
    >
      Download Resume
    </Button>
  </div>
);

const About = ({ setActivePage }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold">About Me</h2>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      I’m a Web Developer with a passion for creating efficient, user-friendly
      digital solutions.{' '}
    </p>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      In 2025 I completed a Full-Stack Web Development course with
      CareerFoundry. I’ve gained hands-on experience with technologies like
      Python, JavaScript, React, Node.js, CSS, and HTML. I thrive on solving
      complex problems and building web applications that drive meaningful
      change. Before transitioning into web development, I spent several years
      as a clinical pharmacist specializing in cancer care. In that role, I
      honed my ability to manage intricate workflows, solve complex challenges,
      and ensure precision in high-stakes environments. These experiences taught
      me to approach every problem with a detail-oriented, analytical
      mindset—skills that I now apply to my work in tech. I’m passionate about
      how technology can improve healthcare and make a tangible difference in
      people’s lives. I’m eager to bring my unique blend of healthcare expertise
      and technical skills to teams that are building impactful web
      applications. I'm open to remote and hydrid roles. 
      <button 
    onClick={() => setActivePage('contact')} 
    className="text-blue-500 hover:underline focus:outline-none"
  >
    &nbsp;Contact me
  </button> 
  &nbsp;to connect.
    </p>
    <p className="text-gray-600 dark:text-gray-400 mt-4">
      I love travelling and experiencing new places, cultures, and cuisines.
      After my first cup of coffee, you'll find me ready to tackle whatever
      adventures the day has in store!
    </p>
    <h2 className="text-xl font-bold mt-6">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold">Languages</h3>
        {/* <div className="flex justify-center space-x-4 mt-2 text-3xl"> */}
        <div className="grid grid-cols-3 gap-4 mt-2 text-3xl">
          <div className="flex flex-col items-center">
            <FaHtml5 />
            <p className="text-sm mt-1">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt />
            <p className="text-sm mt-1">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare />
            <p className="text-sm mt-1">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPython />
            <p className="text-sm mt-1">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript />
            <p className="text-sm mt-1">TypeScript</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold">Frontend Frameworks & Libraries</h3>
        {/* <div className="flex justify-center space-x-4 mt-2 text-3xl"> */}
        <div className="grid grid-cols-3 gap-4 mt-2 text-3xl">
          <div className="flex flex-col items-center">
            <FaReact />
            <p className="text-sm mt-1">React</p>
          </div>
          <div className="flex flex-col items-center">
            <SiRedux />
            <p className="text-sm mt-1">Redux</p>
          </div>
          <div className="flex flex-col items-center">
            <SiAngular />
            <p className="text-sm mt-1">Angular</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBootstrap />
            <p className="text-sm mt-1">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <SiExpo />
            <p className="text-sm mt-1">Expo</p>
          </div>
          <div className="flex flex-col items-center">
            <SiJquery />
            <p className="text-sm mt-1">jQuery</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold">Backend</h3>
        {/* <div className="flex justify-center space-x-4 mt-2 text-3xl"> */}
        <div className="grid grid-cols-3 gap-4 mt-2 text-3xl">
          <div className="flex flex-col items-center">
            <FaNodeJs />
            <p className="text-sm mt-1">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiDjango />
            <p className="text-sm mt-1">Django</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold">Databases</h3>
        {/* <div className="flex justify-center space-x-4 mt-2 text-3xl"> */}
        <div className="grid grid-cols-3 gap-4 mt-2 text-3xl">
          <div className="flex flex-col items-center">
            <SiPostgresql />
            <p className="text-sm mt-1">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb />
            <p className="text-sm mt-1">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <DiSqllite />
            <p className="text-sm mt-1">SQLite</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold">Version Control</h3>
        <div className="grid grid-cols-3 gap-4 mt-2 text-3xl">
          {/* <div className="flex justify-center space-x-4 mt-2 text-3xl"> */}
          <div className="flex flex-col items-center">
            <SiGit />
            <p className="text-sm mt-1">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <SiGithub />
            <p className="text-sm mt-1">GitHub</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold">Tools & Platforms</h3>
        {/* <div className="flex justify-center space-x-4 mt-2 text-3xl"> */}
        <div className="grid grid-cols-3 gap-4 mt-2 text-3xl">
          <div className="flex flex-col items-center">
            <FaAws />
            <p className="text-sm mt-1">AWS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiFirebase />
            <p className="text-sm mt-1">Firebase</p>
          </div>
          <div className="flex flex-col items-center">
            <SiHeroku />
            <p className="text-sm mt-1">Heroku</p>
          </div>
          <div className="flex flex-col items-center">
            <SiNetlify />
            <p className="text-sm mt-1">Netlify</p>
          </div>
          <div className="flex flex-col items-center">
            <SiRailway />
            <p className="text-sm mt-1">Railway</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold">Testing</h3>
        <div className="grid grid-cols-3 gap-4 mt-2 text-3xl">
          {/* <div className="flex justify-center space-x-4 mt-2 text-3xl"> */}
          <div className="flex flex-col items-center">
            <SiJest />
            <p className="text-sm mt-1">Jest</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPostman />
            <p className="text-sm mt-1">Postman</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const projects = [
  {
    title: 'myFlix React App',
    image: 'myFlixClient_img.jpg',
    description:
      'Client-side for myFlix movie app using existing server-side code, developed using MERN stack. Users can sign up, browse movies, and manage favorite selections. Personal profile allows users to update their information, view favorite movies or delete account.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveLink: 'https://myflix1000.netlify.app',
    githubLink: 'https://github.com/C1904H/myFlix-client',
    caseStudy: 'case-study.html'
  },
  {
    title: 'Meet App',
    image: 'MeetApp_img1.jpg',
    description:
      'A serverless, progressive web application using React and test-driven development technique. Fetches events using Google Calendar API. Users can explore events by city and choose number of events to display.',
    technologies: ['React', 'Google Calendar API', 'AWS Lambda', 'Serverless'],
    liveLink: 'https://c1904h.github.io/meet/',
    githubLink: 'https://github.com/C1904H/meet'
  },
  {
    title: 'Chat App',
    image: 'chatApp_img.jpg',
    description:
      'A chat app for mobile devices using React Native, allowing users to share images, locations, and chat in real time.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Gifted Chat'],
    githubLink: 'https://github.com/C1904H/chat-app',
    demoVideo: 'files/chitChat.mp4'
  },
  {
    title: 'Recipe App',
    image: 'recipeApp.jpg',
    description:
      'A web app built with Django that allows users to view, search, edit, and add recipes. Features data analysis and visualization.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Railway'],
    liveLink: 'https://recipe-app-2-production.up.railway.app/',
    githubLink: 'https://github.com/C1904H/recipe-app-2'
  }
];

const Projects = () => (
  <div className="p-6 flex flex-col items-center">
    <h2 className="text-2xl font-bold">My Recent Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 column-gap mt-5 max-w-6xl justify-center items-center">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center"
        >
          <Card className="shadow-lg w-">
            <CardContent className="p-6">
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-md"
                />
              </a>
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3 mt-4 text-3xl">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <FaDesktop />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:underline"
                  >
                    <FaCode />
                  </a>
                )}
                {project.demoVideo && (
                  <a
                    href={project.demoVideo}
                    download
                    className="text-green-500 hover:underline"
                  >
                    <FaVideo />
                  </a>
                )}
                {project.caseStudy && (
                  <a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:underline"
                  >
                    <FaSearch />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="p-6 text-center">
    <h2 className="text-5xl font-bold">Let's Talk!</h2>
    <p className="text-gray-600 dark:text-gray-400 mt-2 text-2xl">
      Feel free to get in touch and talk code:
    </p>
    <div className="flex flex-col items-center mt-4 text-2xl space-y-4">
      <a
        href="mailto:corinnehaggerty2@gmail.com"
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500"
      >
        <FaEnvelope className="text-4xl" />
        {/* <span>corinnehaggerty2@gmail.com</span> */}
      </a>
      <h3 className="text-gray-600 dark:text-gray-400 mt-2">
        Connect with me:
      </h3>
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
          href="https://www.linkedin.com/in/corinne-haggerty-2b98706b"
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

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('about');

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen px-6 py-12 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      {/* Dark Mode Toggle Button */}
      <div className="flex justify-between items-center mb-6">
        <nav className="space-x-4">
          <Button onClick={() => setActivePage('home')}>Home</Button>
          <Button onClick={() => setActivePage('about')}>About</Button>
          <Button onClick={() => setActivePage('projects')}>Projects</Button>
          <Button onClick={() => setActivePage('contact')}>Contact</Button>
          <Button
            onClick={() => window.open('Corinne-Haggerty-Resume.pdf', '_blank')}
          >
            Resume
          </Button>
        </nav>
        <Button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </Button>
      </div>

      {/* Page Content */}
      {activePage === 'home' && <Home />}
      {activePage === 'about' && <About setActivePage={setActivePage} />}
      {activePage === 'projects' && <Projects />}
      {activePage === 'contact' && <Contact />}
    </div>
  );
}
