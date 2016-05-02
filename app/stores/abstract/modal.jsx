export default class ModalStore {
  constructor() {
    this.showModal = false;
  }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }

  reset() {}
}
