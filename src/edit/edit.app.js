import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Edit from './index.jsx';

const domElementGetter = () => document.getElementById('edit');

export const edit = singleSpaReact({
    React, ReactDOM, 
    rootComponent: Edit,
    domElementGetter
});