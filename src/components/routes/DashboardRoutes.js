import {
    Routes,
    Route
} from "react-router-dom";

import { Navbar } from "../../ui/Navbar"

import { DcScreen } from '../dc/DcScreen'
import { HeroScreen } from '../hero/HeroScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen'


export const DashboardRoutes = () => {
  return (
    <>

    <Navbar/>
    <div className="m-3">
      <Routes>

        
        <Route path="marvel" element={<MarvelScreen/>}/>
        <Route path="dc" element={<DcScreen/>}/>

        <Route path="search" element={<SearchScreen/>}/>
        <Route path="hero/:heroeId" element={<HeroScreen/>}/>
        
        <Route path="/" element={<SearchScreen/>}/>

      </Routes>
    </div>  
    </>
  )
}
