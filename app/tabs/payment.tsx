import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PaymentPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment Page</Text>
            <Text style={styles.text}>Add your payment details or logic here!</Text>
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
