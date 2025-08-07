import "./App.css";

function SocialLinks() {
  return (
    <main>
      <div className="card">
        <img src="avatar-jessica.jpeg" alt="Jessica Randall" />
        <h2>Jessica Randall</h2>
        <h4>London, United Kingdom</h4>
        <p>"Front-end developer and avid reader"</p>

        <div className="btns">
          <a href="https://github.com">Github</a>
          <a href="https://www.frontendmentor.io">Frontend Mentor</a>
          <a href="https://www.linkedin.com">LinkedIn</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>
      </div>
    </main>
  );
}

export default SocialLinks;
