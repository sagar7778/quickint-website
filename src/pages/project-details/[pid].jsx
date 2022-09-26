import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import ProjectDetailsHeader from "../../components/Project-details-header";
import ProjectDetailsIntroduction from "../../components/Project-details-introduction";
import ProjectDetailsImages from "../../components/Project-details-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsVideo from "../../components/Project-details-video";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Small-footer";
import { useRouter } from "next/router";
import projectsData from "./projectsData";

const ProjectDetailsDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const router = useRouter();
  const { pid } = router.query;

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  console.log(pid, pid);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectDetailsHeader title={projectsData[pid]?.title} />
      <ProjectDetailsIntroduction />
      <ProjectDetailsImages />
      <ProjectDetailsDescription
        description={projectsData[pid]?.description}
      />
      <ProjectDetailsVideo
        videoBackground="/img/portfolio/project1/bg.jpg"
        videoType="vimeo"
        videoId={127203262}
      />
      <NextProject
        projectImage="/img/portfolio/project2/bg.jpg"
        projectTitle="Inspiring new space."
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
