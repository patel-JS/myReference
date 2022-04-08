
# Why Redux
    for State Management

    The data in react always flow from parent to child components which makes it unidirectional

# What is Redux
    Redux is a pattern and library for managing and updating <b>application state</b>.
    using events called <b>actions</b>.
    It servres as a <b>centralized</b> store for state that needs to be used across your <b>entire application</b>.

# Main Topics

## Action => What to do?

## Reducer => how to do?

## Store => object which holds the state of the application

## Function associated with store 
=> create store
=> dispatc(action)
=> getState()


## action creator is pure function which creates an action

## in action we've to define what to do

## reducers are function that take the current state and action as action as argument,
and return a new state result. 

## store - the redux store brings together the state, action and reducers that make up your app. 

1> action
2> reducer
3> rootReducer
4> store

---

## Required Packages  

    npx install redux react-redux


## Folder Structure

I    + src
6      - App.js
5      - index.js
4      - store.js

      + actions
1        - index.js 

      + reducers
2        - reducerName.js
3        - index.js


### actions/index.js

    export const incNumber = () => {
        return {
            type: 'INCREMENT'
        }
    }

    export const decNumber = () => {
        return {
            type: 'DECREMENT'
        }
    }

### reducers/reducerName.js  

    const updateNumber = (state=0, action) => {
        if(action.type === "INCREMENT"){
            return state + 1;
        }
        else if(action.type === "DECREMENT"){
            return state - 1;
        }
        else{
            return state;
        }
    }

    export default updateNumber;

### reducers/index.js  

    import updateNumber from "./incDec";
    import {combineReducers} from 'redux';

    const rootReducer = combineReducers({
        updateNumber
    });

    export default rootReducer;

### src/store.js  

    import { createStore } from "redux";
    import rootReducer from './reducers/index'

    const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    export default store;

### src/index.js  

    import store from './store';
    import {Provider} from 'react-redux';

    store.subscribe(() => console.log(store.getState()))

        <Provider store={store}>
        <App />
        </Provider>

### src/App.js  

    import {useSelector, useDispatch} from 'react-redux';
    import {incNumber, decNumber} from './actions/index';

    const myState = useSelector((state) => state.updateNumber);
    const dispatch = useDispatch();

    <a className="btn btn-outline-primary mx-3 px-4" onClick={ ()=> dispatch(incNumber())}>+</a>
    <a className="btn btn-outline-success mx-3 px-4">{myState}</a>
    <a className="btn btn-outline-danger mx-3 px-4" onClick={ ()=> dispatch(decNumber())} >-</a>

---













>to install required packages  
    npx install redux react-redux redux-thunk

>folder structure  
    + src  
      + state
        - index.js 
        - store.js
        + action-creators
            - index.js 
        + reducers
            - reducerName.js 
            - index.js 
        + Container
            - Navbar.js
            - Main.js

>index.js (action-creators)

    export const depositMoney = (amount) => {
        return (dispatch) => {
            dispatch({
                type: 'deposit',
                payload: amount
            })
        }
    }

    export const withdrawalMoney = (amount) => {
        return (dispatch) => {
            dispatch({
                type: 'withdrawal',
                payload: amount
            })
        }
    }

>reducerName.js

    const reducer = (state=0, action) => {
        if(action.type === 'deposit'){
            return state + action.payload
        }
        if(action.type === 'withdraw'){
            return state - action.payload
        }
        else{
            return state;
        }
    }

    export default reducer

>index.js (in REDUCERS)

    import { combineReducers } from 'redux'
    import amountReducer from './amountReducer'

    const reducers = combineReducers({
        aount: amountReducer
    })

    export default reducers

>index.js (in STATE)

    export * as actionCreators from './action-creators/index';


>store.js (in STATE)

    import { applyMiddleware, createStore } from "redux";
    import thunk from 'redux-thunk'
    import reducers from "./reducers";

    export const store = createStore(reducers, {}, applyMiddleware(thunk))

>Navbar.js

    <!-- import -->
    import { useSelector } from 'react-redux' 

    <!-- in function -->
    const amount = useSelector(state => state.amount)
