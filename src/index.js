import React from 'react'
import ReactDOM from 'react-dom'
import ReduxStore from 'root'
import App from 'components/App'

ReactDOM.render(
    <ReduxStore>
        <App/>
    </ReduxStore>,
    document.querySelector('#root'));

