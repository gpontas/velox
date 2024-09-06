
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App( navigation) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>BUDGET</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>1.045,00 €</Text>
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
        <CategoryItem
          label="Rent"
          amount="700"
          total="700"
          backgroundColor="#FFF59D" // Light Yellow
          borderColor="#FBC02D" // Darker Yellow
        />
        <CategoryItem
          label="Food"
          amount="224,68"
          total="400"
          backgroundColor="#C8E6C9" // Light Green
          borderColor="#388E3C" // Darker Green
        />
        <CategoryItem
          label="Shopping"
          amount="554,90"
          total="350"
          backgroundColor="#FFCDD2" // Light Red
          borderColor="#D32F2F" // Darker Red
        />
        <CategoryItem
          label="Travel"
          amount="86"
          total="460"
          backgroundColor="#C8E6C9" // Light Green
          borderColor="#388E3C" // Darker Green
        />
      </View>
    </ScrollView>
  );
}

const CategoryItem = ({ label, amount, total, backgroundColor, borderColor }) => (
  <View style={[styles.categoryItem, { backgroundColor, borderColor }]}>
    <Text style={styles.categoryLabel}>{label}</Text>
    <Text style={styles.categoryAmount}>{`${amount} / ${total} €`}</Text>
  </View>
);

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Centers everything vertically
    alignItems: 'center', // Centers everything horizontally
    paddingVertical: 40, // Extra padding to push content down
  },
  header: {
    alignItems: 'center',
    marginBottom: 40, // Space between header and the balance box
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20, // Space between "BUDGET" text and balance box
  },
  balanceContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 30,
    width: '90%', // Responsive width
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  categoriesContainer: {
    marginTop: 30,
    width: '90%', // Make categories container responsive and aligned
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns the label to the left and amount to the right
    padding: 20,
    borderRadius: 10,
    marginBottom: 20, // Equal space between category items
    borderWidth: 2, // For the contour line
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  categoryAmount: {
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

