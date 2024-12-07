import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Colors } from './../../constants/Colors';

const FlightInfo = ({ flightData }) => {
  if (!flightData || flightData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>✈️ Flights</Text>
        <Text style={styles.para}>No flight information available.</Text>
      </View>
    );
  }

  const renderFlightItem = ({ item }) => (
    <View style={styles.flightContainer}>
      <Text style={styles.para}>Airline: {item.airline}</Text>
      <Text style={styles.para}>Price: {item.price}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => Linking.openURL(item.booking_url)}
      >
        <Text style={styles.buttonTxT}>Book Here</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✈️ Flights</Text>
      <FlatList
        data={flightData}
        renderItem={renderFlightItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FlightInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderColor: Colors.lightGray,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
  },
  para: {
    fontFamily: 'Outfit',
    fontSize: 17,
    marginTop: 7,
  },
  button: {
    padding: 5,
    backgroundColor: Colors.primary,
    borderRadius: 7,
    marginTop: 7,
  },
  buttonTxT: {
    fontFamily: 'Outfit',
    color: Colors.white,
    textAlign: 'center',
  },
  flightContainer: {
    marginTop: 15,
  },
});