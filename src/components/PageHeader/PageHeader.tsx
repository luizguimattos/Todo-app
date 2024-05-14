import styles from './PageHeader.module.css'

function PageHeader() {

    return (
        <header className={styles.container}>
            <img src="/logo.svg" alt="logo da aplicação" />
        </header>
    )
}

export default PageHeader