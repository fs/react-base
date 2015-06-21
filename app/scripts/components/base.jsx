import React from 'react';

export default class BaseComponent extends React.Component {
  bindMethods(...methods) {
    methods.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }
}
