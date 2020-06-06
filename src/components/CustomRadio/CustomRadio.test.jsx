import React from 'react';
import ReactDom from 'react-dom';
import CustomRadio from './CustomRadio';
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<CustomRadio></CustomRadio>, div);
});

// check props
it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomRadio option={true}></CustomRadio>)
    expect(getByTestId('customrd')).toBeChecked;
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomRadio label="This is a radiobutton"></CustomRadio>)
    expect(getByTestId('customrd')).toHaveTextContent("This is a radiobutton");
});

//snapshot

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomRadio label="This is a radiobutton"></CustomRadio>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomRadio number={1}></CustomRadio>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomRadio option ={true}></CustomRadio>).toJSON();
    //const tree = renderer.create(<CustomRadio option={true}></CustomRadio>).toJSON();
    expect(tree).toMatchSnapshot();
})