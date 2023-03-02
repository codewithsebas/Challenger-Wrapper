import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";

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

function App() {
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
            <Product image={imagen1} name="Beds" />
            <Product image={imagen2} name="Refrigerador" />
            <Product image={imagen3} name="Beds" />
            <Product image={imagen4} name="Beds" />
            <Product image={imagen5} name="Beds" />
            <Product image={imagen6} name="Beds" />
            <Product image={imagen7} name="Beds" />
            <Product image={imagen8} name="Beds" />
            <Product image={imagen9} name="Beds" />
            <Product image={imagen10} name="Beds" />
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
