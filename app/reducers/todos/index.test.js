import reducer from './';

describe('Todos reducer', () => {
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
      id: 1,
      name: 'Awesome Todo',
    };
  });

  describe('LOAD_TODOS', () => {
    beforeEach(() => {
      actionType = 'LOAD_TODOS';
    });

    it('returns new state', () => {
      expect(callReducer()).toEqual({
        someKey: 'some value',
        isLoading: true
      });
    });
  });

  describe('SET_TODOS', () => {
    beforeEach(() => {
      actionType = 'SET_TODOS';

      state = {
        someKey: 'some value',
        isLoading: true
      };

      payload = [{
        id: 1,
        name: 'Awesome Todo'
      }];
    });

    it('returns new state', () => {
      expect(callReducer()).toEqual({
        someKey: 'some value',
        isLoading: false,
        todos: payload
      });
    });
  });

  describe('ADD_TODO', () => {
    beforeEach(() => {
      actionType = 'ADD_TODO';

      state = {
        someKey: 'some value',
        todos: [{
          id: 2,
          name: 'Another Todo'
        }]
      };
    });

    it('returns new state', () => {
      expect(callReducer()).toEqual({
        someKey: 'some value',
        todos: [{
          id: 2,
          name: 'Another Todo'
        }, {
          id: 1,
          name: 'Awesome Todo'
        }]
      });
    });
  });

  describe('TOGGLE_TODO', () => {
    beforeEach(() => {
      actionType = 'TOGGLE_TODO';

      state = {
        someKey: 'some value',
        todos: [{
          id: 1,
          name: 'Awesome Todo'
        }, {
          id: 2,
          name: 'Another Todo'
        }]
      };

      payload = {
        id: 1,
        name: 'Updated Todo'
      };
    });

    it('returns new state', () => {
      expect(callReducer()).toEqual({
        someKey: 'some value',
        todos: [{
          id: 1,
          name: 'Updated Todo'
        }, {
          id: 2,
          name: 'Another Todo'
        }]
      });
    });
  });

  describe('REMOVE_TODO', () => {
    beforeEach(() => {
      actionType = 'REMOVE_TODO';

      state = {
        someKey: 'some value',
        todos: [{
          id: 1,
          name: 'Awesome Todo'
        }, {
          id: 2,
          name: 'Another Todo'
        }]
      };

      payload = {
        id: 1,
        name: 'Awesome Todo'
      };
    });

    it('returns new state', () => {
      expect(callReducer()).toEqual({
        someKey: 'some value',
        todos: [{
          id: 2,
          name: 'Another Todo'
        }]
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
        todos: []
      });
    });
  });
});
