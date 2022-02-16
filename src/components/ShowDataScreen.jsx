export const ShowDataScreen = ({ character }) => {
  return (
    <>
      <div className="api-container-card">
        {character?.map(({ name, id, image, species, gender, location, created }) => (
          <div key={id} className="card-info">
              <img className="image" src={image} alt={name} />
            <p className="character-name modifier-name">{name}</p>
            <p className="character-name">{gender}</p>
            <p className="character-name">{species}</p>
            <p className="character-name location">Location: {location.name}</p>
            <p className="character-name">created: {created}</p>
          </div>
        ))}
      </div>
    </>
  );
};
