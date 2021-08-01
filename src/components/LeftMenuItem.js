import React from "react";
import ReactDOM from "react-dom";
import styles from "./LeftMenuItem.module.css"
import img from "../img/img.svg"
import {useContext} from "react"
import {LeftItemContext} from "../App"

const LeftMenuItem = ({widgetName}) => {

    const handleLeftItemAdd = useContext(LeftItemContext)

    const handleDragStart = event => {
        console.log("onDragStart");
        // event.preventDefault()
    }

    const handleDragEnter = event => {
        console.log("onDragEnter", event.pageX);
    }

    const handleDragEnd = event => {
        console.log("onDragEnd");
        console.log("clientXY", event.clientX, event.clientY);
        console.log("onDragEnd", event.pageX, event.pageY);
        const rect = document.getElementById("root").getBoundingClientRect()
        // fixme: ゴリ押し。
        // const pos = React.findDOMNode().offset();
        // const pos = document.getElementById('content')
        // handleLeftItemAdd(event.pageX - 780, event.pageY - 100);

        handleLeftItemAdd(event.clientX - 350, event.clientY - 60);
    }

    const handleTouchMove = event => {
        // console.log("handleTouchMove");
    }

    const handleOnDrop = event => {
        console.log("ondrpo");
    }

    const handleMouseUp = event => {
        alert("carap")
        event.stopPropagation()
        event.preventDefault()
    }


    return (
        <button className={styles.leftMenuItem} draggable="true" onDragStart={handleDragStart}
                onDragEnter={handleDragEnter} onDragEnd={handleDragEnd} onDrop={handleOnDrop} onDrag={handleTouchMove}
                onMouseUp={handleMouseUp}>
            <img src={img} alt=""/>
            <p>{widgetName}</p>
        </button>
    )
}

export default LeftMenuItem