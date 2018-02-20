import api from 'services/api';

export default {
  urlRoot: '/todos',
  async get() {
    return (
      await api.get(this.urlRoot)
    ).data;
  },
  async create(todo) {
    return (
      await api.post(this.urlRoot, todo)
    ).data;
  },
  async update(todo) {
    return api.patch(`${this.urlRoot}/${todo.id}`, todo);
  },
  async delete({ id }) {
    return api.delete(`${this.urlRoot}/${id}`);
  },
};
