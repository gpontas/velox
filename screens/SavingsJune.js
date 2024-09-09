import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { height: screenHeight } = Dimensions.get('window'); // Get the height of the screen

const SavingsScreen = ( navigation ) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>SAVINGS</Text>
          <Text style={styles.moneyEmoji}>⛃</Text>
        </View>

        {/* Savings Box */}
        <View style={styles.savingsBox}>
          {/* Upper part with gradient white and the month */}
          <LinearGradient
            // gradient goes from left which is white to right which is light pink
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            colors={['#eceaea', '#fce4ec']}
            style={styles.savingsBoxUpper}
          >
            <Text style={styles.month}>June 2024</Text>
          </LinearGradient>

          {/* Lower part with gradient green */}
          <LinearGradient
            // gradient goes from left which is light green to right which is even lighter green
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            colors={['#13dbab', '#a6cf71']} // gradient colors for the bottom part
            style={styles.savingsBoxLower}
          >
            <Text style={styles.savingsAmount}>+ 597 €</Text>
          </LinearGradient>
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
    flexDirection: 'row',
    height: 65,
    width: 200,
    // backgroundColor: '#F8F8F8',
    padding: 10,
    margin: 10,
    // borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: -160,
  },
  headerText: {
    // marginLeft: 0,
    // marginTop: 3,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  moneyEmoji: {
    marginLeft: 14,
    marginTop: 4,
    fontSize: 42,
    // alignSelf: 'top',
  },
  savingsBox: {
    width: '87%',
    // alignSelf: 'center',
    borderRadius: 25,
    // padding: 30,
    overflow: 'hidden', // Ensure content stays inside the border radius
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#DAF8E5', // Light green background for savings box
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 8,
  },
  savingsBoxUpper: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    paddingVertical: 25,
  },
  savingsBoxLower: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#4caf50', // Green background for the savings amount
    paddingVertical: 25,
  },
  month: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  savingsAmount: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff', // Green color for the amount
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