import LeftMenuItem from "./LeftMenuItem";
import styles from "./LeftMenu.module.css";

const LeftMenu = () => {
    return (
        <div className={styles.leftMenu}>
            <LeftMenuItem widgetName={"テキスト"}/>
            <LeftMenuItem widgetName={"画像"}/>
            <LeftMenuItem widgetName={"四角形"}/>
        </div>
    )
}

export default LeftMenu