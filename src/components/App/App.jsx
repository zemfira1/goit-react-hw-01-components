import css from "./App.module.css"
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json'
import transactions from 'transactions.json'

import { Profile } from "components/Profile";
import { Statistics } from "../Statistics";
import { FriendList } from "../FriendList";
import { TransactionHistory } from "../TransactionHistory";

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="UPLOAD STATS"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
