import styles from "./Content.module.css"
import ContentItem from './ContentItem';


const Content = ({contents}) => {
    return (
        <div className={styles.content}>
            {contents.map((content) => (
                content
            ))}
        </div>
    )
}


export default Content
