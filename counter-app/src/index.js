import React from 'react';
// import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import { createRoot } from 'react-dom/client';

// import CounterApp from './CounterApp';

import './index.css';

// React 17
// ReactDOM.render(<CounterApp  value={ 2 } />, document.getElementById('root'));

// React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CounterApp />);
