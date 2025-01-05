import "./App.css";
import "./Card.css";
import Scroll from "./Scroll";
import Navbar from "./Navbar";

// Fotoğrafları import et
import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";
import photo6 from "./photos/6.png";
import video from "./photos/lion.mp4";

function App() {
  return (
    <div className="fashion">
      <div>
        <Navbar />
      </div>

      <div className="changephoto-container">
        <div className="changephoto">
          <div className="photopartone">
            <img src={photo1} alt="Fotoğraf 1" />
          </div>
          <div className="photopartone">
            <img src={photo2} alt="Fotoğraf 2" />
          </div>
          <div className="photopartone">
            <img src={photo3} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephototwo">
          <div className="photoparttwo">
            <img src={photo4} alt="Fotoğraf 1" />
          </div>
          <div className="photoparttwo">
            <img src={photo5} alt="Fotoğraf 2" />
          </div>
          <div className="photoparttwo">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotothree">
          <div className="photopartthree">
            <img src={photo2} alt="Fotoğraf 1" />
          </div>
          <div className="photopartthree">
            <img src={photo4} alt="Fotoğraf 2" />
          </div>
          <div className="photopartthree">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotofour">
          <div className="photopartfour">
            <img src={photo3} alt="Fotoğraf 1" />
          </div>
          <div className="photopartfour">
            <img src={photo1} alt="Fotoğraf 2" />
          </div>
          <div className="photopartfour">
            <img src={photo5} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotofour">
          <div className="photopartfour">
            <img src={photo3} alt="Fotoğraf 1" />
          </div>
          <div className="photopartfour">
            <img src={photo1} alt="Fotoğraf 2" />
          </div>
          <div className="photopartfour">
            <img src={photo5} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotothree">
          <div className="photopartthree">
            <img src={photo2} alt="Fotoğraf 1" />
          </div>
          <div className="photopartthree">
            <img src={photo4} alt="Fotoğraf 2" />
          </div>
          <div className="photopartthree">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephototwo">
          <div className="photoparttwo">
            <img src={photo4} alt="Fotoğraf 1" />
          </div>
          <div className="photoparttwo">
            <img src={photo5} alt="Fotoğraf 2" />
          </div>
          <div className="photoparttwo">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephoto">
          <div className="photopartone">
            <img src={photo1} alt="Fotoğraf 1" />
          </div>
          <div className="photopartone">
            <img src={photo2} alt="Fotoğraf 2" />
          </div>
          <div className="photopartone">
            <img src={photo3} alt="Fotoğraf 3" />
          </div>
        </div>
      </div>

      <div className="changephoto-container">
        <div className="changephoto">
          <div className="photopartone">
            <img src={photo1} alt="Fotoğraf 1" />
          </div>
          <div className="photopartone">
            <img src={photo2} alt="Fotoğraf 2" />
          </div>
          <div className="photopartone">
            <img src={photo3} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephototwo">
          <div className="photoparttwo">
            <img src={photo4} alt="Fotoğraf 1" />
          </div>
          <div className="photoparttwo">
            <img src={photo5} alt="Fotoğraf 2" />
          </div>
          <div className="photoparttwo">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotothree">
          <div className="photopartthree">
            <img src={photo2} alt="Fotoğraf 1" />
          </div>
          <div className="photopartthree">
            <img src={photo4} alt="Fotoğraf 2" />
          </div>
          <div className="photopartthree">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotofour">
          <div className="photopartfour">
            <img src={photo3} alt="Fotoğraf 1" />
          </div>
          <div className="photopartfour">
            <img src={photo1} alt="Fotoğraf 2" />
          </div>
          <div className="photopartfour">
            <img src={photo5} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotofour">
          <div className="photopartfour">
            <img src={photo3} alt="Fotoğraf 1" />
          </div>
          <div className="photopartfour">
            <img src={photo1} alt="Fotoğraf 2" />
          </div>
          <div className="photopartfour">
            <img src={photo5} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotothree">
          <div className="photopartthree">
            <img src={photo2} alt="Fotoğraf 1" />
          </div>
          <div className="photopartthree">
            <img src={photo4} alt="Fotoğraf 2" />
          </div>
          <div className="photopartthree">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephototwo">
          <div className="photoparttwo">
            <img src={photo4} alt="Fotoğraf 1" />
          </div>
          <div className="photoparttwo">
            <img src={photo5} alt="Fotoğraf 2" />
          </div>
          <div className="photoparttwo">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephoto">
          <div className="photopartone">
            <img src={photo1} alt="Fotoğraf 1" />
          </div>
          <div className="photopartone">
            <img src={photo2} alt="Fotoğraf 2" />
          </div>
          <div className="photopartone">
            <img src={photo3} alt="Fotoğraf 3" />
          </div>
        </div>
      </div>

      <div className="changephoto-container">
        <div className="changephoto">
          <div className="photopartone">
            <img src={photo1} alt="Fotoğraf 1" />
          </div>
          <div className="photopartone">
            <img src={photo2} alt="Fotoğraf 2" />
          </div>
          <div className="photopartone">
            <img src={photo3} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephototwo">
          <div className="photoparttwo">
            <img src={photo4} alt="Fotoğraf 1" />
          </div>
          <div className="photoparttwo">
            <img src={photo5} alt="Fotoğraf 2" />
          </div>
          <div className="photoparttwo">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotothree">
          <div className="photopartthree">
            <img src={photo2} alt="Fotoğraf 1" />
          </div>
          <div className="photopartthree">
            <img src={photo4} alt="Fotoğraf 2" />
          </div>
          <div className="photopartthree">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotofour">
          <div className="photopartfour">
            <img src={photo3} alt="Fotoğraf 1" />
          </div>
          <div className="photopartfour">
            <img src={photo1} alt="Fotoğraf 2" />
          </div>
          <div className="photopartfour">
            <img src={photo5} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotofour">
          <div className="photopartfour">
            <img src={photo3} alt="Fotoğraf 1" />
          </div>
          <div className="photopartfour">
            <img src={photo1} alt="Fotoğraf 2" />
          </div>
          <div className="photopartfour">
            <img src={photo5} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotothree">
          <div className="photopartthree">
            <img src={photo2} alt="Fotoğraf 1" />
          </div>
          <div className="photopartthree">
            <img src={photo4} alt="Fotoğraf 2" />
          </div>
          <div className="photopartthree">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephototwo">
          <div className="photoparttwo">
            <img src={photo4} alt="Fotoğraf 1" />
          </div>
          <div className="photoparttwo">
            <img src={photo5} alt="Fotoğraf 2" />
          </div>
          <div className="photoparttwo">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephoto">
          <div className="photopartone">
            <img src={photo1} alt="Fotoğraf 1" />
          </div>
          <div className="photopartone">
            <img src={photo2} alt="Fotoğraf 2" />
          </div>
          <div className="photopartone">
            <img src={photo3} alt="Fotoğraf 3" />
          </div>
        </div>
      </div>

      <div className="changephoto-container">
        <div className="changephoto">
          <div className="photopartone">
            <img src={photo1} alt="Fotoğraf 1" />
          </div>
          <div className="photopartone">
            <img src={photo2} alt="Fotoğraf 2" />
          </div>
          <div className="photopartone">
            <img src={photo3} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephototwo">
          <div className="photoparttwo">
            <img src={photo4} alt="Fotoğraf 1" />
          </div>
          <div className="photoparttwo">
            <img src={photo5} alt="Fotoğraf 2" />
          </div>
          <div className="photoparttwo">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotothree">
          <div className="photopartthree">
            <img src={photo2} alt="Fotoğraf 1" />
          </div>
          <div className="photopartthree">
            <img src={photo4} alt="Fotoğraf 2" />
          </div>
          <div className="photopartthree">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotofour">
          <div className="photopartfour">
            <img src={photo3} alt="Fotoğraf 1" />
          </div>
          <div className="photopartfour">
            <img src={photo1} alt="Fotoğraf 2" />
          </div>
          <div className="photopartfour">
            <img src={photo5} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotofour">
          <div className="photopartfour">
            <img src={photo3} alt="Fotoğraf 1" />
          </div>
          <div className="photopartfour">
            <img src={photo1} alt="Fotoğraf 2" />
          </div>
          <div className="photopartfour">
            <img src={photo5} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephotothree">
          <div className="photopartthree">
            <img src={photo2} alt="Fotoğraf 1" />
          </div>
          <div className="photopartthree">
            <img src={photo4} alt="Fotoğraf 2" />
          </div>
          <div className="photopartthree">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephototwo">
          <div className="photoparttwo">
            <img src={photo4} alt="Fotoğraf 1" />
          </div>
          <div className="photoparttwo">
            <img src={photo5} alt="Fotoğraf 2" />
          </div>
          <div className="photoparttwo">
            <img src={photo6} alt="Fotoğraf 3" />
          </div>
        </div>

        <div className="changephoto">
          <div className="photopartone">
            <img src={photo1} alt="Fotoğraf 1" />
          </div>
          <div className="photopartone">
            <img src={photo2} alt="Fotoğraf 2" />
          </div>
          <div className="photopartone">
            <img src={photo3} alt="Fotoğraf 3" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="Fashionh1"> Fashion</h1>
      </div>

      <div class="inovativecard">
        <div class="back">
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
        </div>
        <div class="text">
          <h1 className="colorscard">Elephant</h1>
        </div>

        <div class="back2">
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
        </div>
        <div class="text2">
          <h1 className="colorscard2">Lion</h1>
        </div>

        <div class="back3">
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
        </div>
        <div class="text3">
          <h1 className="colorscard3">Bear</h1>
        </div>
      </div>
      <div class="inovativecard">
        <div class="back">
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
        </div>
        <div class="text">
          <h1 className="colorscard">Elephant</h1>
        </div>

        <div class="back2">
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
        </div>
        <div class="text2">
          <h1 className="colorscard2">Lion</h1>
        </div>

        <div class="back3">
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
        </div>
        <div class="text3">
          <h1 className="colorscard3">Bear</h1>
        </div>
      </div>
      <div className="videodiv">
        <video className="video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <Scroll />
      </div>
    </div>
  );
}

export default App;
