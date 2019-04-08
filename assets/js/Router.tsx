
import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomePage, FetchDataPage, PageNotFound, SignInPage } from './pages'
import { Header, Counter } from './components'

const divStyle = {
    margin: '0px'
}

export default class Router extends React.Component {
    public render(): JSX.Element {
        const { dispatch } = this.props;
        console.log(dispatch)
        console.log(this.props)
        return (
            <BrowserRouter>
                <div className="app" >
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/fetch-data" component={FetchDataPage} />
                        <Route path="/login" component={SignInPage} />
                        <Route path="*" component={PageNotFound} />

                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}
