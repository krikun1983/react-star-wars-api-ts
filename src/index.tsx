import React from 'react';
import ReactDOM from 'react-dom';
import getApiResource, { PEOPLE } from './utils/network';
import './assets/scss/app.scss';

getApiResource(PEOPLE);

const App = (): JSX.Element => <div>Hello</div>;

ReactDOM.render(<App />, document.getElementById('root'));
