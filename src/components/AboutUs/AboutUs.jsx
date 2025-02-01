import "../AboutUs/AboutUs.css";
import logo from "../../images/sflogo.png";

function AboutUs() {
  return (
    <div className="about-us__bio-container">
      <div className="about-us__bio-section">
        <h1 className="about-us__bio-title">
          Your Fitness Directory For Success
        </h1>
        <p className="about-us__bio">
          Created by Shelton Brockett, Solid Foundation was born from the need
          to simplify fitness for beginners with busy lives. Inspired by
          Shelton’s own experiences of balancing work, health, and daily
          obligations, the app was designed as a clear and effective tool to
          help users build lasting fitness habits.
          <br />
          <br />
          Targeting those new to exercise or restarting their journey, Solid
          Foundation offers a fitness directory that filters workouts by
          equipment and body part. With GIF demonstrations and straightforward
          instructions, users can feel confident in their movements without the
          confusion or overwhelm of traditional fitness apps.
          <br />
          <br />
          The mission is simple: empower users to take small, sustainable steps
          toward their goals by eliminating barriers and focusing on ease and
          education. With Solid Foundation, fitness becomes accessible,
          approachable, and built to last—because every great journey starts
          with a solid foundation.
        </p>
        <img className="about-us__logo" src={logo} alt="logo"></img>
      </div>
    </div>
  );
}

export default AboutUs;
