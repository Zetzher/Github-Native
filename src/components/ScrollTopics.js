import React from 'react';

import Overview from './Topics/Overview';
import Repositories from './Topics/Repositories';
import Followers from "./Topics/Followers";
import Following from "./Topics/Following";
import Starred from "./Topics/Starred";
import Packages from "./Topics/Packages";
import Projects from "./Topics/Projects";

const ScrollTopics = props => {
  const {topic, message, userRepos, followers, following, repoStarred, loginName} = props;
  
  return (
    <>
      {topic === "Overview" && <Overview message={message} />}
      {topic === `Repositories ${userRepos.length}` && <Repositories repos={userRepos} />}
      {topic === "following" && <Following users={following} />}
      {topic === "followers" && <Followers users={followers} />}
      {topic === "starred" && <Starred star={repoStarred} /> }
      {topic === "Packages" && <Packages />}
      {topic === "Projects" && <Projects userName={loginName} />}
    </>
  );
};

export default ScrollTopics;
