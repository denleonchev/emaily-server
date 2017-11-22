import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const configureStore = () => {
  const middleware = []
  middleware.push(thunk)
  let composeEnhancers
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  } else {
    composeEnhancers = compose
  }

  return createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))
}

export default configureStore
