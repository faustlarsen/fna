import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'firebase/auth';
import firebase from "./firebase";
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { createFirestoreInstance } from 'redux-firestore';


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rrfProps = {
  firebase,
  config: {
      userProfile: "users",
      useFirestoreForProfile: true,
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}


ReactDOM.render( 
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


