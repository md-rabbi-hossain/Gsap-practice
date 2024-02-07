import "./Card.css"; // Import CSS file for styling

// eslint-disable-next-line react/prop-types
const Card = ({ datas }) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, author, published_date, category, classname } =
    datas;
  console.log(classname);

  return (
    <div className={`card ${classname}`}>
      <div className="card-header">
        <h2>{title}</h2>
        <p className="card-category">{category}</p>
      </div>
      <div className="card-body">
        <p>{description}</p>
        <p className="card-author">
          By {author} on {published_date}
        </p>
      </div>
    </div>
  );
};

export default Card;
