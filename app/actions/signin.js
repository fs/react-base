import Alt from 'altFlux';
import { createActions } from 'alt-utils/lib/decorators';

@createActions(Alt)
export default class SigninActions {
  setValue(name, value) {
    return { name, value };
  }
}
