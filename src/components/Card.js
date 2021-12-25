import React from "react";

const Card = ({ userData }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={userData.avatar_url} alt="Avatar" />
      </div>

      <div className="card-header">
        <h1>{userData.name}</h1>
        <h4>
          <a href={`https://github.com/${userData.login}`} target={"_blank"}>
            @{userData.login}
          </a>
        </h4>
        <p>This profile has no bio</p>
      </div>
      <div>
        <h4>Joined {userData.created_at}</h4>
      </div>

      {/* <p>{userData.bio}</p> */}

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
