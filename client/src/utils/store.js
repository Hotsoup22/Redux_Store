// Creates a Redux store that holds the state of the app. 
import {createStore} from "redux"

import reducers from './reducers'

export default createStore(reducers)