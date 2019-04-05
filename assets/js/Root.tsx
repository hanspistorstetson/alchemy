import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomePage, FetchDataPage, PageNotFound } from './pages'
import { Header, Counter } from './components'

export default class Root extends React.Component {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <div className="app" >
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/fetch-data" component={FetchDataPage} />
                        <Route path="*" component={PageNotFound} />

                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}
