import styles from "./Header.module.css";

import fulllogo from "../img/retrato-fulllogo.png"


const Header = () => {
    return (
        <header className={styles.header}>
            <img src={fulllogo}/>
            <p className={styles.headerTitle}>無名プロジェクト</p>
            <p>icon</p>
        </header>
    )
}

export default Header