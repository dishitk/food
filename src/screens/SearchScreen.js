import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();
    // const [results, setResults] = useState([]);
    // const [errorMessage, setErrorMessage] = useState("");

    // const searchApi = async (searchTerm) => {
    //     try {
    //         const response = await yelp.get('/search',{
    //             params: {
    //                 limit: 50,
    //                 term: searchTerm, // if key and value have same name term:term can be replaced with just term. (ES2015 syntax)
    //                 location: 'washington d.c.'
    //             }
    //         });
    //         setResults(response.data.businesses);
    //     } catch(err) {
    //         setErrorMessage('Something went wrong!')
    //     }
    // };

    // useEffect(()=>{searchApi('pasta')},[])

    const filterByPrice = (price) => {
        // price === '$' or '$$' or '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        // anytime content cuts off the screen or expading beyond the screen, use flex:1 to solve the issue. Check video 112(section 11 udemy react native course).
        // Alternate to above commented issue is passing an empty element as root element, '<></>' check video 113(section 11 udemy react native course)
        <View style={{ flex: 1 }}>
            <SearchBar 
                term={term} 
                onTermChange={ (newTerm) => setTerm(newTerm) }
                onTermSubmit={ () => searchApi(term)}
            />
            {(errorMessage) ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterByPrice('$')} />
                <ResultsList title="Bit Pricier" results={filterByPrice('$$')} />
                <ResultsList title="Big Spender" results={filterByPrice('$$$')} />
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({});

export default SearchScreen;