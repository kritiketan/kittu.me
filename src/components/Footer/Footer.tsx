import styles from '../../../styles/Home.module.css'

const Footer = () => {

    return (
<footer className={styles.footer}>
        <a
          href="https://kittu.me/"
          target="_self"
        >
          Powered by{' '}
          <code className={styles.code}>kittu</code>
        </a>
      </footer>
    )

}


export default Footer;