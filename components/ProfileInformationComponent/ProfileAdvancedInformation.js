import styles from './styles/ProfileAdvancedInformation.module.css';

const ProfileAdvancedInformation = ({header, children, navBarComponent}) => {
    return (
        <div className={styles.profileAdvancedInformation}>
            <div className={styles.profileAdvancedInformation_inf}>
                <div className={styles.profileAdvancedInformation_inf_header}>
                    {header}
                </div>
                {navBarComponent}
                <div className={styles.profileAdvancedInformation_inf_section}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ProfileAdvancedInformation;