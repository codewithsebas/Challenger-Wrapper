import "./App.css";
import Header from "./components/Header";
import imagen1 from "./assets/image1.svg";
import imagen2 from "./assets/image2.svg";
import imagen3 from "./assets/image3.svg";
import imagen4 from "./assets/image4.svg";
import imagen5 from "./assets/image5.svg";
import imagen6 from "./assets/image6.svg";
import imagen7 from "./assets/image7.svg";
import imagen8 from "./assets/image8.svg";
import imagen9 from "./assets/image9.svg";
import imagen10 from "./assets/image10.svg";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  let squareMeters = {
    beds: 1.2,
    refrigerador: 1,
    furniture: 0.5,
    oven: 0.6,
    sofa: 1.5,
    tv: 0.25,
    washerDryer: 0.5,
    dining: 2,
    desk: 0.75,
    wardrobe: 3.2,
  };

  let totalItems = 0;
  let totalSquare = 0;
  let subTotal = 0;
  let tax = 0;
  let total = 0;

  const handleReset = () => {
    setBeds(0);
    setRefrigerador(0);
    setFurniture(0);
    setOven(0);
    setSofa(0);
    setTv(0);
    setWasherDryer(0);
    setDining(0);
    setDesk(0);
    setWardrobe(0);
  };

  const [beds, setBeds] = useState(0);
  if (beds === -1) {
    return setBeds(0);
  }

  const [refrigerador, setRefrigerador] = useState(0);
  if (refrigerador === -1) {
    return setRefrigerador(0);
  }

  const [furniture, setFurniture] = useState(0);
  if (furniture === -1) {
    return setFurniture(0);
  }

  const [oven, setOven] = useState(0);
  if (oven === -1) {
    return setOven(0);
  }

  const [sofa, setSofa] = useState(0);
  if (sofa === -1) {
    return setSofa(0);
  }

  const [tv, setTv] = useState(0);
  if (tv === -1) {
    return setTv(0);
  }

  const [washerDryer, setWasherDryer] = useState(0);
  if (washerDryer === -1) {
    return setWasherDryer(0);
  }

  const [dining, setDining] = useState(0);
  if (dining === -1) {
    return setDining(0);
  }

  const [desk, setDesk] = useState(0);
  if (desk === -1) {
    return setDesk(0);
  }

  const [wardrobe, setWardrobe] = useState(0);
  if (wardrobe === -1) {
    return setWardrobe(0);
  }

  return (
    <>
      <Header />
      <main>
        <div className="titleDescrip">
          <h1 className="title">What items to store?</h1>
          <p className="descrip">
            Select which items you wish to store before moving to <br /> your
            new home. We’ll keep ’em safe!
          </p>
        </div>
        <form className="form">
          <div className="products">
            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen1} alt="Imagen" />
                </div>
                <h1 className="titleProduct">Beds</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setBeds(beds - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setBeds(beds + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen2} alt="Imagen" />
                </div>
                <h1 className="titleProduct">Refrigerador</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setRefrigerador(refrigerador - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={refrigerador}
                  onChange={(e) => setRefrigerador(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setRefrigerador(refrigerador + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen3} alt="Imagen" />
                </div>
                <h1 className="titleProduct">Furniture</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setFurniture(furniture - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={furniture}
                  onChange={(e) => setFurniture(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setFurniture(furniture + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen4} alt="Imagen" />
                </div>
                <h1 className="titleProduct">Oven</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setOven(oven - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={oven}
                  onChange={(e) => setOven(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setOven(oven + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen5} alt="Imagen" />
                </div>
                <h1 className="titleProduct">Sofa</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setSofa(sofa - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={sofa}
                  onChange={(e) => setSofa(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setSofa(sofa + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen6} alt="Imagen" />
                </div>
                <h1 className="titleProduct">TV</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setTv(tv - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={tv}
                  onChange={(e) => setTv(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setTv(tv + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen7} alt="Imagen" />
                </div>
                <h1 className="titleProduct">Washer-dryer</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setWasherDryer(washerDryer - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={washerDryer}
                  onChange={(e) => setWasherDryer(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setWasherDryer(washerDryer + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen8} alt="Imagen" />
                </div>
                <h1 className="titleProduct">Dining</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setDining(dining - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={dining}
                  onChange={(e) => setDining(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setDining(dining + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen9} alt="Imagen" />
                </div>
                <h1 className="titleProduct">Desk</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setDesk(desk - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={desk}
                  onChange={(e) => setDesk(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setDesk(desk + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="containProduct">
              <div className="product">
                <div className="contentImage">
                  <img className="image" src={imagen10} alt="Imagen" />
                </div>
                <h1 className="titleProduct">Wardrobe</h1>
              </div>
              <div className="incrementDecrement">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => setWardrobe(wardrobe - 1)}
                >
                  -
                </button>
                <input
                  className="input"
                  type="number"
                  placeholder="0"
                  value={wardrobe}
                  onChange={(e) => setWardrobe(e.target.value)}
                />
                <button
                  type="button"
                  className="increment"
                  onClick={() => setWardrobe(wardrobe + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
          </div>
          <div className="buttons">
              <button className="clear" type="button" onClick={handleReset}>
                Clear
              </button>
            </div>
            <div className="containResult">
              <h1 className="titleResult">Summary</h1>
              <div className="result">
                <div className="row">
                  <div className="col">
                    <h3>Total Items</h3>
                  </div>
                  <div className="col-2">
                    <p>
                      {
                        (totalItems =
                          beds +
                          refrigerador +
                          furniture +
                          oven +
                          sofa +
                          tv +
                          washerDryer +
                          dining +
                          desk +
                          wardrobe)
                      }
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h3>Total m²</h3>
                  </div>
                  <div className="col-2">
                    <p>
                      {(totalSquare =
                        squareMeters.beds * beds +
                        squareMeters.refrigerador * refrigerador +
                        squareMeters.furniture * furniture +
                        squareMeters.oven * oven +
                        squareMeters.sofa * sofa +
                        squareMeters.tv * tv +
                        squareMeters.washerDryer * washerDryer +
                        squareMeters.dining * dining +
                        squareMeters.desk * desk +
                        squareMeters.wardrobe * wardrobe)
                        .toFixed(2)
                        .replace(/.0+$/, "")}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h3>Subtotal</h3>
                  </div>
                  <div className="col-2">
                    <p>
                      $
                      {(subTotal = totalSquare * 200)
                        .toFixed(1)
                        .replace(/.0+$/, "")}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h3>Tax</h3>
                  </div>
                  <div className="col-2">
                    <p>
                      ${(tax = subTotal * 0.16).toFixed(1).replace(/.0+$/, "")}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h3>
                      <b>Total</b>
                    </h3>
                  </div>
                  <div className="col-2">
                    <p>
                      <b>
                        $
                        {(total = tax + subTotal)
                          .toFixed(1)
                          .replace(/.0+$/, "")}
                      </b>
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h3>
                      <b>Due Today 50%</b>
                    </h3>
                  </div>
                  <div className="col-2">
                    <p>
                      <b>${(total / 2).toFixed(1).replace(/.0+$/, "")}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default App;
