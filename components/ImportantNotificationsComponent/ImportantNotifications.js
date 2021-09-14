import styles from './styles/ImportantNotifications.module.css';

const ImportantNotifications = ({message}) => {
    return (
        <div className={styles.importantNotifications}>
            <span>{message}</span>
        </div>
    )
}

export default ImportantNotifications;