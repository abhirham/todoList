import React, {useEffect} from 'react';
import Header from './Header';
import Body from './body/container';
import Loader from './Loader';

import {signInAnonymously} from '../helpers/auth';
import {loaderState} from '../store/loader';
import {useSetRecoilState} from 'recoil';

const App = () => {
    const _setLoader = useSetRecoilState(loaderState);

    useEffect(() => {

        (async () => {
            _setLoader(oldVal => [...oldVal, true])
            try{
                await signInAnonymously();
            }catch(e) {
                console.log(e);
            }finally {
                _setLoader(oldVal => oldVal.slice(1));
            }
        })();
        // eslint-disable-next-line
    }, []);


    return (
        <div className="App">
            <Loader />
            <Header />
            <Body />
        </div>
    )
}

export default App;