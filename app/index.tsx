import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Bi3oshra!</Text>
            <Text style={styles.text}>
                This is your custom Home Page. Start building your app here.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff5e6',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#555',
    },
});


