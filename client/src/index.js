import StateProvider from './context/StateProvider'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export const { Consumer, Provider } = React.createContext();


ReactDOM.render(
    <StateProvider>
        <App />
    </StateProvider>,
    document.getElementById('root')
)