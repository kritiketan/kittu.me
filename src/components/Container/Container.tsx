
import { FunctionComponent } from 'react'
import DocumentHead from '../DocumentHead/DocumentHead'
import Footer from '../Footer/Footer'
import HeaderNav from '../HeaderNav/HeaderNav'
import styles from '../../../styles/Home.module.css'
import { style } from 'typestyle';

const main = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '80vh',
  marginLeft: '10rem',
  marginRight: '10rem',
  lineHeight: '2.5'
})

interface ContainerProps {
    title: string
}

const Container: FunctionComponent<ContainerProps> = ({ title, children }) => {
  return (
      <>
      <div>
      <HeaderNav/>
      <DocumentHead title={title}/>
        <div className={main}>
            {children}
        </div>
      <Footer/>
    </div>
      </>
    
  )
}

export default Container
