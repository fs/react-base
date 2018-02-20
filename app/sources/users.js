import api from 'services/api';

export default {
  urlRoot: '/users',
  async create(user) {
    return (
      await api.post(this.urlRoot, user, { withoutAuth: true })
    ).data;
  },
};
