
import { FunctionComponent } from 'react'
import DocumentHead from '../DocumentHead/DocumentHead'
import Footer from '../Footer/Footer'
import HeaderNav from '../HeaderNav/HeaderNav'
import { style } from 'typestyle';
import * as theme from '../../styles/theme'

const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  lineHeight: '2.5'
})

const inner = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '85vh',
  width: '80vw',
  alignItems: 'center',
})

const background = style({
  backgroundColor:theme.Colors.GLOBAL_BACKGROUND,
  color:theme.Colors.WHITE,
})

interface ContainerProps {
    title: string
}

const Container: FunctionComponent<ContainerProps> = ({ title, children }) => {
  return (
      <div className={background}>
        
        <DocumentHead title={title}/>
        <div className={main}>
        <HeaderNav/>
          <div className={inner}>
                
                {children}
          </div>
        </div>
        <Footer/>
      </div>
    
  )
}

export default Container
