import css from "./App/App.module.css"
import  user from '../user.json';

import { Profile } from "components/Profile/Profile";


export const App = () => {
  return (
    <div className={css.title}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
