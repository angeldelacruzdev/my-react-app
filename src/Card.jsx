import cart from "./assets/cat.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={cart} alt="" />
      <h2 className="card-title">Bro Code</h2>
      <p className="card-text">I make youtube videos and play videos games.</p>
    </div>
  );
}

export default Card;
