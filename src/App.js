import "./App.css";

function SocialLinks() {
  return (
    <main>
      <div className="card">
        <img
          src="https://pbs.twimg.com/profile_images/1864269288309239808/D-3SqVv0_400x400.jpg"
          alt="Taofeek Kassim"
        />
        <h2>Taofeek Kassim</h2>
        <h4>San Francisco, CA </h4>
        <p>"Software Engineer and avid reader"</p>

        <div className="btns">
          <a href="https://github.com/Taophycc">Github</a>
          <a href="https://www.frontendmentor.io/profile/Taophycc">
            Frontend Mentor
          </a>
          <a href="https://www.linkedin.com/in/taofeek-kassim/">LinkedIn</a>
          <a href="https://twitter.com/taophyc_">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>
      </div>
    </main>
  );
}

export default SocialLinks;
