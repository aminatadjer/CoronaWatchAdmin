import React from 'react';
import ReactDom from 'react-dom';
import CustomCheckbox from './CustomCheckbox';
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<CustomCheckbox></CustomCheckbox>, div);
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomCheckbox isChecked={true}></CustomCheckbox>)
    expect(getByTestId('customchck')).toBeChecked;
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomCheckbox label="This is a checkbox"></CustomCheckbox>)
    expect(getByTestId('customchck')).toHaveTextContent("This is a checkbox");
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomCheckbox inline={true}></CustomCheckbox>)
    expect(getByTestId('customchck')).toHaveClass('checkbox-inline');
});

// Snapshots 

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomCheckbox isChecked={true}></CustomCheckbox>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomCheckbox label="This is a checkbox"></CustomCheckbox>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomCheckbox number={1}></CustomCheckbox>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomCheckbox inline={true}></CustomCheckbox>).toJSON();
    expect(tree).toMatchSnapshot();
})