export default function Product({ image, name }) {
  return (
    <div className="containProduct">
      <div className="product">
          <div className="contentImage">
            <img className="image" src={image} alt="Imagen" />
          </div>
          <h1 className="titleProduct">{name}</h1>
      </div>
      <div className="incrementDecrement">
        <button type="button" className="decrement">-</button>
            <input className="input" type="number" placeholder="0" />
        <button type="button" className="increment">+</button>
      </div>
    </div>
  );
}
