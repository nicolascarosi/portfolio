import { Header } from "layout";
import { Home } from "pages";
import { useEffect } from "react";
import GlobalStyles from "theme/GlobalStyles";

const initAnimations = () => {
  const inViewport = (entries: any) => {
      entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("is-inViewport");
          }
      });
  };
    
  const Obs = new IntersectionObserver(inViewport);
    
  // Attach observer to every [data-animation] element:
  const ELs_inViewport = document.querySelectorAll('[data-animation]');
  ELs_inViewport.forEach(EL => {
      Obs.observe(EL);
  });
}

const App = () => {

  useEffect(() => {
    initAnimations();
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
    </>
  )
};

export default App;
