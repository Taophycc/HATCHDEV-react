import logo from "./logo.svg";
import "./App.css";

function SocialLinks() {
  return (
    <main>
      <div className="card">
        <img src="avatar-jessica.jpeg" />
        <h2>Jessica Randall</h2>
        <h4>London, United Kingdom</h4>
        <p>"Front-end developer and avid reader"</p>

        <div className="btns">
          <a href="#">Github</a>
          <a href="#">Frontend Mentor</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </main>
  );
}

export default SocialLinks;
