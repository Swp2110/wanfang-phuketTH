import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Suspense } from 'react'
import './App.css'
import { Home } from 'pages/Home'
import Wanfang from 'pages/Wanfang'

function App() {
  return (
    <Router>
      <Suspense fallback="...loading">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cafe" component={Wanfang} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
