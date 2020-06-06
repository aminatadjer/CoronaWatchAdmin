import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import { render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<Card></Card>, div);
});


