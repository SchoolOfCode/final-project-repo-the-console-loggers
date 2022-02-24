const Card = ({ name, expdate, quantity }) => {
  //Date variables
  let date = new Date();
  let today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  let expiryDate = expdate;

  return (
    <div className="card-container">
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/Tuna.svg'}
          alt="Bananas"
        />
        <div className="texts">
          <h1 className="title">{name}</h1>
          <p className="quantity">{quantity}</p>
          <div className="expiration">
            <span
              className={`expiry-dot ${today >= expiryDate ? 'red' : 'green'}`}
            ></span>
            <p className="expiration-date">{expdate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
