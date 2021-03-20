import React, {useEffect} from 'react';

import Overview from './Topics/Overview';
import Repositories from './Topics/Repositories';
import Followers from "./Topics/Followers";
import Following from "./Topics/Following";
import Starred from "./Topics/Starred";
import Packages from "./Topics/Packages";

const ScrollTopics = props => {
  const {topic, message, userRepos, followers, following, repoStarred} = props;
  
console.log(topic, 'topic')
  return (
    <>
      {topic === "Overview" && <Overview message={message} />}
      {topic === `Repositories ${userRepos.length}` && <Repositories repos={userRepos} />}
      {topic === "following" && <Following users={following} />}
      {topic === "followers" && <Followers users={followers} />}
      {topic === "starred" && <Starred star={repoStarred} /> }
      {topic === "Packages" && <Packages />}
    </>
  );
};

export default ScrollTopics;
