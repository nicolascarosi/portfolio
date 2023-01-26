import { IMenuItem } from "./Menu.interface";
import { StyledMenuItem } from "./Menu.styles";

const MenuItem = ({name, route}: IMenuItem) => (
    <StyledMenuItem>
        <a href={route}>{name}</a>
    </StyledMenuItem>
)

export { MenuItem };