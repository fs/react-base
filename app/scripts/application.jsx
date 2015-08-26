import React from 'react';
import Router from 'react-router';
import Routes from 'scripts/routers/main';
import RouterActions from 'scripts/actions/router';

const { HistoryLocation } = Router;

Router.run(Routes, HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
  RouterActions.routeChange();
});
