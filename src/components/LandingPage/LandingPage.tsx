import Container from "../Container/Container";
import * as Content from '../../content/Content';
import * as theme from '../../styles/theme'


const LandingPage = () => {
    const landingTitle = "Kritiketan Sharma";

    return (
        <Container title = {landingTitle}>

            <p className={theme.HeadingBold}>👋🏼 Hi, I&apos;m Kittu</p>
            <p className={theme.SubHeadingReg}> I like 
              <span className={theme.highlightGreen}> coding 👨🏻‍💻, writing 📝 </span>and <span className={theme.highlightGreen}>talking 🎙.</span> </p>
            <p>
              Sound interesting?
            </p>
            <p className={theme.highlightGreen}>
              ⬇️
            </p>

            <div>

            </div>

            
           
            
          

        </Container>
    )
}

export default LandingPage;