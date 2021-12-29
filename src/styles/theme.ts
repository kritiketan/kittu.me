import { style } from 'typestyle';


/************** META***************/
export enum Colors {

    GLOBAL_BACKGROUND = '#36454F',
    WHITE = '#fff',
    SHADOW_COLOR = '#fff',
    NEON_GREEN = '#39FF14',


    DARK_GREY = '#45484d',
    ORANGE = '#FCB07E',
    
    GREEN = '7EA172'
}

enum fonts { 
    code = 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace;'

}

/************** STYLES ***************/
export const HeadingBold = style({
    fontSize:'60px',
    fontWeight:'bold'
})

export const SubHeadingReg = style({
    fontSize:'18px',
    fontWeight:'normal'
})

export const code = style({
    borderRadius: '5px',
    padding: '0.7rem',
    fontSize: '1.1rem',
    fontFamily: fonts.code,
    $nest: {
        '&:hover':{
            color: Colors.NEON_GREEN,
            cursor: 'pointer',
            transition:'all 1s ease'
        }
    }
})

export const highlightGreen = style({
    color: Colors.NEON_GREEN,
    fontWeight: 'bold'
})

export const card = style({
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: '300px',
    $nest: {
        '&:hover': {
            color: '#0070f3',
            borderColor: '#0070f3'
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

export const imageBoxBig = style({
    boxShadow: `0 0 5px ${Colors.SHADOW_COLOR}`,
    borderRadius: '5px'
})

export const logoWhite = style({
    color: Colors.WHITE,
    width: '30px',
    height: '30px'
})



