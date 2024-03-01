import { TypewriterEffect } from '../PageContent/Sections/Components/TypewritterEffect';

export default function NavbarContent() {

  const words = [
    {
      text: "OLIVIA",
    },
    
    {
      text:"NOLAN",
      className:"red"
    }

  ];
  const scrollToSection = (section:string) => {
    let scrollPoint;

    if (window.innerWidth <= 768) {
      // Mobile scroll points
      if (section === "home") {
        scrollPoint = 0;
      } else if (section === "work") {
        scrollPoint = 3800;
      } else {
        scrollPoint = 550;
      }
    } else {
      // Desktop scroll points
      if (section === "home") {
        scrollPoint = 0;
      } else if (section === "work") {
        scrollPoint = 2400;
      } else {
        scrollPoint = 630;
      }
    }

    window.scrollTo({ behavior: 'smooth', top: scrollPoint });
  };

  return (
    <div className="navbar-content">
      <div className="menu">
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('work')}>Let Work Together</button>
        <button onClick={() => scrollToSection('gallery')}>Gallery</button>
      </div>
   <TypewriterEffect words={words} className='website-title' cursorClassName='cursor' />
    </div>
  )
}
