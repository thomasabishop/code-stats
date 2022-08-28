import "./Header.styled.scss"
import logo from "../../img/comp-sci.svg"
import { IconContext } from "react-icons"
import { FaGithub } from "react-icons/fa"
export const Header: React.FC = () => {
  return (
    <div className="Header">
      <div className="logo-wrapper">
        <img src={logo} className="logo" alt="logo" />
        <div className="logotype">CodeStats</div>
      </div>
      <div className="controls-wrapper">
        <button>Refresh</button>
        <IconContext.Provider value={{ className: "github-icon" }}>
          <div>
            <FaGithub />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Header
