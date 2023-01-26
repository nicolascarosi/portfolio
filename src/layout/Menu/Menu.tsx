import { StyledMenu } from "./Menu.styles";
import { MenuItem } from "./MenuItem";
import { iconGithub, iconLinkedin } from "assets";

const Menu = () => (
    <StyledMenu>
        <ul>
            <MenuItem name="About me" route='#about-me'/>
            <MenuItem name="Projects" route='#projects'/>
            <MenuItem name="Contact" route='#contact'/>
        </ul>
        <div className="social-media">
            <a href="https://www.linkedin.com/in/nicolas-carosi/" target="_blank" rel="noreferrer" title="LinkedIn">
                <img src={iconLinkedin} alt="LinkedIn"/>
            </a>
            <a href="https://github.com/nicolascarosi" target="_blank" rel="noreferrer" title="GitHub" >
                <img src={iconGithub} alt="GitHub"/>
            </a>
        </div>
    </StyledMenu>
)

export { Menu };