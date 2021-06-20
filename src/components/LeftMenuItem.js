import styles from "./LeftMenuItem.module.css"
import img from "../img/img.svg"

const LeftMenuItem = ({widgetName}) => {
    return (
        <button className={styles.leftMenuItem}>
            <img src= {img} alt="" />
            <p>{widgetName}</p>
        </button>
    )
}

export default LeftMenuItem