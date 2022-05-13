import Home from '../../ui/pages/Home/Home';
import TransactionDetails from '../../ui/pages/TransactionDetails/TransactionDetails';
import Transactions from '../../ui/pages/Transactions/Transactions';
import { PATHS } from './paths';

export const ROUTES = [
  // ROOT - Account listing
  {
    path: PATHS.ROOT,
    exact: true,
    component: () => <Home />,
  },

  // TRANSACTIONS - Transaction listing
  {
    path: PATHS.TRANSACTIONS_PATH,
    exact: true,
    component: () => <Transactions />,
  },

  // TRANSACTION - Transaction details
  {
    path: PATHS.TRANSACTION_DETAILS_PATH,
    exact: true,
    component: () => <TransactionDetails />,
  },
];
