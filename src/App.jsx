import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import { Profile } from './components/profile/Profile';
import { FriendList } from './components/friend-list/FriendList';
import { TransactionHistory } from './components/transaction/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
