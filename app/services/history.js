import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import qs from 'qs';

const createAppHistory = useRouterHistory(createBrowserHistory);

export const appHistory = createAppHistory({
  parseQueryString: qs.parse,
  stringifyQuery: qs.stringify
});
