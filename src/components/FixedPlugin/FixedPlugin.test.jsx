import React from 'react';
import ReactDom from 'react-dom';
import FixedPlugin from './FixedPlugin'
import { render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<FixedPlugin></FixedPlugin>, div);
});
