import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HeaderSlider() {
    return (
        <View style={styles.sliderContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
                <View style={styles.sliderItem}>
                    <View style={styles.slideContent}>
                        <Text style={styles.sliderText}>
                            We Make Your <Text style={styles.sliderHighlight}>Home</Text> as <Text style={styles.sliderHighlight}>GOOD</Text> as <Text style={styles.sliderHighlight}>NEW</Text>
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Book Online</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sliderItem}>
                    <View style={styles.slideContent}>
                        <Text style={styles.sliderText}>
                            Hire Trusted Experts  throughout <Text style={styles.sliderHighlight}>Pakistan</Text>
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Services</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sliderItem}>
                    <View style={styles.slideContent}>
                        <Text style={styles.sliderText}>Get an instant quote for your next house clean</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Pricing</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        marginTop: 20,
        paddingHorizontal: '5%',
        marginBottom: 20,
    },
    slider: {
        width: '100%',
        height: 150,
    },
    sliderItem: {
        width: 320,
        padding: 20, 
        marginRight: 20, 
        backgroundColor: '#f3f3f3', 
        borderRadius: 20, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2, 
        shadowRadius: 8, 
        elevation: 8, 
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        overflow: 'hidden', 
    },
    slideContent: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    sliderText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
        lineHeight: 32, 
        textAlign: 'left',
    },
    sliderHighlight: {
        fontWeight: 'bold',
        color: '#143740',
    },
    button: {
        backgroundColor: '#143740',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        elevation: 4, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});
