import React from 'react';
import ReactDom from 'react-dom';
import Articles from './../Articles';
import { render, cleanup} from '@testing-library/react';
import { ExpansionPanelActions } from '@material-ui/core';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<Articles></Articles>, div);
});