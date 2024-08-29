
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center text-4xl">
            S.R.B
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a className="hover:scale-150 transition-all" href="https://www.linkedin.com/in/sid-rico-bj%C3%B6rk/"><FaLinkedin/></a>
            <a className="hover:scale-150 transition-all" href="https://github.com/SuphaNinja"><FaGithub/></a>
        </div>
    </nav>
  )
}

export default NavBar