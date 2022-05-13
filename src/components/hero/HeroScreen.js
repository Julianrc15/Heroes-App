import { useMemo } from "react";
import { useParams, Navigate,useNavigate } from "react-router-dom"
import { getHeroById } from '../selectors/getHeroesById';


export const HeroScreen = () => {

  
  const {heroeId} = useParams();

  const navigate=useNavigate();

  const hero = useMemo(()=> getHeroById(heroeId),[heroeId]);

  if(!hero) {
    return <Navigate to='/'/>
  }

  const{
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  }=hero

  const imagePath=`/assets/heroes/${id}.jpg`

  const handleReturn = ()=>{
   navigate(-1)
  }

  return (
    <div className="row mt-3">

        <div className="col-5">
          <img 
          src={imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInDown"/>
        </div>

        <div className="col-7">
            <h2>{hero.superhero}</h2>
            <ul className="list-gruop list-group-flush">
              <li className="list-group-item">
                <b>Alter ego: </b>{alter_ego}
              </li>
              <li className="list-group-item">
                <b>Publisher: </b>{publisher}
              </li>
              <li className="list-group-item">
                <b>First appearence: </b>{first_appearance}
              </li>
            </ul>
            <h4 className="mt-2">Characters</h4>
            <p>{characters}</p>

            <button
            className="btn btn-outline-info mt-3"
            onClick={handleReturn}>
              Return
            </button>

        </div>
    </div>
  )
}
