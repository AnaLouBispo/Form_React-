import "./card.css";
const Card = (props) => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="img">
            <img src={props.img} alt="Imagem Aqui" />
          </div>

          <div className="content">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
