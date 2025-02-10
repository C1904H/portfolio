import { Card, CardContent } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { FaCode, FaVideo, FaDesktop, FaSearch } from 'react-icons/fa';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Recipe App',
    thumbnail: 'recipe-min.jpg',
    image: 'recipeApp.jpg',
    description:
      'A web app built using Python-based Django framework. The app allows users to login, view, search, edit, and add recipes. Features data analysis and visualization of recipes using a range of charts.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Railway', 'Cloudinary'],
    liveLink: 'https://recipe-app-2-production.up.railway.app/',
    githubLink: 'https://github.com/C1904H/recipe-app-2'
  },
  {
    title: 'myFlix React App',
    thumbnail: 'myFlix-min.jpg',
    image: 'myFlixClient_img.jpg',
    description:
      'A full-stack JavaScript development built using the MERN stack. The client-side for myFlix movie app used existing server-side code (REST API and database). Users can sign up / login in, browse movies (including description, image, genre and director), select favorite movies or search for a movie by title.  Users can navigate to their personal profile where they can update their information, view favorite movies or delete account.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveLink: 'https://myflix1000.netlify.app',
    githubLink: 'https://github.com/C1904H/myFlix-client',
    caseStudy: 'case-study/myflix'
  },
  {
    title: 'Chat App',
    thumbnail: 'chat-app-min.jpg',
    image: 'chatApp_img.jpg',
    description:
      'A chat app for mobile devices using React Native. The app provides users with a chat interface and options to take, upload and share images and location. Data can be stored online and offline.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Gifted Chat'],
    githubLink: 'https://github.com/C1904H/chat-app',
    demoVideo: 'chitChat.mp4'
  },
  {
    title: 'Meet App',
    thumbnail: 'meet-app-min.jpg',
    image: 'MeetApp_img1.jpg',
    description:
      'A serverless, progressive web application (PWA) build using React and test-driven development techniques. The application uses a Google Calendar API to fetch upcoming events and OAuth2 authentication flow. Users can explore events by city and choose the number of events to display on screen.',
    technologies: [
      'React',
      'Google Calendar API',
      'AWS Lambda',
      'Serverless',
      'Jest',
      'Puppeteer'
    ],
    liveLink: 'https://c1904h.github.io/meet/',
    githubLink: 'https://github.com/C1904H/meet'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 flex flex-col items-center bg-[#EAE3EA] dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
      <p className="text-xl leading-7 mt-3 mb-8">
        Explore some of my recent work...
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative"
            onClick={() => openModal(project)}
          >
            <Card className="shadow-lg w-full bg-card">
              <CardContent className="p-6">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-auto max-h-[340px] object-cover rounded-md"
                />
                <h3 className="text-[#B56357] text-3xl font-semibold mt-4 dark:text-gray-400">
                  {project.title}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      >
          <DialogContent className="w-full max-w-[90vw] sm:max-w-xs md:max-w-lg lg:max-w-2xl max-h-[80vh] overflow-y-auto p-4">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 flex justify-center">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="max-w-full h-auto max-h-96 rounded-md"
            />
          </div>
          <DialogDescription className="text-lg">
            {selectedProject?.description}
          </DialogDescription>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-3">
            {selectedProject?.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Links */}
          <div className="flex space-x-3 mt-4 text-3xl">
            {selectedProject?.liveLink && (
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline"
              >
                <FaDesktop />
              </a>
            )}
            {selectedProject?.githubLink && (
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline"
              >
                <FaCode />
              </a>
            )}
            {selectedProject?.demoVideo && (
              <a
                href={selectedProject.demoVideo}
                download
                className="text-indigo-500 hover:underline"
              >
                <FaVideo />
              </a>
            )}
            {selectedProject?.caseStudy && (
              <Link to={selectedProject.caseStudy} className="text-purple-500 hover:underline flex items-center">
    <FaSearch className="mr-2" />
    <span>Case Study</span>
  </Link>
            )}
          </div>
          <DialogFooter>
            <button
              onClick={closeModal}
              className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
        {' '}
        {/* Added margin top, small text, centered */}
        <p>
          Recipe App: Photo by{' '}
          <a
            href="https://www.pexels.com/photo/fresh-vegetables-and-fruits-on-the-table-8844888/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Yaroslav Shuraev
          </a>
        </p>
        <p>
          myFlix React App: Photo by{' '}
          <a
            href="https://www.pexels.com/photo/selective-focus-photography-of-popcorns-33129/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pixabay
          </a>
        </p>
        <p>
          Chat App: Photo by{' '}
          <a
            href="https://www.pexels.com/photo/hands-of-a-woman-with-red-nails-typing-on-a-smartphone-6963601/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            cottonbro studio
          </a>
        </p>
        <p>
          Meet App: Photo by{' '}
          <a
            href="https://www.pexels.com/photo/laughing-diverse-friends-with-smartphones-in-park-6146961/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Keira Burton
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
