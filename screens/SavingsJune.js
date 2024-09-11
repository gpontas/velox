import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { height: screenHeight } = Dimensions.get('window'); 

const SavingsScreen = (navigation) => {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>SAVINGS</Text>
          <Text style={styles.moneyEmoji}>⛃</Text>
        </View>

        <View style={styles.savingsBox}>
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            colors={['#eceaea', '#fce4ec']}
            style={styles.savingsBoxUpper}
          >
            <Text style={styles.month}>June 2024</Text>
          </LinearGradient>

          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            colors={['#13dbab', '#a6cf71']}
            style={styles.savingsBoxLower}
          >
            <Text style={styles.savingsAmount}>+ 597 €</Text>
          </LinearGradient>
        </View>

        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionsTitle}>LAST TRANSACTIONS</Text>
        </View>

        <ScrollView style={styles.transactionsContainer}>
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
        </ScrollView>
      


      <View style={styles.footer}> 
        <TouchableOpacity onPress={()=>navigation.navigate('MainMenu')}>
          <Text style={styles.footerIcon}>ⓥ</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>➤ </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>↯</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>⚙︎</Text>
        </TouchableOpacity>
      </View>
    
      
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
    backgroundColor: '#F8F8F8', 
  },
  scrollViewContainer: {
    minHeight: screenHeight, 
    justifyContent: 'center', 
    alignItems: 'center', 
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
    marginTop: 0,
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
    padding: 0,
    marginBottom: 20,
    alignSelf: "center",
    alignItems: 'center',
    backgroundColor: '#F8F8F8', 
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  savingsBoxUpper: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    paddingVertical: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  savingsBoxLower: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
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
    color: '#fff', 
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
  footer: {
    alignItems:"center",
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    marginHorizontal: -20,
  },
  footerIcon: {
    fontSize: 35,
  },
});

export default SavingsScreen;