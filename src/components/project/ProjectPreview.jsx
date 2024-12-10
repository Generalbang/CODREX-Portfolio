import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function ProjectPreview() {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-start'>
        <div className='text-3xl text-gray-300 font-bold font-mono uppercase'>
          projects
        </div>
        <div className='flex mb-8 lg:w-4/5 align-center'>
          <div className='grid mx-auto px-8 sm:grid-cols-2 lg:grid-cols-3  gap-4'>
            <ProjectCard
              title={"FED Patient Board"}
              description={
                "This is a single page patient board application. This is an application built to ease doctors of stress of file loss. This keeps patients infomations and chart in one place for easy and fast access. <br /> The patients infomations are also stored on an API for easy communications"
              }
              stack={"react, css"}
              sourceLink={"https://github.com/Generalbang/FED-Patient-board"}
              liveLink={"https://patient-board.netlify.app/"}
            />
            <ProjectCard
              title={"Creed Studio"}
              description={
                "Creed Studio is a film academy that provides the following services to its customers: Photo Shoot, Video Shoot, Video Editing, Content Development, Equipment Rentals ,Studio Space Rentals, Film Production, Audio Production, Music Video Production, Live Streaming, Multimedia Academy, and so on"
              }
              stack={"html, css, javascript"}
              sourceLink={"https://github.com/Generalbang/test-flare"}
              liveLink={"https://generalbang.github.io/test-flare/"}
            />
            <ProjectCard
              title={"Dutiful"}
              description={
                "Dutiful is a business directory that also enhance your web profile. This platform make use of SEO technique to boost each listing's performance in thr SERPs,providing any business the chance to rank, regardless of how strong their current online presence is."
              }
              stack={"React, TailwindCSS"}
              sourceLink={"https://github.com/Generalbang/SWD"}
              liveLink={"https://swdtest.netlify.app/"}
            />
            {/* <ProjectCard
              title={""}
              description={""}
              stack={""}
              sourceLink={""}
              liveLink={""}
            />
            <ProjectCard
              title={""}
              description={""}
              stack={""}
              sourceLink={""}
              liveLink={""}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPreview;
