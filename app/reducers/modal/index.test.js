import reducer from './';

describe('Modal reducer', () => {
  let initialState;
  let state;
  let actionType;
  let payload;

  const callReducer = () => reducer(state, { type: actionType, payload });

  beforeEach(() => {
    initialState = {
      isOpen: false,
      modalName: '',
      modalOptions: {}
    };
  });

  it('returns initial state', () => {
    expect(callReducer()).toEqual(initialState);
  });

  context('when state is present', () => {
    beforeEach(() => {
      state = initialState;

      payload = {
        name: 'Awesome Modal',
        someOption: 'Some option value'
      };
    });

    describe('OPEN_MODAL', () => {
      beforeEach(() => {
        actionType = 'OPEN_MODAL';
      });

      it('returns new state', () => {
        expect(callReducer()).toEqual({
          isOpen: true,
          modalName: 'Awesome Modal',
          modalOptions: {
            someOption: 'Some option value'
          }
        });
      });
    });

    describe('CLOSE_MODAL', () => {
      beforeEach(() => {
        actionType = 'CLOSE_MODAL';

        state = {
          isOpen: true,
          modalName: 'Awesome Modal',
          modalOptions: {
            someOption: 'Some option value'
          }
        };
      });

      it('returns initial state', () => {
        expect(callReducer()).toEqual({
          isOpen: false,
          modalName: '',
          modalOptions: {}
        });
      });
    });
  });
});
