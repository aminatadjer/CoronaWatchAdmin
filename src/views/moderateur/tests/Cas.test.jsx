import React from 'react';
import ReactDom from 'react-dom';
import Cas from './../Cas';
import { render, cleanup} from '@testing-library/react';
import { ExpansionPanelActions } from '@material-ui/core';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<Cas></Cas>, div);
});

/*it("supprimer clicked", ()=>{
    const {getByTestId, debug} = render(<Cas></Cas>);
    const supprimer= getByTestId('dl');
    fireEvent.click(supprimer);
    not.getByTestId('dl');
    debug();
})*/




