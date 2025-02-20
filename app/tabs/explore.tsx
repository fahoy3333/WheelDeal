import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExplorePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore Bi3oshra</Text>
            <Text style={styles.text}>
                This is the Explore Page where you can showcase features.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6f7ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

