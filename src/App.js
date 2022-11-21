import { useEffect, useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import "./App.scss";

const RTGTransition = ({ rtgT }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(rtgT);
  }, [rtgT]);
  const duration = 2000;

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateY(100%)",
  };

  const transitionStyles = {
    entering: { transform: "translateY(-260%)" },
    entered: { transform: "translateY(-260%)" },
    exiting: { transform: "translateY(0%)" },
    exited: { transform: "translateY(0%)" },
  };

  return (
    <div>
      <Transition in={menuOpen} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className="rtg-transition"
          >
            ⭐⭐⭐⭐⭐
          </div>
        )}
      </Transition>
    </div>
  );
};

const RTGTransition1 = ({ rtgT1 }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(rtgT1);
  }, [rtgT1]);
  const duration = 2000;

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateY(100%)",
  };

  const transitionStyles = {
    entering: { transform: "translateX(0)" },
    entered: { transform: "translateX(0)" },
    exiting: { transform: "translateX(-100%)" },
    exited: { transform: "translateX(-100%)" },
  };

  return (
    <div>
      <Transition in={menuOpen} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className="rtg-transition"
          >
            <h1>KYVIO LUXURY PACK</h1>
          </div>
        )}
      </Transition>
    </div>
  );
};

const RTGCSSTransition = ({ cssT }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const duration = 2000;

  useEffect(() => {
    setMenuOpen(cssT);
  }, [cssT]);

  return (
    <div>
      <CSSTransition
        in={menuOpen}
        timeout={duration}
        classNames="css-transition"
        unmountOnExit
      >
        <div>
          <h1 className="menu card__summary" title="CSSTransition">
            CONGRATULATIONS
          </h1>
          <p>You have unlocked</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export const App = () => {
  const [cssT, setCsst] = useState(false);
  const [rtgT, setRtgT] = useState(true);
  const [rtgT1, setRtgT1] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRtgT(false);
    }, 3000);
    setTimeout(() => {
      setCsst(true);
    }, 5000);
    setTimeout(() => {
      setRtgT1(true);
    }, 8000);
  }, []);

  return (
    <div className="container">
      <RTGTransition rtgT={rtgT} />
      <RTGCSSTransition cssT={cssT} />
      <RTGTransition1 rtgT1={rtgT1} />
    </div>
  );
};
