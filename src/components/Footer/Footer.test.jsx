import React from 'react';
import ReactDom from 'react-dom';
import Footer from './Footer'
import { render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<Footer></Footer>, div);
});