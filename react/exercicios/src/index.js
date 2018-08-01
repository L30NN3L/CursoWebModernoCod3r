import React from 'react';
import ReactDOM from 'react-dom';

const elemento = <h1>React</h1>

ReactDOM.render(elemento, document.getElementById('root'))

// É como se fosse...
// $('<h1>').html('React')