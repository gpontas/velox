import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window'); // Get the height of the screen

const SavingsScreen = ( navigation ) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>SAVINGS</Text>
        </View>

        {/* Savings Box */}
        <View style={styles.savingsBox}>
          <Text style={styles.month}>June 2024</Text>
          <Text style={styles.savingsAmount}>+ 597 €</Text>
        </View>

        {/* Last Transactions Section */}
        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionsTitle}>LAST TRANSACTIONS</Text>
        </View>

        {/* Transactions List */}
        <View style={styles.transactionsContainer}>
          <TransactionItem
            label="from Salary"
            date="Sun 09.06.2024"
            amount="251.40 €"
          />
          <TransactionItem
            label="from Tenant in Rome"
            date="Fri 07.06.2024"
            amount="250.00 €"
          />
          <TransactionItem
            label="to Shopping"
            date="Thu 06.06.2024"
            amount="-204.90 €"
          />
          <TransactionItem
            label="Family Fund"
            date="Wed 05.06.2024"
            amount="300.00 €"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const TransactionItem = ({ label, date, amount }) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionLabel}>{label}</Text>
      <Text style={styles.transactionDate}>{date}</Text>
    </View>
    <Text style={styles.transactionAmount}>{amount}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8', // Light background color
  },
  scrollViewContainer: {
    minHeight: screenHeight, // Ensure the scroll view content takes up at least the full screen height
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  header: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: -170,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4c4c4c',
  },
  savingsBox: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    padding: 30,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#DAF8E5', // Light green background for savings box
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  month: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  savingsAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4caf50', // Green color for the amount
  },
  transactionsHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4c4c4c',
  },
  transactionsContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionDetails: {
    flexDirection: 'column',
  },
  transactionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  transactionDate: {
    fontSize: 14,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SavingsScreen;
