// import "./styles/Work.css";
// import WorkImage from "./WorkImage";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// const Work = () => {
//   useGSAP(() => {
//     let translateX: number = 0;
//     function setTranslateX() {
//       const box = document.getElementsByClassName("work-box");
//       const rectLeft = document
//         .querySelector(".work-container")!
//         .getBoundingClientRect().left;
//       const rect = box[0].getBoundingClientRect();
//       const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
//       let padding: number =
//         parseInt(window.getComputedStyle(box[0]).padding) / 2;
//       translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
//     }

//     setTranslateX();

//     let timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".work-section",
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//         pin: true,
//         pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
//         id: "work",
//       },
//     });

//     timeline.to(".work-flex", {
//       x: -translateX,
//       duration: 40,
//       delay: 0.2,
//     });
//   }, []);
//   return (
//     <div className="work-section" id="work">
//       <div className="work-container section-container">
//         <h2>
//           My <span>Work</span>
//         </h2>
//         <div className="work-flex">
//           {[...Array(6)].map((_value, index) => (
//             <div className="work-box" key={index}>
//               <div className="work-info">
//                 <div className="work-title">
//                   <h3>0{index + 1}</h3>

//                   <div>
//                     <h4>GIG-CRED </h4>
//                     {/* <p>Category</p> */}
//                   </div>
//                 </div>
//                 <h4>Tools and features</h4>
//                 <p>Javascript, TypeScript, MERN , AI-ML , Rest APIs . </p>
//               </div>
//               <WorkImage image="/images/placeholder.webp" alt="" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

 
 /*import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "GIG-CRED",
    tools: "Javascript, TypeScript, MERN , AI-ML , Rest APIs",
    image: "/images/placeholder.webp",
    github: " https://github.com/yashi2606/Fintech",
  },
  {
    title: "BLOCK- EDU",
    tools: "MERN , Tailwind CSS , Gaia Agent , Vercel ",
    image: "/images/project2.webp",
    github: "https://github.com/Roshians/Blockeu",
  },
  {
    title: "PORTFOLIO",
    tools: "React, Framer Motion, Tailwind, GSAP",
    image: "/images/project3.webp",
    github: "https://github.com/Swatii-21/PORTFOLIO/blob/main/eslint.config.js "
  },
  {
    title: "JEEV-SAKHT",
    tools: "HTML , CSS , JS , REACT ",
    image : "/images/project4.webp" ,
    github: "https://github.com/Swatii-21/BLOOD"
  },
   
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
*/

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "GIG-CRED",
    tools: "Javascript, TypeScript, MERN , AI-ML , Rest APIs",
    image: "/images/placeholder.webp",
    github: "https://github.com/yashi2606/Fintech",
    live: "https://gigcred.vercel.app",
  },
  {
    title: "BLOCK- EDU",
    tools: "MERN , Tailwind CSS , Gaia Agent , Vercel ",
    image: "/images/project2.webp",
    github: "https://github.com/Roshians/Blockeu",
    live: "https://blockedu.vercel.app",
  },
  {
    title: "PORTFOLIO",
    tools: "React, Framer Motion, Tailwind, GSAP",
    image: "/images/project3.webp",
    github: "https://github.com/Swatii-21/PORTFOLIO",
    live: "https://swatiportfolio.vercel.app",
  },
  {
    title: "JEEV-SAKHT",
    tools: "HTML , CSS , JS , REACT ",
    image: "/images/project4.webp",
    github: "https://github.com/Swatii-21/BLOOD",
    live: "https://jeevsakht.vercel.app",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              {/* Clickable image link */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="work-image-link"
              >
                <WorkImage image={project.image} alt={project.title} />
              </a>

              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    {/* Clickable title link */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4>{project.title}</h4>
                    </a>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>

                {/* GitHub link */}
                <div className="github-link">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
