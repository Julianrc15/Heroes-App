import { HeroCard } from './HeroCard'

import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { useMemo } from 'react'

export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=>getHeroesByPublisher(publisher),[publisher])


  return (

    
    <>
               
        <div className="row rows-cols-3 row-cols-md-3 g-3 animate__animated animate__pulse ">
            {
                heroes.map((hero) =>(
                <HeroCard key={ hero.id}
                {...hero}
                >
                   
                </HeroCard>
                ))
            }
            
        </div>
    
    </>
  )
}
