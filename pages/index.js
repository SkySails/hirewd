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
                Need a website? <br /> Need it cheap?
                <br /> <span>Hire a student!</span>
              </h1>
              <p>Dive in and start realising your dreams.</p>
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

      <section className="mission">
        <h1>Our mission</h1>
        <div className="text-problem">
          <h2>The problem 🤔</h2>
          <div className="flex-container">
            <p>
              The level of competence in the world of IT is always rising, and
              the skill levels of students are always getting better. Employed
              developers rarely have time to meet the demands from the general
              market, which results in many of the freat website ideas never
              becoming reality
            </p>
            <img className="ladysign" src="img/ladysign.svg " />
          </div>
        </div>

        <div className="text-solution">
          <img
            className="content-man"
            src="img/drawkit-content-man-colour.svg"
          />
          <h1>Our solution!🎉</h1>
          <p>
            undraw_community_8nwl Let’s invite students to take on the projects
            that no one else can take! By providing a platform for clients and
            students alike, we can share the workload evenly giving those with
            free time the opportunity to work extra in the field they’re
            studying.
          </p>
        </div>
        <div className="text-result">
          <img className="community" src="img/undraw_community_8nwl.svg" />
          <h2>The result 🏁</h2>
          <p>
            Hirewd ([ˈhaɪəd]) s a community driven portal, designed to match
            clients up with competent and attentive student-level developers. By
            deferring projects and requests to HireWD, everyone can get their
            websites built.
          </p>
        </div>
      </section>
    </div>
  );
}
