import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Content from "./components/Content";
import RightMenu from "./components/RightMenu";
import ContentItem from './components/ContentItem';
import {useState, createContext, useEffect} from 'react';
import {useInteractJS} from './hooks';

export const LeftItemContext = createContext({})


function App() {
    const [contents, setContents] = useState([
        <ContentItem x={10} y={10}/>,
        <ContentItem x={100} y={10}/>,
        <ContentItem x={10} y={200}/>
    ])


    const HandleLeftItemAdd = (x, y) => {
        console.log("handleLeftItemADdd", x, y)
        console.log(contents)
        setContents([...contents, <ContentItem x={x} y={y}/>]);
        // setContents((pre_contents) => {
        //     // ReactDOM.render(ContentView, document.getElementById('root'));
        //     return pre_contents
        // })
        console.log("handleLeftItemAdded", x, y)
    }

    const ContentView = (
        <Content id={"content"} className={"Content"} contents={contents}/>
    )

    useEffect(() => {
        console.log("useEffect");
        console.log(contents);
        try {
            ReactDOM.render(ContentView, document.getElementById('content'));
        } catch (_) {
        }
    })

    return (
        <>
            <Header/>
            <div className={"App"}>
                <LeftItemContext.Provider value={HandleLeftItemAdd}>
                    <LeftMenu/>
                </LeftItemContext.Provider>
                {ContentView}
                {/*<Content className={"Content"} contents={contents}>*/}
                {/*</Content>*/}
                <RightMenu/>
            </div>
        </>
    );
}

export default App;
