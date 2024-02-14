import { useState } from "react";
import "./App.css";
import sofiaWill from "./sofia-will.jpg";
const firstPadding = "20px";
const words = [
  { padding: firstPadding, text: "No" },
  { padding: "40px", text: "Are you sure?" },
  { padding: "60px", text: "Really?" },
  { padding: "80px", text: "Reconsider?" },
  { padding: "100px", text: "Come on" },
  { padding: "120px", text: "Final Answer?" },
  { text: "Yes!!!!", padding: "140px" },
];
function App() {
  const [count, setCount] = useState(0);
  const [openImage, setOpenImage] = useState(false);

  return (
    <>
      <div>
        {openImage ? (
          <h2>Happy Valentines Day, Will!!!</h2>
        ) : (
          <h2>Will you be my valentine, William?</h2>
        )}

        {!openImage ? (
          <>
            {words.map((word, index) => (
              <div>
                {index === count && (
                  <>
                    {word.text !== "Yes!!!!" && (
                      <button
                        style={{
                          padding: firstPadding,
                          backgroundColor: "#ff3126",
                          marginRight: "10px",
                        }}
                        onClick={() => setCount(index + 1)}
                      >
                        {word.text}
                      </button>
                    )}
                    <button
                      style={{
                        padding: word.padding,
                        backgroundColor: "#a1c89e",
                      }}
                      onClick={() => setOpenImage(true)}
                    >
                      Yes
                    </button>
                    {word.text === "Yes!!!!" && (
                      <button
                        style={{
                          padding: word.padding,
                          backgroundColor: "#a1c89e",
                          marginLeft: "10px",
                        }}
                        onClick={() => setOpenImage(true)}
                      >
                        {word.text}
                      </button>
                    )}
                  </>
                )}
              </div>
            ))}
          </>
        ) : (
          <div>
            <img
              style={{ height: "40rem", width: "50rem" }}
              src={sofiaWill}
              alt="sofiaWill"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
