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

const About = ({ setActivePage }) => (
  <div className="p-6 p-6 flex flex-col items-center text-center bg-[#EAE3EA] dark:bg-gray-900 ">
    <h2 className="text-4xl font-bold p-3">About Me</h2>
    <p className="text-2xl leading-7 mt-2 italic ">
      I thrive on solving complex problems and building web applications that
      drive meaningful change.
    </p>
    <p className="text-xl leading-7 mt-4">
      In 2025 I completed a Full-Stack Web Development Course with
      CareerFoundry. Before transitioning into web development, I spent several
      years as a clinical pharmacist specializing in cancer care. In that role,
      I honed my ability to manage intricate workflows, solve complex
      challenges, and ensure precision in high-stakes environments. These
      experiences taught me to approach every problem with a detail-oriented,
      analytical mindset — skills that I now apply to my work in tech. I’m
      passionate about how technology can improve healthcare and make a tangible
      difference in people’s lives. I’m eager to bring my unique blend of
      healthcare expertise and technical skills to teams that are building
      impactful web applications. I'm open to remote and hydrid roles.
    </p>
    <p className="text-xl leading-7 mt-4">
      I love travelling and experiencing new places, cultures, and cuisines.
      After my first cup of coffee, you'll find me ready to tackle whatever
      adventures the day has in store!
    </p>
    <p className="text-xl leading-7 mt-4">
      <button
        onClick={() => setActivePage('contact')}
        className="text-[#008080] font-bold hover:underline focus:outline-none"
      >
        &nbsp;Contact me
      </button>
      &nbsp;to connect.
    </p>
    <div className="my-8 border-t border-border"></div>
    <h2 className="text-3xl font-bold mt-6">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center">
      <div className="p-4 border rounded-lg bg-[#90b7b7]">
        <h3 className="text-xl font-bold">Languages</h3>
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
      <div className="p-4 border rounded-lg bg-[#90b7b7]">
        <h3 className="text-xl font-bold">Frontend Frameworks & Libraries</h3>
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
      <div className="p-4 border rounded-lg bg-[#90b7b7]">
        <h3 className="text-xl font-bold">Backend</h3>
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
      <div className="p-4 border rounded-lg bg-[#90b7b7]">
        <h3 className="text-xl font-bold">Databases</h3>
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
      <div className="p-4 border rounded-lg bg-[#90b7b7]">
        <h3 className="text-xl font-bold">Version Control</h3>
        <div className="grid grid-cols-3 gap-4 mt-2 text-3xl">
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
      <div className="p-4 border rounded-lg bg-[#90b7b7]">
        <h3 className="text-xl font-bold">Tools & Platforms</h3>
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
      <div className="p-4 border rounded-lg bg-[#90b7b7]">
        <h3 className="text-xl font-bold">Testing</h3>
        <div className="grid grid-cols-3 gap-4 mt-2 text-3xl">
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

export default About;