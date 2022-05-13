import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../selectors/getHeroesByName";
import {HeroCard} from '../hero/HeroCard'



export const SearchScreen = () => {

  const navigate= useNavigate()
  const location = useLocation() 

  const {q=''} =queryString.parse(location.search);

  

  const [formValues,handleInputChange]=useForm({
    searchText: q,
  })

  const {searchText} = formValues;
  const heoresFiltered = getHeroesByName(q) 
  const handleSearch=(e)=>{
    e.preventDefault();
    console.log(searchText);
    navigate(`?q=${searchText}`)
 
  }
  
    return (
      <>
          <div className="row">
            <div className="col-5">
              <h2>Search</h2>
              <hr/>

              <form onSubmit={ handleSearch }>
                <input 
                  type="text"
                  placeholder="Search a hero"
                  className="form-control" 
                  name="searchText"
                  autoComplete="Off"
                  value={searchText}
                  onChange={handleInputChange}
                 />

                 <button 
                 className="btn btn-dark mt-5"
                 type="submit"
                  >
                   Search...
                 </button>
              </form>
            </div>
          
          <div className="col-7">
            <h3>Results</h3>
            <hr/>
            {
              heoresFiltered.map(hero=>(
                <HeroCard
                key={hero.id}
                {...hero}

              />
                            
              )
              ) 
              
            
              
            }


          </div>

          </div>
      </>
    )
  }
  