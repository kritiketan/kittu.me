import { FunctionComponent } from 'react';
import styles from '../../../styles/Home.module.css'
import {style} from 'typestyle';

interface RandomCodeBlockProps {
    content:string
}

const RandomCodeBlock:FunctionComponent<RandomCodeBlockProps> = ({content}) => {
   
    return (
            <a href="#">
                <code className={styles.code}>{content}</code>  &nbsp; &nbsp; 
            </a>
    )
}
export default RandomCodeBlock;


