import Container from "../Container/Container";
import * as PagesMeta from '../../content/pagesMeta'
import * as theme from '../../styles/theme'
import Card from "../Card/Card";


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
            <span className={theme.grid}>
              { Object.keys(PagesMeta.pages).map((page:any)=>
                <Card heading={page} body="" url={page} key={page}/>
              ) }

            </span>
            
            
        </Container>
    )
}

export default LandingPage;