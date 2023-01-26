import { Wrapper } from 'utils'
import { StyledProjects, StyledProjectsContainer } from './Projects.styles'
import { TitleAndParagraph } from 'components/TitleAndParagraph'
import { ProjectItem } from './ProjectItem'
import { logoGazoo, logoRimas, logoHumanBanking, logoCreatribe, logoDirecTV, logoToyota, logoYPF, bgCreatribe, logoVeritran, logoMacCenter } from 'assets'

const items = [
  {
    title: "YPF",
    image: logoYPF,
    bgColor: '#3865B8',
    route: 'https://www.ypf.com/Paginas/home.aspx'
  },
  {
    title: "Toyota Chile",
    image: logoToyota,
    bgColor: '#FFF',
    route: 'https://toyota.cl/'
  },
  {
    title: "Rimas Music",
    image: logoRimas,
    bgColor: '#000',
    route: 'https://wagtail.rimasmusic.com/es/'
  },
  {
    title: "Toyota Gazoo",
    image: logoGazoo,
    bgColor: '#FFF',
    route: 'https://toyota.cl/gazoo-racing/'
  },
  {
    title: "DirecTV",
    image: logoDirecTV,
    bgColor: '#0d263d',
    route: 'https://www.directv.com.ar/'
  },
  {
    title: "Supervielle",
    image: logoHumanBanking,
    bgColor: '#FFF',
    route: 'https://www.supervielle.com.ar/personas'
  },
  {
    title: "Creatribe",
    image: logoCreatribe,
    bgImage: bgCreatribe,
    route: 'https://www.creatribe.com.ar/'
  },
  {
    title: "Mac Center",
    image: logoMacCenter,
    bgColor: '#FFF',
    route: 'https://mac-center.com/'
  },
  {
    title: "Veritran",
    image: logoVeritran,
    bgColor: '#00087f',
    route: 'https://www.veritran.com/'
  },
]

const Projects = () => (
  <StyledProjects id="projects">
    <TitleAndParagraph title='My experience' square/>
    <Wrapper>
      <StyledProjectsContainer>
        {items.map((item, i) => (
          <ProjectItem key={`project-${i}`} {...item} />
        ))}
      </StyledProjectsContainer>
    </Wrapper>
  </StyledProjects>
)

export { Projects }
