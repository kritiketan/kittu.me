
import { FunctionComponent } from 'react'
import DocumentHead from '../DocumentHead/DocumentHead'
import Footer from '../Footer/Footer'
import HeaderNav from '../HeaderNav/HeaderNav'
import styles from '../../../styles/Home.module.css'
import { style } from 'typestyle';

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

interface ContainerProps {
    title: string
}

const Container: FunctionComponent<ContainerProps> = ({ title, children }) => {
  return (
      <>
      <HeaderNav/>
      <DocumentHead title={title}/>
      <div className={main}>
        <div className={inner}>
              {children}
        </div>
      </div>
      <Footer/>
      </>
    
  )
}

export default Container
