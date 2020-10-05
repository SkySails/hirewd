import { Button } from "@Components/Common";
import styled from "styled-components";

export default function Home() {
  return (
    <App>
      <Promotion>
        Sign up now to get 50% off! ️🎉
        <Button light transparent>
          Sign up
        </Button>
      </Promotion>
      <Header>
        <div className="max-width">
          <Navigation>
            <img id="logo" src="img/logo.svg" />
            <nav id="links">
              <a href="#student">For Students</a>
              <a href="#client">For Clients</a>
            </nav>
            <div id="auth-buttons">
              <Button transparent>Log in</Button>
              <Button>Sign up</Button>
            </div>
          </Navigation>
        </div>
      </Header>
      <Main>
        <div className="max-width">
          <section id="intro">
            <div className="content text">
              <h1>
                Students. <br /> Web developers. <br />{" "}
                <span>Cheap websites.</span>
                Does your business need a website? <br /> Do you have an
                IT-project that needs a helping hand? <br />{" "}
                <span>Hire web developers in training!</span>
              </h1>
            </div>
            <div className="content image">
              <img src="img/hero.svg" />
            </div>
          </section>
        </div>
      </Main>
    </App>
  );
}

const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .max-width {
    width: 100%;
    max-width: 1230px;
  }
`;

const Promotion = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background: #34d1bf;
  color: white;
  font-family: "Inter";

  & > * {
    margin: 0 20px;
  }
`;

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
`;

const Navigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 430px;
  @media (max-width: 600px) {
    grid-template-columns: 130px 1fr;
  }
  grid-gap: 10px 0px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Logo Navigation"
    "MobileNavigation MobileNavigation";
  padding: 10px;
  height: 60px;

  #logo {
    grid-area: Logo;
    height: 3em;
  }

  #links {
    grid-area: Navigation;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: 200px;

    a {
      color: #3454d1;
      font-weight: bold;

      &:not(:first-child) {
        margin-left: 25px;
      }

      &:hover {
        /* background: #143bd1; */
        color: #34d1bf;
      }
    }

    @media (max-width: 600px) {
      grid-area: MobileNavigation;
      justify-self: center;
      width: calc(100% + 20px);
      height: 50px;
      margin: 0;
      padding: 0 10%;
      background: #3454d1;
      justify-content: space-evenly;

      a {
        color: white;
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  #auth-buttons {
    grid-area: Navigation;
    margin-left: auto;
    align-self: center;

    button:first-of-type {
      margin-right: 10px;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap-reverse;
    height: 100%;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  section {
    display: flex;
    align-items: center;
  }

  #intro {
    height: calc(100vh - 120px);
    padding-top: 30px;
    @media (max-width: 1100px) {
      flex-direction: column;
    }

    .content.text {
      font-size: 2.2em;
      font-size: 1.2em;
      h1 {
        color: #3454d1;
      }
      span {
        font-size: 1.2em;
        font-size: 2em;
        color: #34d1bf;
      }
    }

    .content.image {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      img {
        width: 80%;
      }
    }
  }
`;
