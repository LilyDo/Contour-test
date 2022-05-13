import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, Tag, Typography } from 'antd';
import { useParams, useHistory } from 'react-router-dom';
import {
  ACC_ID_URL_PARAM,
  TRAN_ID_URL_PARAM,
} from '../../../lib/routing/paths';

const { Link } = Typography;

const TransactionDetails = () => {
  const [transactionDetails, setTransactionDetails] = useState([]);

  const history = useHistory();

  // url params
  const params = useParams();
  const accIdUrlParam = params[ACC_ID_URL_PARAM.substring(1)];
  const tranIdUrlParam = params[TRAN_ID_URL_PARAM.substring(1)];

  // get transactions list
  useEffect(() => {
    if (accIdUrlParam && tranIdUrlParam) {
      axios
        .get(`/data/transactions-${accIdUrlParam}.json`)
        .then(function (response) {
          const transactionList = response.data;

          const tranDetails = transactionList.filter(
            (tran) => tran.id === parseInt(tranIdUrlParam, 10)
          );
          setTransactionDetails(tranDetails);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [accIdUrlParam, tranIdUrlParam]);

  const columns = [
    {
      title: 'Transaction',
      dataIndex: 'id',
    },
    {
      title: 'Account',
      dataIndex: 'from',
      render: (from) => (
        <Link to={''} onClick={() => history.goBack()}>
          {from}
        </Link>
      ),
    },
    {
      title: 'Transaction Date',
      dataIndex: 'transaction_date',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },

    {
      title: 'Status',
      dataIndex: 'transaction_processed',
      render: (transaction_processed) => {
        return transaction_processed ? (
          <Tag color={'green'}>Success</Tag>
        ) : (
          <Tag color={'volcano'}>Not success</Tag>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={transactionDetails || []}
        pagination={false}
      />
      <Button onClick={() => history.goBack()} type='secondary'>
        Back
      </Button>
    </div>
  );
};

export default TransactionDetails;
