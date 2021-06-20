import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Content from "./components/Content";
import RightMenu from "./components/RightMenu";

function App() {
  return (
      <>
        <Header/>
          <div className={"App"}>
              <LeftMenu/>
              <Content/>
              <RightMenu/>
          </div>
      </>
  );
}

export default App;
