import { Link } from "../Link";
import Typewriter from 'typewriter-effect'
export default function NavbarContent() {
  return (
    <div className="navbar-content">
      <div className="menu">
        <button>Home</button>
        <button>Let Work Together</button>
        <button>Gallery</button>
       
      </div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('<h1>OLIVIA NOLAN</h1>')
           
            
            .start();
        }}
        options={{
          cursorClassName: "cursor",
          wrapperClassName:"title-wrapper"
        }}
      />

    </div>
  )
}
