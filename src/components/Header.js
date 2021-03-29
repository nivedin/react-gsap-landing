import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import gsap from "gsap";

let tl = gsap.timeline();

function Header({ dimension, history }) {
  const [menuState, setMenustate] = useState({ menuOpened: false });

  useEffect(() => {
    history.listen(() => {
      setMenustate({
        menuOpened: false,
      });
    });

    if (menuState.menuOpened === true) {
      tl.to("body", { duration: 0.01, css: { overflow: "hidden" } });

      tl.to(".App", {
        duration: 1,
        y: dimension.width <= 654 ? "90vh" : "70vh",
        ease: "expo.inOut",
      })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to(".hamburger-menu-close", {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: "expo.inOut",
      })
        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "50% 0",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", {
          css: {
            display: "none",
          },
        })
        .to("body", {
          css: {
            overflow: "auto",
          },
        });
    }
  }, [menuState.menuOpened]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">AGENCY.</NavLink>
          </div>
          <div className="nav-toggle">
            <div
              className="hamburger-menu"
              onClick={() => setMenustate({ menuOpened: true })}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenustate({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
