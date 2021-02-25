import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger';


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}


// Note: this API requires redux@>=3.1.0
// export const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)
