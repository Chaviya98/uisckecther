import React, {useEffect, useState} from 'react';
import './App.css';
import Body from './components/body/body'
import Header from './components/header/header'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "./store";
import UserGuide from "./components/guide/UserGuide";
import About from "./components/about/About";


function App() {
    const [page, setPage] = useState(1);

    return (
        <Provider store={store}>
            <Header setPage={setPage}/>
            { page === 1 && <Body/>}
            { page === 2 && <UserGuide/>}
            { page === 3 && <About/>}
        </Provider>

    );
}

export default App;
