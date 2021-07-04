import styles from "./Content.module.css"
import ContentItem from './ContentItem';


const Content = ({contents}) => {
    return (
        <div className={styles.content}>
            <ContentItem x={100} y={10}/>
        </div>
    )
}


export default Content
