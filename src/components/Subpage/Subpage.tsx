import { useRouter } from "next/router";
import {style} from 'typestyle';
import Container from "../Container/Container";
import * as theme from "../../styles/theme";
import * as PagesMeta from '../../content/pagesMeta'
import Icon from '../Icon/Icon'



const hundo = style({
    width:'100%',
})

const iconBar = style({
    display:'flex',
    alignItems:'center',
    width:'100%',
    justifyContent:'center'
})

const halfLeft = style({
    maxWidth: '50%',
    width: '45%',
    float: 'left',
    height:'50%',
    overflowX: 'scroll',
    overflowY: 'scroll',
    overflow: 'scroll',
    padding:'10px'
})

const halfRight = style({
    maxWidth: '50%',
    width: '45%',
    float: 'left',
    height: '80vh',
    overflowX: 'scroll',
    overflowY: 'scroll',
    overflow: 'scroll',
    marginLeft:'50px'
})

const Subpage = () => {

    return (
        <>
        <Container title="{subPage}">
            <div className={hundo}>

            
            <div className={halfLeft}>
                <img className={theme.imageBoxBig} src="/whataboutprcover-with-people.png" alt="" />
                
                <div className={iconBar}>
                    <span>
                        <Icon/>
                    </span>
                    

                </div>

            </div>

            <div className={halfRight}>
            <p className={theme.HeadingBold}>What about PR</p>
            <p className={theme.SubHeadingReg}> 
                <span className={theme.highlightGreen}> 
                    A podcast capturing the story and spirit of early-stage migrants across the world.
                </span> </p>
            <p>
            Although migration is not a new concept, rather one that predates modern civilization and humans, there have been a few notable events in the past which can be noted as waves of migration (think waves of coffee or revolutions).
            </p>

            <p>
            No specific time periods have been nailed down for the said waves, part of the reason for which could be events like the industrial revolution, the gold rush, wars, and the Y2K bug overshadowing it. The past few years could be noted as an urban wave of migration, especially when considering Asia. Our intent is to capture the emotion, drive, intent, and motivation of this wave. Specifically, focus on early-stage migrants, their journeys as they are happening and being noticed. Magnifying their early achievements, big or small, relationships in the connected world and plans for the future.
            </p>




            </div>
            </div>
        </Container>

        </>
    )

}

export default Subpage