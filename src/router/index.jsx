import { Switch, Route } from 'react-router-dom'
import { option } from './options'
export default function RouterEl() {
  return (
    <Switch>
      {
        option.map(item =>
          <Route
            path={item.path}
            exact={item.path === '/'}
            key={item.path + 'router'}
            component={item.component}
          >
          </Route>
        )
      }
    </Switch>
  )
}