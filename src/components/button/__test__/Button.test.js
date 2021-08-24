import { render } from '@testing-library/react';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

import Button from './../Button';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button label="test"/>, div);
})

it("renders button correctly", () => {
   const {getByTestId} = render(<Button label="click me please" />);
   expect(getByTestId('button')).toHaveTextContent("click me please");
})

it("has different text after the button is clicked", () => {
    const {getByTestId} = render(<Button label="click me please" />);
    getByTestId('button').click();
    expect(getByTestId('button')).toHaveTextContent("clicked");
})