import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HeaderSlider() {
    return (
        <View style={styles.sliderContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
                <LinearGradient colors={['#FFEEE2', '#FFD9CE']} style={styles.sliderItem}>
                    <View style={styles.slideContent}>
                        <Text style={styles.sliderText}>
                            We Make Your <Text style={styles.sliderHighlight}>Home</Text> as <Text style={styles.sliderHighlight}>GOOD</Text> as <Text style={styles.sliderHighlight}>NEW</Text>
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <LinearGradient colors={['#E3FDF5', '#E4C1F9']} style={styles.sliderItem}>
                    <View style={styles.slideContent}>
                        <Text style={styles.sliderText}>
                            Hire Trusted Experts throughout <Text style={styles.sliderHighlight}>Pakistan</Text>
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Services</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <LinearGradient colors={['#F8B195', '#F67280']} style={styles.sliderItem}>
                    <View style={styles.slideContent}>
                        <Text style={styles.sliderText}>Get an instant quote for your next house clean</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Pricing</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        marginTop: 10,
    },
    slider: {
        width: '90%',
        marginHorizontal: '5%',
        height: 160,
    },
    sliderItem: {
        width: 320,
        padding: 15,
        marginRight: 15,
        borderRadius: 15,
        justifyContent: 'space-evenly',
    },
    slideContent: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    sliderText: {
        fontSize: 24,
        color: '#333',
        marginBottom: 5,
        textAlign: 'left',
    },
    sliderHighlight: {
        fontWeight: 'bold',
        color: '#143740',
    },
    button: {
        backgroundColor: '#143740',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
