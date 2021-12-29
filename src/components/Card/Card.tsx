import { FunctionComponent } from "react";
import {style} from 'typestyle';
import * as theme from '../../styles/theme'
import Link from 'next/link'


export const card = style({
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    width: '40%',
    $nest: {
        '&:hover': {
            color: theme.Colors.NEON_GREEN,
            borderColor: theme.Colors.NEON_GREEN,
            cursor:'pointer'
        },
        h2:{
            margin: '0 0 1rem 0',
            fontSize: '1.5rem'
        },
        p:{
            margin: 0,
            fontSize: '1.25rem',
            lineHeight: '1.5'
        }
    }


})
interface CardProps {
    heading:string,
    body:string,
    url:string 
}
const Card:FunctionComponent<CardProps> = ({heading,body,url}) => {
    return (
        <>
        <Link href={url}>
            <a className={card}>
                <h2>{ heading } </h2>
                <p>{ body }</p>
            </a>
        </Link>
        </>
    )

}

export default Card;