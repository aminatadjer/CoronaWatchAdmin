import React from 'react';
import ReactDom from 'react-dom';
import AdminNavbar from './AdminNavbar';
import { render, cleanup, fireEvent, getByText, waitForDomChange, getByRole} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Header from './AdminNavbar';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<Header></Header>, div);
});

/* it("the bar toggles", ()=>{
    const {getByTestId, getByTitle, debug} = render(<Header></Header>);
    const togle= getByTestId('nav');
    fireEvent.click(togle);
    getByTitle('proof');
    debug();
})
 */
