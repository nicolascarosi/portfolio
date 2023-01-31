import { profile } from 'assets'
import { Wrapper } from 'utils'
import { StyledHero, StyledHeroContainer } from './Hero.styles'

const Hero = () => (
  <StyledHero id="about-me">
    <Wrapper>
      <StyledHeroContainer className="square-before" data-animation="fade-in-left">
        <div className="info">
          <h1>Front End development using modern technologies and simple design.</h1>
          <p>I'm Nicolas and I'm currently working as a front end engineer at Sofredigital. I hold a degree in Technical Programing and I've been working on important projects as you can find below in my portfolio.</p>
        </div>
      </StyledHeroContainer>
      <div className="image" data-animation="fade-in-right">
        <img src={profile} alt="Nicolas Carosi" />
      </div>
    </Wrapper>
  </StyledHero>
)

export { Hero }
