import reducer from './';

jest.mock('services/sessionStorage', () => ({
  loggedIn: () => true,
  currentUser: () => ({ id: 1 })
}));

describe('Session reducer', () => {
  let initialState;
  let state;
  let actionType;
  let payload;

  const callReducer = () => reducer(state, { type: actionType, payload });

  beforeEach(() => {
    initialState = {
      isLoading: false,
      loggedIn: true,
      currentUser: { id: 1 }
    };
  });

  it('returns initial state', () => {
    expect(callReducer()).toEqual(initialState);
  });

  context('when state is present', () => {
    beforeEach(() => {
      state = initialState;
    });

    describe('LOAD_DATA', () => {
      beforeEach(() => {
        actionType = 'LOAD_DATA';
      });

      it('returns new state', () => {
        expect(callReducer()).toEqual({
          isLoading: true,
          loggedIn: true,
          currentUser: { id: 1 }
        });
      });
    });

    describe('SET_USER', () => {
      beforeEach(() => {
        actionType = 'SET_USER';

        state = {
          isLoading: true,
          loggedIn: false,
          currentUser: {},
        };

        payload = {
          name: 'User name',
        };
      });

      it('returns new state', () => {
        expect(callReducer()).toEqual({
          isLoading: false,
          loggedIn: true,
          currentUser: { name: 'User name' }
        });
      });
    });

    describe('REMOVE_USER', () => {
      beforeEach(() => {
        actionType = 'REMOVE_USER';

        state = {
          isLoading: true,
          loggedIn: true,
          currentUser: { name: 'User name' }
        };
      });

      it('returns new state', () => {
        expect(callReducer()).toEqual({
          isLoading: false,
          loggedIn: false,
          currentUser: {}
        });
      });
    });
  });
});
