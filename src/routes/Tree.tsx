import Branch from "../components/Branch";

function Tree() {
  return (
    <>
      <div className="flex w-full h-full place-items-center justify-center">
        <Branch name="English Hello" defaultOpen>
          <h1>Hello</h1>
          <Branch name="English World!" defaultOpen>
            <h2>World!</h2>
            <Branch name="Japan Hello!" defaultOpen>
              <h3>こんにちは</h3>
              <Branch name="Japan World!" defaultOpen>
                <h3>世界</h3>
              </Branch>
            </Branch>
            <Branch name="China Hello!" defaultOpen>
              <h3>哈啰</h3>
              <Branch name="China World!">
                <h3>世界</h3>
              </Branch>
            </Branch>
          </Branch>
          <Branch name="Spain Hello!" defaultOpen>
            <h2>Hola, hola!</h2>
            <Branch name="Spain World!">
              <h3>¡El mundo!</h3>
            </Branch>
          </Branch>
        </Branch>
      </div>
      <div>
        <Branch name="Korean Hello" defaultOpen>
          <h1>안녕!</h1>
          <Branch name="Korean World!" defaultOpen>
            <h2>세계!</h2>
            <Branch name="Germany World!" defaultOpen>
              <h3>Welt!</h3>
            </Branch>
          </Branch>
          <Branch name="Germany Hello!" defaultOpen>
            <h2>Hallo!</h2>
          </Branch>
        </Branch>
      </div>
    </>
  );
}

export default Tree;
