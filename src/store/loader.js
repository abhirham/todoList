import {atom, selector} from 'recoil';

export const loaderState = atom({
    key: 'loaderState',
    default: []
});

export const showLoader = selector({
    key: 'showLoader',
    get: ({get}) => get(loaderState).length > 0
})
