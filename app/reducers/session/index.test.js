import reducer from './';

jest.mock('services/sessionStorage', () => ({
  loggedIn: () => true,
  currentUser: () => ({ id: 1 })
}));

describe('Session reducer', () => {
  let state;
  let actionType;
  let payload;

  const callReducer = () => reducer(state, { type: actionType, payload });

  beforeEach(() => {
    state = {
      someKey: 'some value',
      isLoading: false
    };

    payload = {
      name: 'User name',
    };
  });

  describe('LOAD_DATA', () => {
    beforeEach(() => {
      actionType = 'LOAD_DATA';
    });

    it('returns new state', () => {
      expect(callReducer()).toEqual({
        someKey: 'some value',
        isLoading: true
      });
    });
  });

  describe('SET_USER', () => {
    beforeEach(() => {
      actionType = 'SET_USER';
    });

    it('returns new state', () => {
      expect(callReducer()).toEqual({
        isLoading: false,
        loggedIn: true,
        currentUser: {
          name: 'User name'
        }
      });
    });
  });

  describe('REMOVE_USER', () => {
    beforeEach(() => {
      actionType = 'REMOVE_USER';
    });

    it('returns new state', () => {
      expect(callReducer()).toEqual({
        isLoading: false,
        loggedIn: false,
        currentUser: {}
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
        isLoading: false,
        loggedIn: true,
        currentUser: {
          id: 1
        }
      });
    });
  });
});
