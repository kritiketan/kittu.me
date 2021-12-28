
import { style } from 'typestyle'
import * as theme from '../../styles/theme'

const footerStyle = style({
  display: 'flex',
  padding: '5px 0',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.Colors.DARK_GREY,
  $nest:{}
})
const Footer = () => {
    return (
      <footer className={footerStyle}>
          Powered by &nbsp;{' '}
          <code className={theme.code}>kittu</code>
      </footer>
    )
}

export default Footer;