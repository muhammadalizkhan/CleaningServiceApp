import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { servicesData } from './ServicesData';
export default function ServicesSlider() {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                contentContainerStyle={styles.scrollContainer}
                showsHorizontalScrollIndicator={false}
            >
                {servicesData.map((service) => (
                    <View key={service.id} style={styles.serviceItem}>
                        <View style={styles.iconContainer}>
                            <Image source={service.image} style={styles.serviceImage} />
                        </View>
                        <Text style={styles.serviceText}>{service.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginTop: 20,
    },
    scrollContainer: {
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    serviceItem: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    iconContainer: {
        backgroundColor: '#143740',
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    serviceImage: {
        width: 40,
        height: 40,
    },
    serviceText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'black',
    },
});
