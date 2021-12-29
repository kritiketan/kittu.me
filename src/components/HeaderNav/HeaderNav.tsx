import Link from 'next/link'
import { style } from 'typestyle'
import * as theme from '../../styles/theme'

const HeaderNavStyle = style({
  display: 'flex',
  flex: 1,
  padding: '0.3rem 0',
  width:'100vw',
  marginBottom: '2rem',
  justifyContent: 'center',
  alignItems: 'center', 
  position: 'sticky',
  flexWrap:'wrap',
  $nest: {
    'a:hover': {
      color: theme.Colors.NEON_GREEN
    },
    code : {
      padding: '1rem 5rem'
    }
  }
})


const HeaderNav = () => {

    return (
        <header className={HeaderNavStyle}>
        
        
        <Link href="/podcast">
          <code className={theme.code}>.goToPodcast()</code>
        </Link>

        <Link href="/podcast">
          <code className={theme.code}>.goToBlog()</code>
        </Link>
        

        <Link href="/">
          <img src="favicon.png" className={theme.logoWhite}/>
        </Link>


        <Link href="/podcast">
          <code className={theme.code}>.goToLinkedIn()</code>
        </Link>

        <Link href="/podcast">
          <code className={theme.code}>.goToGitHub()</code>
        </Link>

      </header>
    )

}

export default HeaderNav