import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm, // if key and value have same name term:term can be replaced with just term. (ES2015 syntax)
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch(err) {
            setErrorMessage('Something went wrong!')
        }
    };

    useEffect(() => {
        searchApi('pasta')
    },[]);

    return [searchApi, results, errorMessage];
};