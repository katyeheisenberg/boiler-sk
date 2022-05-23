import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, StaticRouter } from 'react-router-dom'

import store, { history } from '../redux'
import Main from '../components/main'
import User from '../components/user'
import Inner from '../components/inner'
// import Home from '../components/home'
// import DummyView from '../components/dummy-view'
// import NotFound from '../components/404'

import Startup from './startup'

// const OnlyAnonymousRoute = ({ component: Component, ...rest }) => {
//   const user = useSelector((state) => state.auth.user)
//   const token = useSelector((state) => state.token)
//   const func = (props) => {
//     if (!!user && !!user.name && !!token) <Redirect to={{ pathname: '/' }} />
//     return <Component {...props} />
//   }
//   return <Route {...rest} render={func} />
// }

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const user = useSelector((state) => state.auth.user)
//   const token = useSelector((state) => state.token)

//   const func = (props) => {
//     if (!!user && !!user.name && !!token) return <Component {...props} />

//     return (
//       <Redirect
//         to={{
//           pathname: '/login'
//         }}
//       />
//     )
//   }
//   return <Route {...rest} render={func} />
// }

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const RootComponent = (props) => {
  const [user, setUser] = useState('')
  const changeState = (str) => {
    setUser(str)
  }
  useEffect(() => {
    history.push(`/${user}`)
  }, [user])
  const [repo, setRepo] = useState('')
  const addRepo = (str) => {
    setRepo(str)
  }
  useEffect(() => {
    history.push(`/${user}/${repo}`)
  })
  return (
    <Provider store={store}>
      <RouterSelector history={history} location={props.location} context={props.context}>
        <Startup>
          <Switch>
            <Route exact path="/" render={() => <Main changeState={changeState} />} />
            <Route exact path="/:username" render={() => <User changeState={addRepo} />} />
            <Route exact path="/:username/:repositoryName" component={Inner} />
            {/* <PrivateRoute exact path="/hidden-route" component={DummyView} />
            <OnlyAnonymousRoute exact path="/anonymous-route" component={DummyView} /> */}

            {/* <Route component={NotFound} /> */}
          </Switch>
        </Startup>
      </RouterSelector>
    </Provider>
  )
}

export default RootComponent
