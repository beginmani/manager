import React,{ Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyAsT3tdsDESKJuo8eiv2gy0o2KPPuka6qk',
            authDomain: 'manager-35357.firebaseapp.com',
            databaseURL: 'https://manager-35357.firebaseio.com',
            projectId: 'manager-35357',
            storageBucket: 'manager-35357.appspot.com',
            messagingSenderId: '589977811046'
          };
          firebase.initializeApp(config);
    }
    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;