import React from 'react';
import { useState, useContext} from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import { GlobalContext } from '../GlobalState';

const SalaryScreen = (  ) => {

  const [enteredNumber, setEnteredNumber] = useState('');

  const [isPercentage, setIsPercentage] = useState(false);

  const { savedValue, setSavedValue } = useContext(GlobalContext);

  const salaryAmount = 1200;

  const handleSwitch = (newValue) => {
    setIsPercentage(newValue);
  
    if (newValue) {
      // Switching to percentage mode, cap the input at 100%
      let numericValue = parseFloat(enteredNumber);
      if (!isNaN(numericValue) && numericValue > 100) {
        setEnteredNumber('100');  // Cap the percentage at 100
      }
    }
  };

  function numberInputHandler(inputText) {
    if (isPercentage) {
      // For percentage input, ensure the value is between 0 and 100
      let numericValue = parseFloat(inputText);
  
      if (isNaN(numericValue)) {
        setEnteredNumber('');  // Clear input if not a valid number
      } else if (numericValue <= 100) {
        setEnteredNumber(inputText);
      } else {
        setEnteredNumber('100');  // Cap the percentage at 100
      }
    } else {
      // For Euro input, allow only numbers and restrict to 2 decimal places
      const formattedValue = inputText.replace(/[^0-9.]/g, ''); // Allow only numbers and dot
      const decimalCheck = formattedValue.split('.');
  
      if (decimalCheck.length > 1 && decimalCheck[1].length > 2) {
        return; // Prevent input with more than 2 decimal places
      }
  
      // Cap the value to the salary amount
      let numericValue = parseFloat(formattedValue);
      if (!isNaN(numericValue) && numericValue > salaryAmount) {
        setEnteredNumber(salaryAmount.toString()); // Cap at the salary amount
      } else {
        setEnteredNumber(formattedValue);
      }
    }
  }
  

  const handleSubmit = () => {
    if (isPercentage) {
      // Convert percentage input into value of salary
      const percentageValue = (parseFloat(enteredNumber) / 100) * salaryAmount;
      setSavedValue(percentageValue);
      console.log(`Saved Percentage Value: ${percentageValue} €`);
    } else {
      // Save the entered Euro value
      setSavedValue(parseFloat(enteredNumber));
      console.log(savedValue);
      console.log(`Saved Euro Value: ${savedValue} €`);
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        
        <Text style={styles.headerTitle}>INCOME</Text>
        
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Salary Card */}
        <View style={styles.salaryCard}>
          <Text style={styles.salaryLabel}>Salary</Text>
          <Text style={styles.salaryAmount}>+ {salaryAmount} €</Text>
          <Text style={styles.salaryDate}>Sun 09.06.2024</Text>
        </View>

        {/* Toggle Section */}
        <View style={styles.toggleSection}>
          <TextInput
          style={styles.amountText} 
          maxLength={!isPercentage ? 10 : 3}
          keyboardType='number-pad'    
          value={enteredNumber}
          onChangeText={numberInputHandler}    
          />
          <Text style={[styles.currencyText, !isPercentage ? styles.activeText : null]}>€</Text>
          <Switch
            value={isPercentage}
            onValueChange={handleSwitch}
            thumbColor="#f4f3f4"
            trackColor={{ false: "#767577", true: "#007BFF" }}
          />
          <Text style={[styles.percentageText, isPercentage ? styles.activeText : null]}>%</Text>
        </View>

        <TouchableOpacity style={styles.submitPress} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
        
      </View>



      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* Add icons for navigation */}
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#A6E1D9', // Green gradient background
    paddingTop: 50, // Increased padding for more height
    paddingBottom: 40, // Increase bottom padding for a larger header
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
 
  headerTitle: {
    marginLeft:125  ,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  
  content: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
  },
  salaryCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    padding: 30, // Increased padding for a larger card
    marginTop: -220,
    marginBottom: 60, // Space between the card and toggle section
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',  // Adjust width of the card
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  salaryLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  salaryAmount: {
    fontSize: 36, // Increased font size for the amount
    fontWeight: 'bold',
    color: '#4CAF50', // Green for positive amount
    marginBottom: 10,
  },
  salaryDate: {
    fontSize: 14,
    color: '#888',
  },
  toggleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Reduced margin to fix toggle positioning
  },
  amountText: {
    width: 70,
    height: 50,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#F0EFFF',
    borderRadius: 10,
    marginRight: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  currencyText: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#000',
    marginRight: 10,
  },
  percentageText: {
    fontWeight: "bold",
    fontSize: 25,
    color: '#000',
    marginLeft: 10,
  },
  activeText: {
    color: '#007BFF', // Active color (blue) when switched
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E5F8F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitPress: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  
  },
});

export default SalaryScreen;
