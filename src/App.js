import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import {useState} from 'react';

function App(){
    const[images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        // We have just defined the callback function here
        const result = await searchImages(term);

        setImages(result);
    };
    return (<div>
        <SearchBar onSubmit = {handleSubmit}/>
        <ImageList images={images}/>
        {/* We have passed an images piece of state which in the start is an empty array */}
        {/* eventually when the user submits the form by hitting enter key, we hit handleSubmit and we do a search to the epi that akes some amount of time to reach out and get a response  */}
        {/* we wait for the response. on getting response we wait to update our images piece of state */}
    </div>);
}

export default App;