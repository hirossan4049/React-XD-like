import styles from "./LeftMenuItem.module.css"
import img from "../img/img.svg"
import { useContext } from "react"
import { LeftItemContext } from "../App"

const LeftMenuItem = ({widgetName}) => {

    const handleLeftItemAdd = useContext(LeftItemContext)

    const handleDragStart = event => {
        console.log("onDragStart");
    }

    const handleDragEnter = event => {
        console.log("onDragEnter", event.pageX);
    }

    const handleDragEnd = event => {
        console.log("onDragEnd");
        console.log("onDragEnd", event.pageX, event.pageY);
        handleLeftItemAdd(event.pageX, event.pageY);
    }

    // const handleTouchMove = event => {
    //     console.log("handleTouchMove");
    // }

    const handleOnDrop = event => {
        console.log("ondrpo");
    }


    return (
        <button className={styles.leftMenuItem} draggable="true" onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragEnd={handleDragEnd} onDrop={handleOnDrop}>
            <img src= {img} alt="" />
            <p>{widgetName}</p>
        </button>
    )
}

export default LeftMenuItem