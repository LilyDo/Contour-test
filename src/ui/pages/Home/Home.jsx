import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Avatar } from 'antd';
import { WalletTwoTone } from '@ant-design/icons/lib/icons';
import { ListContainer } from './Home.styles';

const Home = () => {
  const [accountList, setAccountList] = useState([]);

  // get account list
  useEffect(() => {
    axios
      .get('/data/accounts.json')
      .then(function (response) {
        setAccountList(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      {accountList && accountList.length > 0 && (
        <ListContainer
          itemLayout='horizontal'
          dataSource={accountList}
          renderItem={(account) => (
            <List.Item.Meta
              avatar={<Avatar src={<WalletTwoTone />} />}
              title={
                <a href={`/${account.id}/transactions`}>
                  {account.account_name} - {account.account_number}
                  {account.is_active ? '' : ' (inactive)'}
                </a>
              }
              description={`${account.balance} ${account.currency}`}
            />
          )}
        />
      )}
    </>
  );
};

export default Home;
