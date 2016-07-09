import Alt from 'alt_flux';
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
