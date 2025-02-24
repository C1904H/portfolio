// src/pages/CaseStudyRecipeApp.jsx
import React from 'react';

const CaseStudyRecipeApp = () => {
  return (
    <div className="container mt-4 p-6">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-5xl font-bold">Case Study: Recipe App</h1>
      </div>

      <section className="content-with-image flex flex-col md:flex-row items-center mt-4 gap-8">
        <div className="text-section md:w-1/2">
          <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
            Overview
          </h2>
          <br />
          <p className="text-xl leading-7">
            Recipe App is a full-stack web application built using the
            Python-based Django framework. It empowers users to create, browse,
            search and manage recipes. The application includes robust user
            authentication, allowing users to login, add, edit and view recipes.
            Additionally it features a dynamic data analytics dashboard with
            interactive visualisations, providing insights into recipe trends and
            patterns.
          </p>
          <br />
          <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
            Purpose and Context
          </h2>
          <br />
          <p className="text-xl leading-7">
            This project was undertaken as part of my Full-Stack Web Development
            course with CareerFoundry, focusing on building a dynamic web application using the
            Django framework. Building upon the command-line recipe app
            developed earlier in the course, this project aimed to leverage
            Django's modularity and developer-friendly features to create a
            robust web application. With the increasing demand for interactive
            and data-driven web applications, mastering Django is crucial for
            modern web developers. This project provided hands-on experience in
            developing a full-stack application with user authentication,
            database integration (PostgreSQL), and data visualisation, mirroring
            real-world development scenarios.
          </p>
          <br />
          <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
            Objective
          </h2>
          <br />
          <p className="text-xl leading-7">
            The primary objective of this project was to develop a fully
            functional, multi-user recipe web application using the Django
            framework. This involved implementing user authentication, enabling
            recipe creation, editing, and search, and integrating data analytics
            and visualisation features to provide users with valuable insights
            into recipe trends.
          </p>
        </div>
        <div className="image-section md:w-1/2 mt-3">
          <img
            src={`${import.meta.env.BASE_URL}recipeAppLogin.png`}
            alt="Chat App Image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>
      <hr className="my-8" />

      <section className="content-with-image flex flex-col md:flex-row items-center mt-4 gap-8">
      <div className="text-section md:w-1/2">
        <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
          Development Duration
        </h2>
        <ul className="text-xl leading-7 list-disc ml-6">
          <li> 29 Days.</li>
        </ul>
        <br />
        <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
          Credits
        </h2>
        <p className="text-xl leading-7">
          I was the sole developer of this project, receiving guidance and
          feedback from my mentor.
        </p>
        <ul className="text-xl leading-7 list-disc ml-6 mt-3">
          <li>Mentor: Eyong Kevin Enowanyo</li>
        </ul>
        <br />
        <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
          Methodologies & Technologies Used
        </h2>
        <ul className="text-xl leading-7 list-disc ml-6">
          <li>Python</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>Cloudinary</li>
          <li>Railway</li>
        </ul>
        </div>
        <div className="image-section md:w-1/2 ml-4">
          <img
            src={`${import.meta.env.BASE_URL}recipeAppRecipes.png`}
            alt="Backend API Example"
            className="w-auto h-auto max-h-[600px] rounded-lg shadow-md"
          />
        </div>
      </section>
      <hr className="my-8" />

      <section className="mt-8">
        <h2 className="section-title text-3xl text-center font-bold text-teal-800">
          Approach
        </h2>
        <br />
        <section className="content-with-image flex flex-col md:flex-row items-center gap-8">
          <div className="image-section md:w-1/2">
            <img
              src={`${import.meta.env.BASE_URL}recipeAppAnalytics.png`}
              alt="Code snippet of Chat App"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="text-section md:w-1/2">
            <h3 className="section-title text-2xl font-semibold mt-3 text-teal-800">
              Environment Setup
            </h3>
            <p className="text-xl leading-7 mt-3">
              Setting up the development environment, installing Django, and
              creating the project and apps.
            </p>

            <h3 className="section-title text-2xl font-semibold mt-3 text-teal-800">
              Database Modeling
            </h3>
            <p className="text-xl leading-7 mt-3">
              Defining Django models and creating database tables, including
              setting up a SQLite3 database.
            </p>

            <h3 className="section-title text-2xl font-semibold mt-3 text-teal-800">
              Views and Templates
            </h3>
            <p className="text-xl leading-7 mt-3">
              Developing Django views and templates to render web pages and
              display recipe information.
            </p>

            <h3 className="section-title text-2xl font-semibold mt-3 text-teal-800">
              User Authentication
            </h3>
            <p className="text-xl leading-7 mt-3">
              Implementing user authentication, login, and logout features.
            </p>

            <h3 className="section-title text-2xl font-semibold mt-3 text-teal-800">
              Data Analysis and Visualisation
            </h3>
            <p className="text-xl leading-7 mt-3">
              Integrating search functionality and creating a data analytics
              dashboard with interactive charts.
            </p>

            <h3 className="section-title text-2xl font-semibold mt-3 text-teal-800">
              Deployment
            </h3>
            <p className="text-xl leading-7 mt-3">
              Preparing the application for deployment, packaging it, and
              deploying it to Railway. Database updated to PostgreSQL. Images uploaded to Cloudinary for storage and retrieval.
            </p>
          </div>
        </section>
      </section>
      <hr className="my-8" />

      <section>
        <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
          What Went Well
        </h2>
        <p className="text-xl leading-7 mt-3">
          I found Python an intuitive language for development. The integration of
          Django's built-in features, such as the admin panel and user
          authentication, significantly streamlined development. The ease of
          setting up database models and performing ORM queries was also a major
          advantage. Furthermore, the successful implementation of data
          visualisation using Matplotlib provided valuable insights into recipe
          trends.
        </p>
        <br />

        <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
          Challenges
        </h2>
        <p className="text-xl leading-7 mt-3">
          During the deployment phase, I encountered an unexpected challenge
          with Heroku's compatibility due to the Python version initially
          recommended. After thorough research and consultation with my mentor,
          I made the strategic decision to deploy the application on Railway,
          which offered better support for the project's requirements. This
          experience highlighted the importance of adaptability and the ability
          to find alternative solutions when faced with technical constraints.
          Subsequently, I updated the project to a more recent Python version,
          successfully deploying it and ensuring long-term compatibility.
        </p>
        <br />
        <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
          Future Improvements
        </h2>
        <p className="text-xl leading-7 mt-3">
          To further enhance the Recipe App, I would explore the following:
        </p>
        <ul className="text-xl leading-7 list-disc ml-6 mt-3">
        <li>
            New User Registration - Develop a user registration system to allow new users to create accounts and access personalised features.
          </li>
          <li>
            Advanced Search Filters - Implement more advanced search filters
            based on dietary restrictions, cuisine types, or cooking times to improve user experience.
          </li>
          <li>
            User Ratings - Integrate user ratings to enhance user engagement.
          </li>
          <li>
            Improve Data Visualisation - Add more interactive and
            customisable data visualisations, such as a 'most visited recipes' chart, to provide deeper insights.
          </li>
        </ul>
        <br />
        <h2 className="section-title text-3xl font-bold mt-3 text-teal-800">
          Conclusion
        </h2>
        <p className="text-xl leading-7 mt-3">
          Developing the Recipe App with Django was a rewarding experience,
          showcasing my ability to adapt to technical challenges, particularly
          during the deployment phase. This project allowed me to deepen my
          understanding of full-stack web development and gain hands-on
          experience in building a dynamic, data-driven application. The
          successful implementation of user authentication, database
          integration, and data visualisation demonstrates my ability to create
          robust and user-friendly web applications. I'm looking forward to
          further enhancing my knowledge and skills in Python and building more
          sophisticated web applications in the future.
        </p>
      </section>
    </div>
  );
};

export default CaseStudyRecipeApp;
