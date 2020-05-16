import React from 'react';
import ReactDom from 'react-dom';
import CustomButton from '../CustomButton';
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<CustomButton></CustomButton>, div);
});

// check props 
it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton fill={true} simple={true} pullRight={true} round={true} block={true}></CustomButton>)
    expect(getByTestId('custombtn')).toHaveClass('btn-fill btn-simple pull-right btn-block btn-round')
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton fill={false} simple={false} pullRight={false} round={false} block={false}></CustomButton>)
    expect(getByTestId('custombtn')).not.toHaveClass('btn-fill btn-simple pull-right btn-block btn-round')
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton fill={true} ></CustomButton>)
    expect(getByTestId('custombtn')).toHaveClass('btn-fill')
})

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton fill={false} ></CustomButton>)
    expect(getByTestId('custombtn')).not.toHaveClass('btn-fill')
})

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton simple={true}></CustomButton>)
    expect(getByTestId('custombtn')).toHaveClass('btn-simple')
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton simple={false}></CustomButton>)
    expect(getByTestId('custombtn')).not.toHaveClass('btn-simple')
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton pullRight={true}></CustomButton>)
    expect(getByTestId('custombtn')).toHaveClass('pull-right')
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton pullRight={false}></CustomButton>)
    expect(getByTestId('custombtn')).not.toHaveClass('pull-right')
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton round={true}></CustomButton>)
    expect(getByTestId('custombtn')).toHaveClass('btn-round')
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton round={false}></CustomButton>)
    expect(getByTestId('custombtn')).not.toHaveClass('btn-round')
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton block={true}></CustomButton>)
    expect(getByTestId('custombtn')).toHaveClass('btn-block')
});

it('renders CustomButton correctly', ()=>{
    const {getByTestId} = render(<CustomButton block={false}></CustomButton>)
    expect(getByTestId('custombtn')).not.toHaveClass('btn-block')
});

// snapshot test

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomButton fill={true}></CustomButton>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomButton block={true}></CustomButton>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomButton round={true}></CustomButton>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomButton pullRight={true}></CustomButton>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot', ()=>{
    const tree = renderer.create(<CustomButton simple={true}></CustomButton>).toJSON();
    expect(tree).toMatchSnapshot();
})