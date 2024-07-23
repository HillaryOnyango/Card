import profilePic from "./assets/person-1.jpeg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"> </img>
      <h2 className="card-title">Hillary Onyango Amolo</h2>
      <p className="card-text">I am a web developer and I also love farming</p>
    </div>
  );
}

export default Card