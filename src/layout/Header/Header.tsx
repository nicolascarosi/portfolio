import { StyledHeader } from "./Header.styles"
import { Menu } from "layout";
import { Wrapper } from "utils";

const Header = () => (
    <StyledHeader data-animation="fade-in">
        <Wrapper>
            <Menu />
        </Wrapper>
    </StyledHeader>
)

export { Header };