export const ModalStoreMixin = {
  showModal: false,

  show() {
    this.showModal = true;
  },

  hide() {
    this.showModal = false;
  },

  reset() {}
};
