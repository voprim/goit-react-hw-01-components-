import { SocialProfile } from './SocialProfile/SocialProfile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from './SocialProfile/user.json';
import stats from './Statistics/data.json';
import upcomingFriends from './FriendList/friends.json';
import upcomingTransactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <SocialProfile
        key={userData.tag}
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <Statistics title="" stats={stats} />
      <FriendList friends={upcomingFriends} />
      <TransactionHistory items={upcomingTransactions} />
    </div>
  );
};

//<Statistics key={stats.id} stats={stats} />