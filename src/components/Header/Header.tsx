import styles from '../../../styles/Home.module.css'

const Header = () => {
    return (
        <>
        <h2 className={styles.title}>
            👋🏼 Hi there
        </h2>
        <p className={styles.description}>
          Welcome to the{' '}
          <code className={styles.code}>kittu-verse</code>
        </p>
        </>
    )
}

export default Header;