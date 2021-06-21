import styles from "./RightMenu.module.css"
import RightMenuItem from "./RightMenuItem";


const RightMenu = () => {
    return (
        <div className={styles.rightMenu}>
            <RightMenuItem></RightMenuItem>
        </div>
    )
}


export default RightMenu