import { StyledHeader } from "./Header.styles"
import { Menu } from "layout";
import { Wrapper } from "utils";

const Header = () => (
    <StyledHeader>
        <Wrapper>
            <Menu />
        </Wrapper>
    </StyledHeader>
)

export { Header };