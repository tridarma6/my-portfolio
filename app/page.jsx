import LeftSide from "./components/leftside";
import Skill from "./components/skill";
import Main from "./components/main";
import Project from "./components/project";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <LeftSide/>
      <div className="px-36">
        <Main/>
        <Skill/>
        <Project/>
        <AboutMe/>
        <Contact/>
      </div>
    </>
  );
}
