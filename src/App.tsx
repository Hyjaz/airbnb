import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../src/navbar/container'

export default class App extends React.Component<any, any>{

  public render(): JSX.Element {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Navbar}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
