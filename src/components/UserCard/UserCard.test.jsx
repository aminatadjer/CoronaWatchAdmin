import React from 'react';
import ReactDom from 'react-dom';
import UserCard from './UserCard';
import { render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<UserCard></UserCard>, div);
});