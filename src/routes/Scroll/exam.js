// import FlyInFlyOut from "@/components/Scrolls/FlyInFlyOut";
// import Markers from "@/components/Scrolls/Markes/Markers";
// import { Link } from "react-router-dom";
// import { NAMES } from "@/constant/scroll";

// const RootWrapper = styled.div`
//   overflow: hidden;
//   height: 100%;
//   position: relative;
// `;

// const ScrollWrapper = styled.ul`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   gap: 2em;

//   width: 100%;
//   height: 100%;

//   overflow-x: scroll;
//   scrollbar-width: none;
//   scroll-behavior: smooth;
//   scroll-snap-type: x mandatory;
//   overscroll-behavior: contain;

//   animation-timeline: --carousel;
// `;

// const ItemsWrapper = styled.li`
//   display: flex;
//   justify-content: center;

//   scroll-snap-align: center;
//   width: 70dvw;
//   height: 300px;
//   flex: 100% 1 0;
// `;

// const Items = styled(Link)`
//   display: grid;
//   place-items: center;
//   pointer-events: none;
//   cursor: default;

//   font-size: 4rem;
//   font-weight: bold;
//   color: white;
// `;

// <>
//   <RootWrapper>
//     <h1>ScrollPage</h1>
//     <ScrollWrapper id="scroll-items">
//       <ul
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           scrollSnapAlign: "center",
//           width: "70dvw",
//           height: "300px",
//           flex: "100% 1 0",
//         }}
//       >
//         <Link id="0th-item" to={"#0th-item"} />
//         <FlyInFlyOut />
//       </ul>
//       {Array.from({ length: 10 }, (_, i) => i).map((item) => (
//         <ItemsWrapper
//           key={item}
//           style={{
//             background: `rgb(${Math.floor(
//               Math.random() * 255 + 1
//             )} ${Math.floor(Math.random() * 255 + 1)} ${Math.floor(
//               Math.random() * 255 + 1
//             )})`,
//           }}
//         >
//           <Items id={`${item + 1}th-item`} to={`#${item + 1}th-item`}>
//             {NAMES[item]}
//           </Items>
//         </ItemsWrapper>
//       ))}
//     </ScrollWrapper>
//   </RootWrapper>
//   <Markers size={11} />
// </>
