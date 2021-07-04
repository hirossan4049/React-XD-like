import { useInteractJS } from '../hooks';


const ContentItem = (x, y) => {
  const interact = useInteractJS({
    width: 100,
    height: 100,
    x: x,
    y: y
  })

  return (
    // <div className="App">
    <>
      {/* <button onClick={() => interact.enable()}>有効化</button>
      <button onClick={() => interact.disable()}>無効化</button> */}
      <div
        ref={interact.ref}
        style={{
          ...interact.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5'
        }}
      />
      </>
    // </div>
  )
}
export default ContentItem;
