// import React from 'react';
// import { mount } from 'enzyme';
// import { FormControl } from 'react-bootstrap';
// import SignupForm from 'components/signupForm';

// describe('Signup Modal', () => {
//   const props = {
//     closeModal: jest.fn(),
//     signupUser: jest.fn(),
//     isLoading: false
//   };
//   const signupFormComponent = mount(<SignupForm { ...props }/>);

//   describe('name field', () => {
//     const nameInput = signupFormComponent
//       .find(FormControl)
//       .filterWhere(n => n.props().name === 'name');

//     it('appears success state when name is valid', () => {
//       nameInput.simulate('change', {
//         target: { name: 'name', value: 'someName' }
//       });
//       expect(nameInput.parent().props().validationState).toEqual('success');
//     });
//   });

//   describe('email field', () => {
//     const emailInput = signupFormComponent
//       .find(FormControl)
//       .filterWhere(n => n.props().name === 'email');

//     it('appears error state when email is too short', () => {
//       emailInput.simulate('change', {
//         target: { name: 'email', value: 'short' }
//       });
//       expect(emailInput.parent().props().validationState).toEqual('error');
//     });

//     it('appears success state when email is valid', () => {
//       emailInput.simulate('change', {
//         target: { name: 'email', value: 'email@example.com' }
//       });
//       expect(emailInput.parent().props().validationState).toEqual('success');
//     });
//   });

//   describe('password field', () => {
//     const passwordInput = signupFormComponent
//       .find(FormControl)
//       .filterWhere(n => n.props().name === 'password');

//     it('appears error state when password is too short', () => {
//       passwordInput.simulate('change', {
//         target: { name: 'password', value: 'short' }
//       });
//       expect(passwordInput.parent().props().validationState).toEqual('error');
//     });

//     it('appears success state when password is valid', () => {
//       passwordInput.simulate('change', {
//         target: { name: 'password', value: 'strongPassword' }
//       });
//       expect(passwordInput.parent().props().validationState).toEqual('success');
//     });
//   });

//   describe('password field', () => {
//     const passwordInput = signupFormComponent
//       .find(FormControl)
//       .filterWhere(n => n.props().name === 'password');

//     it('appears error state when password is too short', () => {
//       passwordInput.simulate('change', {
//         target: { name: 'password', value: 'short' }
//       });
//       expect(passwordInput.parent().props().validationState).toEqual('error');
//     });

//     it('appears success state when password is valid', () => {
//       passwordInput.simulate('change', {
//         target: { name: 'password', value: 'strongPassword' }
//       });
//       expect(passwordInput.parent().props().validationState).toEqual('success');
//     });
//   });

//   describe('when the passwords match', () => {
//     it('appears success class', () => {
//       const passwordInput = signupFormComponent
//         .find(FormControl)
//         .filterWhere(n => n.props().name === 'password');
//       const passwordConfirmationInput = signupFormComponent
//         .find(FormControl)
//         .filterWhere(n => n.props().name === 'passwordConfirmation');

//       passwordInput.simulate('change', {
//         target: { name: 'password', value: 'superSecurityPassword' }
//       });
//       passwordConfirmationInput.simulate('change', {
//         target: { name: 'passwordConfirmation', value: 'superSecurityPassword' }
//       });

//       expect(passwordConfirmationInput.parent().props().validationState).toEqual('success');
//       expect(passwordInput.value).toEqual(passwordConfirmationInput.value);
//     });
//   });
// });
