import {style} from 'typestyle';
import Link from 'next/link'


const big = style({
    fontSize:'40px',
    padding:'20px',

})



const Icon = ()=>{

    return (
        <>
            <Link href="">
                <a className={big}>
                    🔗
                </a>
            </Link>

            <Link href="">
                <a className={big}>
                    📸
                </a>
            </Link>

            <Link href="">
                <a className={big}>
                    😊
                </a>
            </Link>

            <Link href="">
                <a className={big}>
                    💃🏻
                </a>
            </Link>


        </>
    )

}

export default Icon