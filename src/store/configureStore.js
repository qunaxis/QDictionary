import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import devToolsEnhancer from 'remote-redux-devtools'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            devToolsEnhancer({ name: 'QDictionary', realtime: true })            
        )
    )
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
