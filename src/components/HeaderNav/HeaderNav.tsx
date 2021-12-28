import styles from '../../../styles/Home.module.css'
const HeaderNav = () => {

    return (
        <header className={styles.headerNav}>
    
        <a
          href="/podcast"
        >
          {' '}
          <code className={styles.code}>#podcast</code>
        </a>

        <a
          href="https://kittu.me/"
          target="_self"
        >
          {' '}
          <code className={styles.code}>#blog</code>
        </a>

        <a
          href="https://kittu.me/"
          target="_self"
        >
          {' '}
          <code className={styles.code}>#linkedin</code>
        </a>

        <a
          href="https://kittu.me/"
          target="_self"
        >
          {' '}
          <code className={styles.code}>#resume</code>
        </a>

      </header>
    )

}

export default HeaderNav