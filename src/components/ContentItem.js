import {useInteractJS} from '../hooks';


const ContentItem = ({x, y}) => {
    const interact = useInteractJS({
      width: 100,
      height: 100,
      x: x,
      y: y
    })

    console.log(`${x}px`)
    console.log(`${y}px`)
    return (
          <input
            ref={interact.ref}
            style={{
              ...interact.style,
              border: '2px solid #0489B1',
              backgroundColor: '#A9D0F5'
            }}
          />
    )
}
export default ContentItem;
