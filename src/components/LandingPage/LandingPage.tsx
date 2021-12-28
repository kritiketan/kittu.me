import Container from "../Container/Container";
import Header from '../Header/Header'
import * as Content from '../../content/Content';


const LandingPage = () => {
    const landingTitle = "Kritiketan Sharma";

    return (
        <Container title = {landingTitle}>

            <Header/>

            <h2>
            👋🏼 Hi there
            </h2>
            <p>
              Welcome to the{' '}
              <code>kittu-verse</code>
            </p>
            
            <section>            
              { Content.landingPage.body.map((item)=><p key={item}>{item}</p>) }
              <p>
                { Content.topicsOfInterest.map((topic)=> <a href="#" key={topic}><code> {topic} </code>&nbsp;&nbsp;&nbsp; </a>  ) }
              </p>
              </section>
            
          

        </Container>
    )
}

export default LandingPage;