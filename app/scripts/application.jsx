import React from 'react';
import Router from 'react-router';
import Routes from 'scripts/routers/main';
import emitter from 'scripts/emitters/emitter';

var { HistoryLocation } = Router;

Router.run(Routes, HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
  emitter.emit('route-change');
});
