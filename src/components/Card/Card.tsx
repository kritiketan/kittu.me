import { FunctionComponent } from "react";

interface CardProps {
    heading:string,
    body:string,
    imageUrl:string 
}
const Card:FunctionComponent<CardProps> = ({heading,body,imageUrl}) => {
    return (
        <>
        <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{ heading} &rarr;</h2>
            <p>{ body }</p>
        </a>
        </>
    )

}

export default Card;