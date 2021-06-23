
import React from 'react';
import ReactDOM from 'react-dom';
import NewBadge from './pages/NewAttendance'
import BadgesList from './pages/BadgesList'
import App from'./components/App'


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(<Badge />, container);

ReactDOM.render(<App />,container)