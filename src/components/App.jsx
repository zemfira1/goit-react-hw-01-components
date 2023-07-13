import css from "./App/App.module.css"
import user from '../user.json';
import data from '../data.json';

import { Profile } from "components/Profile/Profile";
import { Statistics } from "./Statistics/Statistics";


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
    </div>
  );
};
