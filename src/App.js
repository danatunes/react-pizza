import './App.scss';
import axios from 'axios';

import {Header} from "./components"
import {Home, Cart} from "./pages";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route exact path={'/cart'} element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
