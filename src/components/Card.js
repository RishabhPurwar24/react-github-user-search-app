import React from "react";

const Card = ({ userData }) => {
  return (
    <div>
      <header>
        <div className="card-image-container">
          <img src={userData.avatar_url} alt="Avatar" />
        </div>
        <div className="header">
          <h1>{userData.name}</h1>
          <h4>@{userData.login}</h4>
          <h4>Joined {userData.created_at}</h4>
        </div>
      </header>
      <p>{userData.bio}</p>

      <div className="card-info-container">
        <ul>
          <li>{userData.public_repos}</li>
          <li>{userData.followers}</li>
          <li>{userData.following}</li>
        </ul>

        <ul>
          <li>{userData.location}</li>
          <li>{userData.blog}</li>
          <li>@{userData.twitter_username}</li>
          <li>{userData.company}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
