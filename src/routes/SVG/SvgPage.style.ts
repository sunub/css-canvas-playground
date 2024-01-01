import styled from "styled-components";

export const Body = styled.div`
  margin: 0;
  --color-text: #000;
  --color-bg-view-1: #f3efe6;
  --color-bg-view-2: #cbb37e;
  --color-link: #000;
  --color-link-hover: #000;
  --color-button: #000;
  --color-button-hover: #634c18;
  color: var(--color-text);
  background-color: var(--color-bg-view-1);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  background: var(--color-bg-view-1);
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  display: grid;
  place-items: center;
  grid: [button] 1fr / [button] 1fr;
  width: 100%;
  height: 100%;
`;

export const StartView = styled.div<{ $page: 1 | 2 }>`
  grid-area: button;
  position: relative;
  display: grid;
  place-items: center;

  opacity: ${({ $page }) => ($page === 1 ? 1 : 0)};
  pointer-events: ${({ $page }) => ($page === 1 ? "auto" : "none")};
`;

export const LandingView = styled.div<{ $page: 1 | 2 }>`
  grid-area: button;
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  background: var(--color-bg-view-2);
  pointer-events: ${({ $page }) => ($page === 2 ? "auto" : "none")};
  opacity: ${({ $page }) => ($page === 2 ? 1 : 0)};
`;

export const Button = styled.button`
  color: var(--color-button);
  border-radius: 30px;
  min-width: 150px;
  padding: 1rem 2rem;
  border: 1px solid currentColor;
`;

export const Svg = styled.svg`
  pointer-events: none;
  position: absolute;
  bottom: 0;
`;

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
