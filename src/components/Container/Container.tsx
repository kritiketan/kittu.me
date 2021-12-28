
import { FunctionComponent } from 'react'
import DocumentHead from '../DocumentHead/DocumentHead'
import Footer from '../Footer/Footer'
import HeaderNav from '../HeaderNav/HeaderNav'
import styles from '../../../styles/Home.module.css'
interface ContainerProps {
    title: string
}

const Container: FunctionComponent<ContainerProps> = ({ title, children }) => {
  return (
      <>
      <div>
      <HeaderNav/>
      <DocumentHead title={title}/>
        <div className={styles.main}>
            {children}
        </div>
      <Footer/>
    </div>
      </>
    
  )
}

export default Container
