import styles from "./RightMenu.module.css"
import RightMenuItem from "./RightMenuItem";


const RightMenu = () => {
    return (
        <div className={styles.rightMenu}>
            <RightMenuItem title="ID"></RightMenuItem>
            <RightMenuItem title="色"></RightMenuItem>
            <RightMenuItem title="フォント"></RightMenuItem>

        </div>
    )
}


export default RightMenu