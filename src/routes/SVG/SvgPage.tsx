import React from "react";
import * as Style from "./SvgPage.style";
import useToggle from "@hooks/use-toggle";
import { gsap } from "gsap/gsap-core";

const paths = {
  step1: {
    unfilled: "M 0 100 V 100 Q 50 100 100 100 V 100 z",
    inBetween: {
      curve1: "M 0 100 V 50 Q 50 0 100 50 V 100 z",
      curve2: "M 0 100 V 50 Q 50 100 100 50 V 100 z",
    },
    filled: "M 0 100 V 0 Q 50 0 100 0 V 100 z",
  },
  step2: {
    filled: "M 0 0 V 100 Q 50 100 100 100 V 0 z",
    inBetween: {
      curve1: "M 0 0 V 50 Q 50 0 100 50 V 0 z",
      curve2: "M 0 0 V 50 Q 50 100 100 50 V 0 z",
    },
    unfilled: "M 0 0 V 0 Q 50 0 100 0 V 0 z",
  },
};

function SvgPage() {
  const [isAnimating, toggleAnimating] = useToggle(false);
  const [page, setPage] = React.useState<1 | 2>(1);
  const overlayPath = React.useRef<SVGPathElement>(null);

  function reveal() {
    if (isAnimating) return;
    toggleAnimating();

    gsap
      .timeline(overlayPath.current, {
        onComplete: () => toggleAnimating(),
      })
      .set(overlayPath.current, { attr: { d: paths.step1.unfilled } })
      .to(
        overlayPath.current,
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: paths.step1.inBetween.curve1 },
        },
        0
      )
      .to(overlayPath.current, {
        duration: 0.2,
        ease: "power1",
        attr: { d: paths.step1.filled },
        onComplete: () => switchPage(),
      })

      .set(overlayPath.current, { attr: { d: paths.step2.filled } })
      .to(overlayPath.current, {
        duration: 0.2,
        ease: "sine.in",
        attr: { d: paths.step2.inBetween.curve1 },
      })
      .to(overlayPath.current, {
        duration: 1,
        ease: "power4",
        attr: { d: paths.step2.unfilled },
      });
  }

  function unreveal() {
    if (!isAnimating) return;
    toggleAnimating();

    gsap
      .timeline(overlayPath.current, {
        onComplete: () => toggleAnimating(),
      })
      .set(overlayPath.current, {
        attr: { d: paths.step2.unfilled },
      })
      .to(
        overlayPath.current,
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: paths.step2.inBetween.curve2 },
        },
        0
      )
      .to(overlayPath.current, {
        duration: 0.2,
        ease: "power1",
        attr: { d: paths.step2.filled },
        onComplete: () => switchPage(),
      })
      // now reveal
      .set(overlayPath.current, {
        attr: { d: paths.step1.filled },
      })
      .to(overlayPath.current, {
        duration: 0.2,
        ease: "sine.in",
        attr: { d: paths.step1.inBetween.curve2 },
      })
      .to(overlayPath.current, {
        duration: 1,
        ease: "power4",
        attr: { d: paths.step1.unfilled },
      });
  }

  function switchPage() {
    if (page === 2) {
      setPage(() => 1);
    } else {
      setPage(() => 2);
    }
  }
  return (
    <Style.Body>
      <Style.Main>
        <Style.StartView $page={page}>
          <Style.Button onClick={() => reveal()}>Open</Style.Button>
        </Style.StartView>

        <Style.LandingView $page={page}>
          <Style.Button onClick={() => unreveal()}>Close</Style.Button>
        </Style.LandingView>
        <Style.Svg
          className="overlay"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            ref={overlayPath}
            className="overlay__path"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </Style.Svg>
      </Style.Main>
    </Style.Body>
  );
}

export default SvgPage;
