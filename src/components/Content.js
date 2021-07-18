import styles from "./Content.module.css"
import ContentItem from './ContentItem';


const Content = ({contents}) => {
    return (
        <div className={styles.content}>
            {contents.map((content) => (
                content
            ))}
            {/*<ContentItem x={300} y={50}/>*/}
        </div>
    )
}


export default Content
