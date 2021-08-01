import {useInteractJS} from '../hooks';
import styles from "./ContentItem.module.css"

const ContentItem = ({x, y}) => {
    const interact = useInteractJS({
      width: 100,
      height: 30,
      x: x,
      y: y
    })

    console.log(`${x}px`)
    console.log(`${y}px`)
    return (
          <input
            ref={interact.ref}
            className={styles.contentItem}
            type="text"
            value="Text"
            style={{
              ...interact.style,
            }}
          />
    )
}
export default ContentItem;
