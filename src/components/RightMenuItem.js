import styles from "./RightMenuItem.module.css";

const RightMenuItem = ({title}) => {
    return (
        <div className={styles.RightMenuItem}>
            <p>{title}</p>
            <input/>
        </div>
    )
}


export default RightMenuItem