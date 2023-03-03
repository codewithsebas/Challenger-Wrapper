export default function Product({ title, image, state,  }) {
  return (
    <div className="containProduct">
      <div className="product">
        <div className="contentImage">
          <img className="image" src={image} alt="Imagen" />
        </div>
        <h1 className="titleProduct">{title}</h1>
      </div>
      <div className="incrementDecrement">
        <button
          type="button"
          className="decrement"
        >
          -
        </button>
        <input
          className="input"
          type="number"
          placeholder="0"
          defaultValue={0}
        />
        <button
          type="button"
          className="increment"
        >
          +
        </button>
      </div>
    </div>
  );
}
