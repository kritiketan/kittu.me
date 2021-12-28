import { useRouter } from "next/router"
import Container from "../Container/Container"
import styles from '../../../styles/Home.module.css'
import {style} from 'typestyle';

const HeaderSection = style({
    display:'flex',
    marginTop: '2rem',
    lineHeight: '2.5',
    width:'100%',
})

const HeaderSectionLeft25 = style({
    display:'flex',
    alignItems:'left',
    width:'25%'
})



const gutter=style({
    width:'10%'
})

const HeaderSectionRight75 = style({
    display:'block',
    textAlign: 'left',
    width:'65%',
})


const Subpage = () => {
    const path = useRouter().pathname;
    
    return (
        <Container title = {path.toUpperCase()}>

            <div className={HeaderSection}>
                
                <div className={HeaderSectionLeft25}>
                    <img className={styles.randonCodeBlock} src="/whataboutprcover-with-people.png" width="250px" height="250px" alt="" />
                </div>
                <div id="gutter" className={gutter}>

                </div>
                
                <div className={HeaderSectionRight75}>
                <h2 className={styles.title}>What about PR</h2> 
                <p className={styles.description}>
                A podcast capturing the story and spirit of early-stage migrants across the world.
                </p>
                </div>
            </div>



            <section className={styles.horizontalSeperator}>
                Motivation
                <p>
                 Although migration is not a new concept, rather one that predates modern civilization and humans, there have been a few notable events in the past which can be noted as waves of migration (think waves of coffee or revolutions).
                </p>
                <p>
                No specific time periods have been nailed down for the said waves, part of the reason for which could be events like the industrial revolution, the gold rush, wars, and the Y2K bug overshadowing it. The past few years could be noted as an urban wave of migration, especially when considering Asia. Our intent is to capture the emotion, drive, intent, and motivation of this wave. Specifically, focus on early-stage migrants, their journeys as they are happening and being noticed. Magnifying their early achievements, big or small, relationships in the connected world and plans for the future.
                </p>

            </section>

            

        </Container>
    )

}

export default Subpage