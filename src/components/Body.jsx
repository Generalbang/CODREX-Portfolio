import React from "react";
import { Link } from "react-router-dom";
import ProjectPreview from "./project/ProjectPreview";
import MyTechStack from "./MyTechStack";

function Body() {
  return (
    <>
      <div className="h-4/5 flex align-center justify-center">
        <div className="mx-auto text-center px-4 flex align-center justify-center flex-col">
          <div className="text-3xl font-bold uppercase font-sans ">
            Hey, I'm <br className="md:hidden" /> Ojo Dare Johnson
          </div>
          <div className="text-md md:text-xl px-4 my-8">
            A Front-End Website and <br className="md:hidden" />
            Web Application Developer. <br />I create pixel perfect, interactive
            and responsive website and web Application frontend. <br />
            Highly motivated and detail-oriented Front-End Web Developer with
            experience in HTML, CSS, Tailwind, JavaScript, and React. <br />
            Proficient in problem-solving and collaboration, with a strong
            passion for software development, cryptocurrency, and web3
            technologies.
          </div>

          {/* my tech stack */}
          <MyTechStack />
          {/* project preview section */}
          <ProjectPreview />
          <Link to="mailto:js.dev.ojodare@gmail.com">
            <div className="bg-blue-400 text-2xl mb-16 md:mb-8 text-blue-100 py-4 w-2/3 mx-auto rounded border-solid border-2 border-white-400 hover:bg-blue-600 hover:text-white-300 hover:text-bold">
              Collaborate
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Body;
