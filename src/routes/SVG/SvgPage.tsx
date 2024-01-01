import React from "react";
import * as Style from "./SvgPage.style";
import useToggle from "@hooks/use-toggle";
import { gsap } from "gsap/gsap-core";

const paths = {
  step1: {
    to: "M 0 100 V 100 Q 50 100 100 100 V 100 z",
  },
  step2: {
    from: "M1252.27 0C1343.5 0 1402.5 54.562 1440 37.062V107.562H0V72.5359C73.125 72.5359 177.891 27.2908 302.344 5.06201C426.797 -17.1668 506.25 55.5719 662.344 69.6111C818.438 83.6503 847 -1.93799 949 29.062C1056.85 61.8398 1131.18 0 1252.27 0Z",

    one: "M1252.27 22C1329.5 54.9998 1406 50 1440 62.5V110.562H0V56.9998C67 22.9998 186.994 87.045 302.344 57.9998C419.5 28.4998 532 91 662.344 49.9998C811.846 2.97324 850.018 88.0924 949 48.4998C1031.5 15.5 1140.92 -25.5747 1252.27 22Z",

    two: "M1252.27 16.3086C1343.5 16.3086 1402.5 85.3086 1440 67.8086V91.3706H0V24.3086C73.125 24.3086 177.891 67.5374 302.344 45.3086C426.797 23.0798 506.25 -10.7306 662.344 3.30861C818.438 17.3478 847 13.3086 949 44.3086C1056.85 77.0864 1131.18 16.3086 1252.27 16.3086Z",

    three:
      "M1252.27 0C1343.5 0 1402.5 54.562 1440 37.062V107.562H0V72.5359C73.125 72.5359 177.891 27.2908 302.344 5.06201C426.797 -17.1668 506.25 55.5719 662.344 69.6111C818.438 83.6503 847 -1.93799 949 29.062C1056.85 61.8398 1131.18 0 1252.27 0Z",
  },
};

function SvgPage() {
  const [isAnimating, toggleAnimating] = useToggle(false);
  const [page, setPage] = React.useState<1 | 2>(1);
  const overlayPath = React.useRef<SVGPathElement>(null);

  function animating() {
    gsap
      .timeline(overlayPath.current, {
        onComplete: () => toggleAnimating(),
      })
      .set(overlayPath.current, { attr: { d: paths.step2.from } })
      .to(overlayPath.current, {
        duration: 0.8,
        attr: { d: paths.step2.one },
        ease: "sine.in",
      })
      .to(overlayPath.current, {
        duration: 0.8,
        attr: { d: paths.step2.three },
        ease: "sine.in",
      })
      .to(overlayPath.current, {
        duration: 0.8,
        attr: { d: paths.step2.one },
        ease: "sine.in",
      });
  }

  return (
    <Style.Body>
      <Style.Main>
        <Style.StartView $page={page}>
          <Style.Button onClick={() => animating()}>Open</Style.Button>
        </Style.StartView>
        {/* 
        <Style.LandingView $page={page}>
          <Style.Button onClick={() => unreveal()}>Close</Style.Button>
        </Style.LandingView> */}

        <Style.Svg
          className="overlay"
          width="1440"
          height="197"
          viewBox="0 0 1440 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1252.27 19.4939C1338.33 -14.5752 1425.94 42.9589 1440 42.9589L1440 196H0V31.3242C73.125 31.3242 177.891 19.4939 302.344 2.45937C426.797 -14.5752 506.25 62.0803 662.344 72.839C818.437 83.5976 847.266 1.11453 952.735 31.5974C1058.2 62.0803 1144.69 62.0803 1252.27 19.4939Z"
            fill="url(#paint0_linear_103_748)"
          />
          <path
            d="M187.734 57.6924C101.672 19.8565 14.0625 105.983 0 105.983V196H1440V119.425C1366.88 119.425 1359.87 46 1232.58 46C1156.64 46 1008.98 92.7971 968.203 67.905C914.194 34.939 966.094 137.105 777.656 116.936C622.417 100.319 547.031 116.936 487.266 71.1341C408.682 10.9117 295.312 104.987 187.734 57.6924Z"
            fill="url(#paint1_linear_103_748)"
          />
          <path
            ref={overlayPath}
            d="M187.734 89.438C96.5 89.438 37.5 144 0 126.5V197H1440V161.974C1366.88 161.974 1262.11 116.729 1137.66 94.5C1013.2 72.2712 933.75 145.01 777.656 159.049C621.562 173.088 593 87.5 491 118.5C383.15 151.278 308.818 89.438 187.734 89.438Z"
            fill="#FDF3F1"
          />
          <defs>
            <linearGradient
              id="paint0_linear_103_748"
              x1="250.5"
              y1="-140"
              x2="236.5"
              y2="196"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.457674" stopColor="#FCE5E0" />
              <stop offset="0.590708" stopColor="#FEC5BB" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_103_748"
              x1="720"
              y1="46"
              x2="720"
              y2="196"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.133996" stopColor="#FADCD6" />
              <stop offset="0.690268" stopColor="#FECECE" />
            </linearGradient>
          </defs>
        </Style.Svg>

        {/* <Style.Svg
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
        </Style.Svg> */}
      </Style.Main>
    </Style.Body>
  );
}

export default SvgPage;

// function reveal() {
//   if (isAnimating) return;
//   toggleAnimating();

//   gsap
//     .timeline(overlayPath.current, {
//       onComplete: () => toggleAnimating(),
//     })
//     .set(overlayPath.current, { attr: { d: paths.step1.unfilled } })
//     .to(
//       overlayPath.current,
//       {
//         duration: 0.8,
//         ease: "power4.in",
//         attr: { d: paths.step1.inBetween.curve1 },
//       },
//       0
//     )
//     .to(overlayPath.current, {
//       duration: 0.2,
//       ease: "power1",
//       attr: { d: paths.step1.filled },
//       onComplete: () => switchPage(),
//     })

//     .set(overlayPath.current, { attr: { d: paths.step2.filled } })
//     .to(overlayPath.current, {
//       duration: 0.2,
//       ease: "sine.in",
//       attr: { d: paths.step2.inBetween.curve1 },
//     })
//     .to(overlayPath.current, {
//       duration: 1,
//       ease: "power4",
//       attr: { d: paths.step2.unfilled },
//     });
// }

// function unreveal() {
//   if (!isAnimating) return;
//   toggleAnimating();

//   gsap
//     .timeline(overlayPath.current, {
//       onComplete: () => toggleAnimating(),
//     })
//     .set(overlayPath.current, {
//       attr: { d: paths.step2.unfilled },
//     })
//     .to(
//       overlayPath.current,
//       {
//         duration: 0.8,
//         ease: "power4.in",
//         attr: { d: paths.step2.inBetween.curve2 },
//       },
//       0
//     )
//     .to(overlayPath.current, {
//       duration: 0.2,
//       ease: "power1",
//       attr: { d: paths.step2.filled },
//       onComplete: () => switchPage(),
//     })
//     // now reveal
//     .set(overlayPath.current, {
//       attr: { d: paths.step1.filled },
//     })
//     .to(overlayPath.current, {
//       duration: 0.2,
//       ease: "sine.in",
//       attr: { d: paths.step1.inBetween.curve2 },
//     })
//     .to(overlayPath.current, {
//       duration: 1,
//       ease: "power4",
//       attr: { d: paths.step1.unfilled },
//     });
// }

// function switchPage() {
//   if (page === 2) {
//     setPage(() => 1);
//   } else {
//     setPage(() => 2);
//   }
// }
