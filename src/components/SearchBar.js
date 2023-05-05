import {useState} from 'react';
import './searchBar.css';

function SearchBar({onSubmit}){
    
        const[term, setTerm] = useState('');
        const handleFormSubmit = (event) => {
        event.preventDefault();
        // when we hit enter in case of form element, it makes a network request which is really unneccesary, so to prevent that from happening we are using event.preventDefault();
        onSubmit(term);
        
    };
    const handleChange = (event) =>{
        setTerm(event.target.value);
    };
    return <div className = "search-bar">
        <form onSubmit = {handleFormSubmit}> 
            {/* form element causes submit event, so due to form, on pressing enter, the input in the box will be submitted */}
            {/* using from is necessary because there is no button to track that the answer has been submitted but we have form element which detects whenever enetr is pressed and helps us to perfom action accordingly */}
            <label>Enter search term</label>
        <input value = {term} onChange = {handleChange}/>
        </form>
    </div>;
}

export default SearchBar;