import Container from "../Container/Container";
import styles from '../../../styles/Home.module.css'
import Header from '../Header/Header'
import * as Content from '../../content/Content';


const LandingPage = () => {
    const landingTitle = "Kritiketan Sharma";

    return (
        <Container title = {landingTitle}>


          <main className={styles.main}>
            
            <Header/>
            
            <div className={styles.spacer}>
              <p>
              I enjoy doing a lot a things. After the past few years as a <code className={styles.code}>#software engineer</code>  i 
              feel a sense of empowerment when <code className={styles.code}>#expressing</code>  myself digitally. Being able to <code className={styles.code}>#code</code> and 
              generally be digitally literate has allowed me to better appreciate 
              the access to technology, around us. I use this piece of internet <code className={styles.code}>#real estate</code> to return the favor and put out quality projects, content, ideas and more.
               
              </p>

              <p>
                I get excited at the mention of a cool feature in a web app, the possibility of a podcast episode after an intense conversation, an 
                easy to follow blog about rather compilacted concepts and more. These are a topics I have been interested in recently.
              </p>
              
              
              <p>
              { Content.topicsOfInterest.map((topic)=> <a href="#"><code className={styles.code}> {topic} </code>&nbsp;&nbsp;&nbsp; </a>  ) }
              </p>
              
            </div>
            <div className={styles.grid}>
              

              
            </div>
          </main>

        </Container>
    )
}

export default LandingPage;