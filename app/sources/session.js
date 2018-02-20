import api from 'services/api';

export default {
  urlRoot: '/session',
  async signin(user) {
    return (
      await api.post(this.urlRoot, user, { withoutAuth: true })
    ).data;
  },
  async logout({ id }) {
    return api.delete(`${this.urlRoot}/${id}`, { withoutAuth: true });
  },
};
