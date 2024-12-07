import { StyleSheet, Text, View, SectionList } from 'react-native';
import React from 'react';

// Define how each activity should be rendered
const renderActivity = ({ item }) => (
  <View style={styles.activity}>
    <Text style={styles.activityTitle}>{item.activity}</Text>
    <Text>Time: {item.time} ({item.time_to_spend})</Text>
    <Text>Details: {item.details}</Text>
    <Text>Best Time to Visit: {item.best_time_to_visit}</Text>
  </View>
);

const PlannedTrip = ({ details }) => {
  console.log("details from plan trip", details);

  // Check if details is an object and has entries
  if (!details || typeof details !== 'object' || Object.keys(details).length === 0 ) {
    return (
      <View style={styles.container}>
        <Text>No trip details available.</Text>
      </View>
    );
  }

  // Prepare data for SectionList
  const sections = Object.entries(details).map(([day, activities]) => ({
    title: day.charAt(0).toUpperCase() + day.slice(1),
    data: Array.isArray(activities) ? activities : [],
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏕️ Plan Details</Text>
      <SectionList
        sections={sections}
        renderItem={renderActivity}
        keyExtractor={(item, index) => `${item.activity}-${index}`}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.dayTitle}>{title}</Text>
        )}
      />
    </View>
  );
};

export default PlannedTrip;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  activity: {
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});