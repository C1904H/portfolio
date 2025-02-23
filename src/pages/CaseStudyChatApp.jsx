// src/pages/CaseStudyChatApp.jsx
import React from 'react';

const CaseStudyChatApp = () => {
  return (
    <div className="container mt-4 p-6">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-4xl font-bold">Case Study: Chat App</h1>
      </div>

      <section className="content-with-image flex flex-col md:flex-row items-start mt-4 gap-8">
        <div className="text-section md:w-1/2">
          <h2 className="section-title text-3xl font-bold mt-3">Overview</h2>
          <br />
          <p className="text-xl leading-7">
            Chat App is a real-time native mobile application designed for both
            iOS and Android, enabling users to engage in instant messaging,
            share images, and exchange location data.
          </p>
          <br />
          <h2 className="section-title text-3xl font-bold mt-3">
            Purpose and Context
          </h2>
          <br />
          <p className="text-xl leading-7">
            Chat App was developed as a key project in my Full-Stack Web
            Development course with CareerFoundry, marking my initial foray into
            Native Mobile App Development using React Native. This framework's
            ability to create cross-platform applications from a single codebase
            significantly streamlines development, a crucial advantage in
            today's mobile-centric world. With the increasing dominance of
            mobile devices for everyday tasks and communication, the ability to
            develop and maintain compelling mobile applications is an
            indispensable skill for modern web developers.
          </p>
          <br />
          <h2 className="section-title text-3xl font-bold mt-3">Objective</h2>
          <br />
          <p className="text-xl leading-7">
            The primary objective was to build a fully functional chat
            application using React Native, incorporating image and location
            sharing features, while solidifying my understanding of mobile app
            development principles.
          </p>
        </div>
        <div className="image-section md:w-1/2 mt-3">
          <img
            src={`${import.meta.env.BASE_URL}chatApp_img.jpg`}
            alt="Movie Library View"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>
      <hr className="my-8" />

      <section>
          <h2 className="section-title text-3xl font-bold mt-3">
            Development Duration
          </h2>
          <ul className="text-xl leading-7 list-disc ml-6">
            <li> 14 Days.</li>
          </ul>
          <br />
          <h2 className="section-title text-3xl font-bold mt-3">Credits</h2>
          <p className="text-xl leading-7">
            I was the sole developer of this project, receiving guidance and
            feedback from my tutor and mentor.
          </p>
          <ul className="text-xl leading-7 list-disc ml-6 mt-3">
            <li>Tutor: Roibeard Mac Unfraigh</li>
            <li>Mentor: Emmanuel Nsambu</li>
          </ul>
          <br />
          <h2 className="section-title text-3xl font-bold mt-3">
            Methodologies & Technologies Used
          </h2>
          <ul className="text-xl leading-7 list-disc ml-6">
            <li>React Native</li>
            <li>Expo</li>
            <li>Gifted Chat</li>
            <li>Firestore</li>
            <li>Firebase</li>
            <li>React Navigation</li>
            <li>Android Studio</li>
          </ul>
        
      </section>
      <hr className="my-8" />

      <section className="mt-8">
        <h2 className="section-title text-3xl font-bold">Approach</h2>
        <section className="content-with-image flex flex-col md:flex-row items-start gap-8">
          <div className="image-section md:w-1/2">
            <img
              src={`${import.meta.env.BASE_URL}movieApi_img.png`}
              alt="Movie Library View"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="text-section md:w-1/2">
            <h3 className="section-title text-2xl font-semibold mt-3">
              Environment Setup
            </h3>
            <p className="text-xl leading-7 mt-3">
              The project began with setting up the React Native and Expo
              development environment. This involved configuring the necessary
              tools and dependencies, as well as creating the initial app layout
              and applying the required styling.
            </p>

            <h3 className="section-title text-2xl font-semibold mt-3">
              Chat UI and Functionality
            </h3>
            <p className="text-xl leading-7 mt-3">
              Next, I implemented the chat screen and core messaging features
              using the Gifted Chat library. This included integrating user
              input, message display, and the basic chat functionality.
            </p>

            <h3 className="section-title text-2xl font-semibold mt-3">
              Offline Data Storage
            </h3>
            <p className="text-xl leading-7 mt-3">
              To ensure offline accessibility, I implemented local storage using
              AsyncStorage. This allowed users to access previously loaded
              messages even without an internet connection.
            </p>

            <h3 className="section-title text-2xl font-semibold mt-3">
              Communication Features
            </h3>
            <p className="text-xl leading-7 mt-3">
              Finally, I integrated advanced communication features such as
              image selection from the user's photo library, camera integration
              for real-time photo sharing, and location sharing. I also
              addressed accessibility considerations to ensure the app was
              usable by a wider audience.
            </p>
          </div>
        </section>
      </section>
      <hr className="my-8" />

      <section>
        <h2 className="section-title text-3xl font-bold mt-3">
          What Went Well
        </h2>
        <p className="text-xl leading-7 mt-3">
          I was particularly impressed with the ease of integrating Firestore
          into the application. Setting up the database and implementing
          real-time data synchronization across devices was remarkably
          straightforward. Firestore's features, such as automatic scaling,
          robust mobile security, and cloud-based data storage, significantly
          accelerated development. The ability to quickly implement real-time
          updates and ensure data consistency across platforms was a major
          advantage, allowing me to focus more on the app's functionality and
          user experience.
        </p>
        <br />

        <h2 className="section-title text-3xl font-bold mt-3">Challenges</h2>
        <p className="text-xl leading-7 mt-3">
          During development, emulator connectivity issues arose while setting
          up Expo on Android Studio. I resolved these by researching online
          solutions and iteratively adjusting emulator settings until a stable
          configuration was found. This reinforced the importance of
          perseverance and effective troubleshooting.
        </p>
        <br />
        <h2 className="section-title text-3xl font-bold mt-3">
          Future Improvements
        </h2>
        <p className="text-xl leading-7 mt-3">
          To further enhance the app, I would explore the following:
        </p>
        <ul className="text-xl leading-7 list-disc ml-6 mt-3">
          <li>
            User profiles and avatars - Implementing user profiles with avatars
            would personalize the chat experience and improve user engagement.
          </li>
          <li>
            Group chat functionality - Adding group chat capabilities would
            allow users to communicate with multiple people simultaneously,
            expanding the app's utility.
          </li>
          <li>
            Audio and video sharing - Integrating audio and video file sharing
            would enrich the communication experience and cater to diverse user
            needs.
          </li>
        </ul>
        <br />
        <h2 className="section-title text-3xl font-bold mt-3">Conclusion</h2>
        <p className="text-xl leading-7 mt-3">
          Building the Chat App with React Native was a rewarding and insightful
          experience. I thoroughly enjoyed the challenge of learning a new
          framework and seeing the app come to life. This project significantly
          deepened my understanding of mobile app development and reinforced the
          critical importance of user experience in app design. I am eager to
          continue exploring mobile development and applying these skills to
          future projects.
        </p>
      </section>
    </div>
  );
};

export default CaseStudyChatApp;
