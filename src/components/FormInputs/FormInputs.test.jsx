import React from 'react';
import ReactDom from 'react-dom';
import FormInputs from './FormInputs';
import FieldGroup from './FormInputs';
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<FormInputs ncols={10}></FormInputs>, div);
});

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<FieldGroup ncols={10}></FieldGroup>, div);
});

// check props

/*it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<FieldGroup ncols={10} label="This is a label"></FieldGroup>);
    expect(getByTestId('field')).toHaveTextContent('This is a label');
});*/

//snapshots

it ('matches snapshot', ()=>{
    const tree = renderer.create(<FieldGroup ncols = {10} label="This is a label"></FieldGroup>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<FieldGroup ncols={10}></FieldGroup>).toJSON();
    expect(tree).toMatchSnapshot();
})
