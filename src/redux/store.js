import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import logger from 'redux-logger'


import cakeReducer from './cakes/cakeRducer'

import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({ iceCream: iceCreamReducer, cake: cakeReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store

