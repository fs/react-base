import reducer from './';

describe('Modal reducer', () => {
  let state;
  let actionType;
  let payload;

  const callReducer = () => reducer(state, { type: actionType, payload });

  beforeEach(() => {
    state = {
      someKey: 'some value'
    };

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
    });

    it('returns initial state', () => {
      expect(callReducer()).toEqual({
        isOpen: false,
        modalName: '',
        modalOptions: {}
      });
    });
  });

  describe('ANOTHER_ACTION_TYPE', () => {
    beforeEach(() => {
      actionType = 'ANOTHER_ACTION_TYPE';
    });

    it('returns current state', () => {
      expect(callReducer()).toEqual(state);
    });
  });

  context('when state is undefined', () => {
    beforeEach(() => {
      state = undefined;
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
