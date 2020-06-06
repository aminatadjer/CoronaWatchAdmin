import React from 'react';
import ReactDom from 'react-dom';
import Tasks from './Tasks';
import { render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('table');
    ReactDom.render(<Tasks></Tasks>, div);
});