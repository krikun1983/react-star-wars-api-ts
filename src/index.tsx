import React from 'react';
import ReactDOM from 'react-dom';
import PeoplePage from './containers/people-page';
import './assets/scss/app.scss';

const App = (): JSX.Element => {
  return (
    <>
      <div className="wrapper">
        <PeoplePage />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
