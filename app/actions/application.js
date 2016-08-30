import Alt from 'altFlux';
import { createActions } from 'alt-utils/lib/decorators';

@createActions(Alt)
export default class ApplicationActions {
  openModal(data) {
    return data;
  }

  closeModal(data = {}) {
    return data;
  }
}
