

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
  return (
    
        <div className="col">
            <div className="card">

                <div className="row no-gutters">
                    <img src={`assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
            </div>
        </div>
    
  )
}
