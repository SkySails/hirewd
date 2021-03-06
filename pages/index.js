import { Button } from "@Components/Common";
import { Arrow } from "@Icons";

export default function Home() {
  return (
    <div id="app">
      <div className="promotion">
        Sign up now to get 50% off! ️🎉
        <Button light transparent>
          Sign up
        </Button>
      </div>
      <header>
        <div className="max-width nav-container">
          <img id="logo" src="img/logo.svg" />
          <nav id="links">
            <a href="#student">For Students</a>
            <a href="#client">For Clients</a>
          </nav>
          <div id="auth-buttons">
            <Button transparent>Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-width">
          <section id="intro">
            <div className="content text">
              <h1>
                Need a website? <br /> Need it cheap?<br />{" "}
                <span>Hire a student!</span>
              </h1>
              <p>
                Dive in and start realising your dreams.
              </p>
              <div className="cta-container">
                <button className="cta primary">
                  <span>Get started</span> <Arrow />
                </button>
                <button className="cta secondary">Read more</button>
              </div>
            </div>
            <div className="content image">
              <img src="img/hero.svg" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
