import React from "react";
import styled from "styled-components";
import DirectionBtn from "../components/DirectinoBtn";
import Bird from "../icons/Bird";
import { createApi } from "unsplash-js";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import FocusProvider from "../components/Context/FocusProvider";
import ProgressBar from "../components/ProgressBar";
import Articels from "../components/Articles";
// import ProgressBar from "../ProgressBar/index"
// import FocusProvider from "../Context/FocusProvider";

// import { DayBirdIcon } from "@/components/icon/BirdIcon";

/**
 * Styled components
 */

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
const StoriesRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  justify-content: center;
  align-items: center;
`;
const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;
`;

const Content = styled.div`
  display: grid;

  grid: 1fr / auto-flow 100%;

  overflow-x: scroll;
  scroll-timeline: --time-line inline;
  scroll-snap-type: x mandatory;

  max-width: 320px;
  max-height: 620px;
  box-shadow: var(--shadow-elevation-high);

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

/**
 * React Components
 */

export default function Stories() {
  const [images, setImages] = React.useState<Photos | null>(null);

  const unsplash = createApi({
    accessKey: "T3_66syLWZsKMMOwHmHkoFj9lGYvI-Fpqe1DNkhubmE",
  });

  React.useEffect(() => {
    async function getPhotos() {
      const imageData = await unsplash.search.getPhotos({
        query: "cat",
        orientation: "portrait",
        page: 1,
        perPage: 10,
      });
      const images = await imageData.response;
      setImages(images ?? null);
      return;
    }
    getPhotos();
  }, []);

  return (
    <Container>
      <Bird style={{ width: "55px", height: "55px" }} />
      {images && (
        <StoriesRoot>
          <DirectionBtn direction="prev" />
          <FocusProvider barSize={images.results.length}>
            <StoriesContainer>
              <Content>
                <Articels data={images} />
              </Content>
              <ProgressBar barSize={images.results.length} />
            </StoriesContainer>
          </FocusProvider>
          <DirectionBtn direction="next" />
        </StoriesRoot>
      )}
    </Container>
  );
}
