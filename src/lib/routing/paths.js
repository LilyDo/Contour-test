// URL param
export const TRAN_ID_URL_PARAM = ':tranId';
export const ACC_ID_URL_PARAM = ':accId';

/**
 * === APP PATHS ===
 *
 * Top level application routes leading to specific modules.
 * e.g. Home page, Task module ...
 */
export const PATHS = {
  ROOT: '/',

  TRANSACTIONS_PATH: `/${ACC_ID_URL_PARAM}/transactions`,

  TRANSACTION_DETAILS_PATH: `/${ACC_ID_URL_PARAM}/transactions/${TRAN_ID_URL_PARAM}`,
};
