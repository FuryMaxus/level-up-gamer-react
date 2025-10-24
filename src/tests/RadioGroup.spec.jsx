import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup from '../components/molecules/RadioGroup';

describe('Tests RadioGroup', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  it('renderiza titulo y opciones', () => {
    render(
      <RadioGroup
        id="test-group"
        title="Choose an option"
        name="test"
        options={options}
        selected="option1"
        onChange={() => {}}
      />
    );

    expect(screen.getByText('Choose an option')).toBeInTheDocument();


    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();

    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).not.toBeChecked();
  });

  it('llama onChange cuando se clickea la opcion', () => {
    const handleChange = jest.fn();

    render(
      <RadioGroup
        id="test-group"
        name="test"
        options={options}
        selected="option1"
        onChange={handleChange}
      />
    );


    fireEvent.click(screen.getByLabelText('Option 2'));

    expect(handleChange).toHaveBeenCalledWith('option2');
  });
});