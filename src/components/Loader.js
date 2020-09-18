import React from 'react';
import {useRecoilValue} from 'recoil';

import {showLoader} from '../store/loader';

const Loader = () => {

    const _showLoader = useRecoilValue(showLoader);
    
    if(_showLoader)
        return (
            <div className="center">
                <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    
        return null;
}

export default Loader;