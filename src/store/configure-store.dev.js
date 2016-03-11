import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

import DevTools from '../containers/dev-tools'
import rootReducer from '../reducers'

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
