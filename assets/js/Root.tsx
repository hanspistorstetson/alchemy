import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomePage, FetchDataPage } from './pages'
import { Header, Counter } from './components'

export default class Root extends React.Component {
    public render(): JSX.Element {
        return (
            <>
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/fetch-data" component={FetchDataPage} />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
