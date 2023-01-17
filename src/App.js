import "./App.css";
import React from "react";
import UploadImage from "./components/UploadImage";
import Results from "./components/Results";
import Examples from "./components/Examples";

/*
conventions around variables, functions, states in formatting 
*/

function App() {
  const [results, setResults] = React.useState({});
  const [selectedImage, setSelectedImage] = React.useState(null);

  function runModel(image_data) {
    fetch("https://whichlight-fastai-door-classifier.hf.space/run/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [image_data],
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        let data = r.data[0];
        setResults(data);
      });
  }

  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  function getImageAndClassify() {
    // remove past results while running
    setResults({});
    const img = document.getElementById("input-image");
    img.addEventListener(
      "load",
      () => {
        const imageData = getBase64Image(img);
        runModel(imageData);
        console.log("call");
      },
      // this was calling a bunch
      { once: true }
    );
  }

  React.useEffect(() => {
    selectedImage && getImageAndClassify();
  }, [selectedImage]);

  return (
    <div className="App">
      <header>
        <h1 className="title">Fastai Door Classifier</h1>
      </header>
      <main>
        <div className="classifier">
          <UploadImage
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            classify={getImageAndClassify}
          />
          <div className="results">
            <Results results={results} selectedImage={selectedImage} />
          </div>
        </div>
        <Examples setSelectedImage={setSelectedImage} />
      </main>
    </div>
  );
}

export default App;
