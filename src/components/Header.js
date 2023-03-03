import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Header = () => {

  const handleAuth = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log("result", result);
    })
    .catch(err => console.error(err));
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney" />
      </Logo>
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="home" />
          <span>Home</span>
        </a>
        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>Watchlist</span>
        </a>
        <a href="/">
          <img src="/images/original-icon.svg" alt="originals" />
          <span>Originals</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt="movies" />
          <span>Movies</span>
        </a>
        <a href="/">
          <img src="/images/series-icon.svg" alt="series" />
          <span>Series</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #090b13;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 7px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    letter-spacing: 4px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        content: "";
        opacity: 0;
        position: absolute;
        height: 2px;
        left: 0px;
        right: 0px;
        bottom: -6px;
        /* top: 0; */
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        /* visibility: hidden; */
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
transition: all 200ms ease-out 0s;
cursor: pointer;

&:hover {
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
}

`
export default Header;
