import React from 'react';
import ReactDom from 'react-dom';
import AdminNavbarLinks from './AdminNavbarLinks';
import { render, cleanup, fireEvent, getByText, waitForDomChange, getByRole} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
//import axios from 'axios';
//jest.mock('axios');

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<AdminNavbarLinks></AdminNavbarLinks>, div);
});
/*
it("data fetched correctly", ()=>{
    const data = {
        data: {
          casSignaler: [
            {
              objectID: '1',
              valide: 'false',
              supprime: 'false',
              vu: 'false',
              Media: 'jdndndfnfd',
              Commentaire: ',sdn;nc,;q n<,; c<; ;s',
            },
            {
              objectID: '2',
              valide: 'false',
              supprime: 'false',
              vu: 'false',
              Media: 'jdndndfnfd',
              Commentaire: ',sdn;nc,;q n<,; c<; ;s',
            },
          ],
        },
      };
   
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
});*/