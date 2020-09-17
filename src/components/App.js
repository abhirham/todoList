import React, {useState, useEffect} from 'react';
import Header from './Header';
import Body from './body/container';
import Loader from './Loader';

import {signInAnonymously} from '../helpers/auth';

const App = () => {

    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        (async () => {
            await signInAnonymously();
            setShowLoader(false);
        })();
    }, []);

    if(showLoader) {
        return <Loader />
    }

    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}

export default App;