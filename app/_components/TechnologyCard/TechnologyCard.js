import styles from './technologyCard.module.scss';
const TechnologyCard = ({technology: {name, icon}}) => {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.name}>{name}</div>
        </div>
    )
}

export default TechnologyCard;