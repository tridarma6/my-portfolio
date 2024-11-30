import LeftSide from "./components/leftside";
import Skill from "./components/skill";
import Main from "./components/main";
import Project from "./components/project";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="pt-2">
      <LeftSide/>
      <div className="pr-[30px] sm:px-36">
        <Main/>
        <Skill/>
        <Project/>
        <AboutMe/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}
