import * as React from 'react'
import Router from './Router'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import IndexReducer from "./reducers/IndexReducer"
import api from './_middleware/api'


let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

let store = createStoreWithMiddleware(IndexReducer)


export default class Root extends React.Component {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}
