import Link from 'next/link'
import { style } from 'typestyle'
import * as theme from '../../styles/theme'

const HeaderNavStyle = style({
  display: 'flex',
  flex: 1,
  padding: '0.3rem 0',
  width:'100vw',
  marginBottom: '4rem',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.Colors.DARK_GREY,
  position: 'sticky',
  flexWrap:'wrap',
  $nest: {
    'a:hover': {
      color: 'green'
    },
    a : {
      padding: '1rem'
    }
  }
})


const HeaderNav = () => {

    return (
        <header className={HeaderNavStyle}>
    <Link href="/podcast">
    <a>
          {' '}
          <code className={theme.code}>#podcast</code>
        </a>
    </Link>
        

        <a
          href="https://kittu.me/"
          target="_self"
        >
          {' '}
          <code className={theme.code}>#blog</code>
        </a>

        <a
          href="https://kittu.me/"
          target="_self"
        >
          {' '}
          <code className={theme.code}>#linkedin</code>
        </a>

        <a
          href="https://kittu.me/"
          target="_self"
        >
          {' '}
          <code className={theme.code}>#resume</code>
        </a>

      </header>
    )

}

export default HeaderNav