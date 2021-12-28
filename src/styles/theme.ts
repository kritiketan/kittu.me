import { style } from 'typestyle';


/************** META***************/
export enum Colors {
    DARK_GREY = '#45484d',
    ORANGE = '#FCB07E',
    SHADOW_COLOR = '#838486',
    GREEN = '7EA172'
}

enum fonts { 
    code = 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace;'

}


/************** DEFINITION ***************/
//background: var(--main-code-bg-color);
export const code = style({
    borderRadius: '5px',
    padding: '0.7rem',
    fontSize: '1.1rem',
    fontFamily: fonts.code,
    $nest: {
        '&:hover':{
            color: Colors.GREEN
        }
    }
  })



/************** STYLES ***************/
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




