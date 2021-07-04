import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Content from "./components/Content";
import RightMenu from "./components/RightMenu";
import ContentItem from './components/ContentItem';
import { useState, createContext } from 'react';
import { useInteractJS } from './hooks';

export const LeftItemContext = createContext({})


function App() {
  const [contents, setContents] = useState([
    <ContentItem x={10} y={10}/>
  ])

  const HandleLeftItemAdd = (x, y) => {
    console.log("handleLeftItemADdd",x, y)
    // const interct = useInteractJS({
    //   width: 100,
    //   height: 100,
    //   x: x,
    //   y: y
    // })

    // console.log( document.getElementsByClassName("Content"));
    // console.log(interct)

    setContents([...contents], <ContentItem x={x} y={y}/> );

    // document.body.insertAdjacentHTML('afterbegin',
    // "<ContentItem x={$x} y={$y}/>"
    // "\
    //   <h1>crap</h1>\
    //   <div\
    //   ref={interact.ref}\
    //   style={{\
    //     ...interact.style,\
    //     border: '2px solid #0489B1',\
    //     backgroundColor: '#A9D0F5'\
    //   }}\
    // />\
    // </div>\
    // "
    // );
  }

  return (
      <>
        <Header/>
          <div className={"App"}>
              <LeftItemContext.Provider value={HandleLeftItemAdd}>
                <LeftMenu/>
              </LeftItemContext.Provider>
              <Content className={"Content"} contents={contents}>
                <ContentItem x={100} y={1}/>
                <ContentItem x={1} y={1}/>
                <ContentItem x={1} y={1}/>
                <ContentItem x={1} y={1}/>
                  {/* {contents} */}
                </Content>
              <RightMenu/>
          </div>
      </>
  );
}
export default App;
