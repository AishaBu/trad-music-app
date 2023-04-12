import { useForm } from "react-hook-form";
import { BiSearchAlt2} from "react-icons/bi";


//FORM FUNCTION
function Form() {

  //Declare variables in useForm React Hook Form Validation
  const {register, handleSubmit, formState: {errors}} = useForm();

  //Register input field
  const handleRegistration = (data) => console.log(data);
 

  return (
    /*Chrome console produces ValidateDOM Nesting error that you cannot have 
    a form within a form element so replaced form 
    with div and put function to register form on submit in button onclick*/
    <div className="form">
      <label className="hidden-label">Search for music</label>
      <BiSearchAlt2 className="search-icon"/>
      <input 
        type='search'
        id='searchField'
        name='searchValue'
        autoComplete='off'
        placeholder="Search Artists, Songs, Albums, Videos"
        /*Register input field, regex pattern only accepts letters and number no special chars*/
        {...register('searchValue', {required: "A search value is required", pattern: /^[A-Za-z0-9]*$/i})}
       />
      {/*Add error check after/below input field*/}
      <div className="error-message">{errors?.searchValue && errors.searchValue.message}</div>
      <button type='submit' className="search-btn" onClick={handleSubmit(handleRegistration)}>Search</button>
    </div>
  );
}

export default Form;
