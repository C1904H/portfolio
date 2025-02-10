// src/pages/CaseStudyMyFlix.jsx
import React from 'react';

const CaseStudyMyFlix = () => {
  return (
    <div className="container mt-4 p-6"> 
      <div className="flex flex-col items-center text-center mb-8" >
        <h1 className="text-4xl font-bold">Case Study: myFlix App</h1> 
      </div>

      <section className="content-with-image flex flex-col md:flex-row items-start mt-4 gap-8"> 
        <div className="text-section md:w-1/2"> 
          <h2 className="section-title text-3xl font-bold mt-3">Overview</h2> 
          <p className="text-xl leading-7"> 
            myFlix is a full-stack movie database application built using React,
            designed to allow users to explore a library of films. Users can
            create an account, log in, and access information about different
            movies, directors, and genres. They can also navigate to their
            personal profile page, where they can save their favorite movies and
            manage their account settings.
          </p>
          <h2 className="section-title text-3xl font-bold mt-3">Purpose and Context</h2>
          <p className="text-xl leading-7">
            I developed the myFlix app as part of my full-stack web development
            course with CareerFoundry. This project served as a capstone
            achievement, demonstrating my ability to build and integrate both
            the frontend and backend of a web application using the MERN
            (MongoDB, Express, React, Node.js) stack.
          </p>
          <h2 className="section-title text-3xl font-bold mt-3">Objective</h2>
          <p className="text-xl leading-7">
            The primary objective of this project was to build a fully
            functional client-side application that seamlessly interacts with an
            existing server-side code (REST API and database). I aimed to create
            a responsive and user-friendly interface that aligns with modern web
            development standards and efficiently utilises server-side
            capabilities.
          </p>
        </div>
        <div className="image-section md:w-1/2 mt-3"> 
          <img
            src="myFlixClient_img.jpg"
            alt="Movie Library View"
            className="w-full h-auto rounded-lg shadow-md" 
          />
        </div>
      </section>
      <hr className="my-8" /> 

      <section className="content-with-image flex flex-col md:flex-row">
      <div className="text-section md:w-1/2">
        <h2 className="section-title text-3xl font-bold">User Needs</h2>
        <p className="text-xl leading-7">
          Many movie enthusiasts struggle to find a simple, personalized way to
          explore and manage their favorite films. Existing platforms can be
          overly complex, lack customization, or make it difficult to access
          relevant movie details. The myFlix app solves this by offering an
          intuitive movie database where users can browse films, save favorites,
          and easily access key information. The goal is to create a seamless
          and engaging experience that enhances movie discovery.
        </p>
     
          <h2 className="section-title text-3xl font-bold mt-3">Duration</h2>
          <ul className="text-xl leading-7 list-disc ml-6"> 
            <li>Backend development: 28 days.</li>
            <li>Frontend development: 35 days.</li>
            <li>Total duration: 63 days.</li>
          </ul>
          <h2 className="section-title text-3xl font-bold mt-3">Credits</h2>
          <p className="text-xl leading-7">
            I was the sole developer of this project, receiving guidance and
            feedback from my tutor and mentor.
          </p>
          <ul className="text-xl leading-7 list-disc ml-6 mt-3">
            <li>Tutor: Roibeard Mac Unfraigh</li>
            <li>Mentor: Emmanuel Nsambu</li>
          </ul>
          <h2 className="section-title text-3xl font-bold mt-3">Methodologies & Technologies Used</h2>
          <ul className="text-xl leading-7 list-disc ml-6"> 
            <li>Backend: Node.js, Express.js, MondoDB, Mongoose</li>
            <li>Frontend: React, React Bootstrap, Redux</li>
            <li>Testing and Deployment: Postman, Heroku, Netlify, Parcel</li>
          </ul>
        </div>
        <div className="image-section md:w-1/2 ml-4">
          <img
            src="codeExample.png"
            alt="Backend API Example"
            className="w-auto h-auto max-h-[600px] rounded-lg shadow-md"
          />
        </div>
      </section>
      <hr className="my-8" />  

      <section className="mt-8">
      <h2 className="section-title text-3xl font-bold">Backend Development</h2>
      <section className="content-with-image flex flex-col md:flex-row items-start gap-8">
        <div className="image-section md:w-1/2">
          <img
            src="movieApi_img.png"
            alt="Movie Library View"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div className="text-section md:w-1/2">
          <h3 className="section-title text-2xl font-semibold mt-3">The Database</h3>
          <p className="text-xl leading-7 mt-3">
            The first stage of the project was developing the movie database and
            REST API using Node.js, Express, and Mongoose. I implemented CRUD
            (Create, Read, Update, Delete) operations to manage and retrieve
            data from the non-relational MongoDB database, ensuring efficient
            interaction with the frontend.
          </p>

          <h3 className="section-title text-2xl font-semibold mt-3">Key Features and Decisions:</h3>
          <ul className="text-xl leading-7 list-disc ml-6 mt-3">
            <li>
              Security: To safeguard user data, I implemented JWT-based
              authentication, password hashing, and CORS policies.
            </li>
            <li>
              Data Validation: I incorporated validation mechanisms for user
              registration and updates,
            </li>
            <li>
              Deployment: Once the backend was completed, I deployed the API to
              Heroku and stored the database in MongoDB Atlas for cloud
              accessibility.
            </li>
            <li>
              Testing: I rigorously tested all API endpoints using Postman
              before and after deployment to ensure seamless data flow.
            </li>
          </ul>
        </div>
      </section>
      <hr className="my-8"/>

      <section className="mt-8">
        <h2 className="section-title text-3xl font-bold">Frontend Development</h2>
        <p className="text-xl leading-7 mt-3">
          Once the API was successfully deployed, I developed the frontend using
          React, integrating the REST API to allow users to interact with the
          database.
        </p>
        <h3 className="section-title text-2xl font-semibold mt-3">Key UI Features:</h3>
        <ul className="text-xl leading-7 list-disc ml-6 mt-3">
          <li>
            Authentication Views: Users can register, log in, and manage their
            accounts.
          </li>
          <li>
            Movie Library: The main view displays all movies, with the ability
            to click for more details.
          </li>
          <li>
            Movie Details View: Provides detailed information on a selected
            movie, including genre and director.
          </li>
          <li>
            User Profile View: Users can view and update their personal details,
            manage favorite movies, or delete their accounts.
          </li>
          <li>
            Navigation: A responsive navbar allows easy movement between views
            and includes a movie search bar.
          </li>
        </ul>
        <h3 className="section-title text-2xl font-semibold mt-3">State Management & Styling:</h3>
        <ul className="text-xl leading-7 list-disc ml-6 mt-3">
          <li>
            State-Based Routing: I used React Router to navigate between views.
          </li>
          <li>
            State Management: Implemented useEffect and useState hooks to manage
            state effectively.
          </li>
          <li>
            Build Tool: I used Parcel to optimise and bundle the frontend code.
          </li>
          <li>
            UI/UX Enhancements: Leveraging Bootstrap helped improve
            responsiveness and styling.
          </li>
          <li>Deployment: The frontend was deployed and hosted on Netlify.</li>
        </ul>

        <div className="image-section flex justify-center items-center mt-3">
          <img
            src="profileView.png"
            alt="Profile View"
            className="max-w-s md:max-w-xl lg:max-w-3xl w-full rounded-lg shadow-md"
          />
        </div>
      </section>
      <hr className="my-8"/>

      <section>
        <h2 className="section-title text-3xl font-bold mt-3">What Went Well</h2>
        <p className="text-xl leading-7 mt-3">
          I thoroughly enjoyed developing the myFlix app, particularly the
          experience of integrating both frontend and backend components into a
          fully functional application. Seeing the API and frontend interact
          seamlessly was especially rewarding, reinforcing my understanding of
          full-stack development principles.
        </p>
      </section>
      <section>
        <h2 className="section-title text-3xl font-bold mt-3">Challenges</h2>
        <p className="text-xl leading- mt-37">
          One of the biggest challenges I faced was implementing the "favorite
          movies" feature on the user profile page. Initially, I struggled with
          ensuring that the selected favorite movies were accurately reflected
          in the database. After extensive debugging, I realized that the issue
          stemmed from how the API handled updates to user data. This experience
          underscored the importance of thoroughly testing and validating
          backend logic before moving to frontend integration. Taking extra time
          to refine backend functionality can prevent significant roadblocks
          later in development.
        </p>
      </section>

      <section>
        <h2 className="section-title text-3xl font-bold mt-3">Future Improvements</h2>
        <p className="text-xl leading-7 mt-3">
          The myFlix app has great potential for scalability. Some enhancements
          I would like to implement include:
        </p>
        <ul className="text-xl leading-7 list-disc ml-6 mt-3">
          <li>
            Expand the database to include actor details and director bios
          </li>
          <li>
            Enhance the search functionality to allow filtering by genre or
            actor
          </li>
          <li>
            Add a "Similar Movies" feature to suggest related files to users
          </li>
          <li>Implementing a user rating and watchlist feature</li>
          <li>Refining the UI/UX for a more polished look and feel</li>
        </ul>
        <p className="text-xl leading-7">
          Each of these improvements would significantly enhance the app's
          functionality and overall user experience.
        </p>
        </section>
    </section>

      <section>
        <h2 className="section-title text-3xl font-bold mt-3">Conclusion</h2> 
        <p className="text-xl leading-7 mt-3"> 
          Developing the myFlix app was a highly educational and rewarding
          experience. It allowed me to deepen my understanding of full-stack
          development, API integration, and state management while reinforcing
          the importance of thorough debugging and testing. I look forward to
          refining and expanding the project in the future, incorporating new
          features that further enhance user experience and scalability.
        </p>
      </section>
    </div>
  );
};

export default CaseStudyMyFlix;