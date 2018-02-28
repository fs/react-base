import reducer from './';

describe('Todos reducer', () => {
  let initialState;
  let state;
  let actionType;
  let payload;

  const callReducer = () => reducer(state, { type: actionType, payload });

  beforeEach(() => {
    initialState = {
      isLoading: false,
      todos: [],
    };
  });

  it('returns initial state', () => {
    expect(callReducer()).toEqual(initialState);
  });

  context('when state is present', () => {
    beforeEach(() => {
      state = initialState;
    });

    describe('LOAD_TODOS', () => {
      beforeEach(() => {
        actionType = 'LOAD_TODOS';
      });

      it('returns new state', () => {
        expect(callReducer()).toEqual({
          isLoading: true,
          todos: [],
        });
      });
    });

    describe('SET_TODOS', () => {
      beforeEach(() => {
        actionType = 'SET_TODOS';

        state.isLoading = true;

        payload = [{
          id: 1,
          name: 'Awesome Todo',
        }];
      });

      it('returns new state', () => {
        expect(callReducer()).toEqual({
          isLoading: false,
          todos: [{
            id: 1,
            name: 'Awesome Todo',
          }],
        });
      });
    });

    describe('ADD_TODO', () => {
      beforeEach(() => {
        actionType = 'ADD_TODO';

        state.todos = [{
          id: 2,
          name: 'Another Todo',
        }];

        payload = {
          id: 1,
          name: 'Awesome Todo',
        };
      });

      it('returns new state', () => {
        expect(callReducer()).toEqual({
          isLoading: false,
          todos: [{
            id: 2,
            name: 'Another Todo',
          }, {
            id: 1,
            name: 'Awesome Todo',
          }],
        });
      });
    });

    describe('TOGGLE_TODO', () => {
      beforeEach(() => {
        actionType = 'TOGGLE_TODO';

        state.todos = [{
          id: 1,
          name: 'Awesome Todo',
        }, {
          id: 2,
          name: 'Another Todo',
        }];

        payload = {
          id: 1,
          name: 'Updated Todo',
        };
      });

      it('returns new state', () => {
        expect(callReducer()).toEqual({
          isLoading: false,
          todos: [{
            id: 1,
            name: 'Updated Todo',
          }, {
            id: 2,
            name: 'Another Todo',
          }],
        });
      });
    });

    describe('REMOVE_TODO', () => {
      beforeEach(() => {
        actionType = 'REMOVE_TODO';

        state.todos = [{
          id: 1,
          name: 'Awesome Todo',
        }, {
          id: 2,
          name: 'Another Todo',
        }];

        payload = {
          id: 1,
          name: 'Awesome Todo',
        };
      });

      it('returns new state', () => {
        expect(callReducer()).toEqual({
          isLoading: false,
          todos: [{
            id: 2,
            name: 'Another Todo',
          }],
        });
      });
    });
  });
});
