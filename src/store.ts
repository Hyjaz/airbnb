// import * as _ from 'lodash'
import logger from 'redux-logger'
import { combineReducers, applyMiddleware, createStore, Middleware } from 'redux'
import { /*combineEpics,*/ createEpicMiddleware } from 'redux-observable'

// import epics from './epics'
import * as reducers from './reducers'
import { StoreState } from './types'

const epicMiddleware = createEpicMiddleware()
const rootReducer = combineReducers<StoreState>({...reducers})
// const rootEpic = combineEpics(..._.values(epics))

const middlewares: Middleware[] = []
if (process.env.NODE_ENV !== 'production') middlewares.push(logger)
middlewares.push(epicMiddleware)

export default createStore<StoreState, any, {}, {}>(
  rootReducer,
  applyMiddleware(...middlewares),
)

// epicMiddleware.run(rootEpic)
