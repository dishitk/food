import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ResultsDetail = ({ result }) => {
    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
            <Text style={styles.textStyle} >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    textStyle: {
        fontWeight: 'bold',
    },
    container: {
        marginLeft: 15
    }
});

export default ResultsDetail;