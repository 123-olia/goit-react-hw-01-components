import React from "react";
import ProfileCard from "./components/Profile/Profile";
import user from "./data/user.json";

import Stats from "./components/Statistics/Statistics";
import stats_data from "./data/statistical-data.json";

import FriendList from "./components/FriendList/FriendList";
import friends_data from "./data/friendList-data.json";

import TransactionHistory from "./components/TransHistory/TransHistory";
import trans_data from "./data/transactions.json";

function App() {
  return (
    <div className="App">
      <ProfileCard
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title="Upload stats" stats={stats_data}></Stats>
      <FriendList friends={friends_data}></FriendList>
      <TransactionHistory items={trans_data}></TransactionHistory>,
    </div>
  );
}

export default App;
