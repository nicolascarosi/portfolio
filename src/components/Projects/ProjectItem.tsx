import { IProjectItem } from './Projects.interface'
import { StyledProjectItem } from './Projects.styles'

const ProjectItem = ({title, image, bgColor, bgImage, route}: IProjectItem) => {

  return (
    <StyledProjectItem href={route} target="_blank" rel="nofollow" bgColor={bgColor} bgImage={bgImage}>
      <div className="project-photo">
        <img src={image} alt={title} />
      </div>
    </StyledProjectItem>
  )
}

export { ProjectItem }
