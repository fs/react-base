import { Simulate } from 'react-dom/lib/ReactTestUtils';

export function inputHasErrorClass(input) {
  return input.parentElement.classList.contains('has-error');
};

export function inputHasSuccessClass(input) {
  return input.parentElement.classList.contains('has-success');
};

export function simulateInputChange(input, name, value) {
  Simulate.change(input, {
    target: { name, value }
  });
};
