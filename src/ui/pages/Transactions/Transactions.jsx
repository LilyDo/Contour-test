import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List, Typography } from 'antd';
import { ACC_ID_URL_PARAM } from '../../../lib/routing/paths';
import { ListContainer } from '../Home/Home.styles';
import { useParams, useHistory } from 'react-router-dom';
const { Link } = Typography;

const Transactions = () => {
  const [transactionList, setTransactionList] = useState([]);

  const history = useHistory();

  const params = useParams();
  const accIdUrlParam = params[ACC_ID_URL_PARAM.substring(1)];

  useEffect(() => {
    if (accIdUrlParam > 0) {
      axios
        .get(`/data/transactions-${accIdUrlParam}.json`)
        .then(function (response) {
          setTransactionList(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [accIdUrlParam]);

  return (
    <>
      <Link href='/'>
        {transactionList?.length > 0 && <div>{transactionList[0].from}</div>}
      </Link>
      <ListContainer
        rowKey='id'
        itemLayout='horizontal'
        dataSource={transactionList}
        renderItem={(tran) => (
          <List.Item.Meta
            title={
              <a href={`/${accIdUrlParam}/transactions/${tran.id}`}>
                {tran.id} - {tran.transaction_date} - {tran.amount}
              </a>
            }
          />
        )}
      />
      <Button onClick={() => history.goBack()} type='secondary'>
        Back
      </Button>
    </>
  );
};

export default Transactions;
