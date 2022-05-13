import { useForm } from "../../hooks/useForm"

export const SearchScreen = () => {

  const [formValues,handleInputChange]=useForm({
    searchText: '',
  })

  const {searchText} = formValues;

  const handleSearch=(e)=>{
    e.preventDefault();
    console.log(searchText);
 
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
          </div>
      </>
    )
  }
  