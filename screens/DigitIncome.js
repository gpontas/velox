import React from 'react';
import { useState, useContext, useEffect} from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import { GlobalContext } from '../GlobalState';
import {LinearGradient} from 'expo-linear-gradient';

const SalaryScreen = (  ) => {

  const [enteredNumber, setEnteredNumber] = useState('');

  const [isPercentage, setIsPercentage] = useState(false);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { savedValueBudget, setSavedValueBudget } = useContext(GlobalContext);

  const { savedValueSavings, setSavedValueSavings } = useContext(GlobalContext);

  const { salaryAmount, setSalaryAmount } = useContext(GlobalContext);

  const {savedPrevBudget, setSavedPrevBudget} = useContext(GlobalContext);

  const {savedPrevSavings, setSavedPrevSavings} = useContext(GlobalContext);

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
  
  useEffect(() => {
    // Enable button only if enteredNumber is not empty
    setIsButtonDisabled(enteredNumber.trim() === '');
  }, [enteredNumber]);

  const handleSubmit = () => {
    if (isPercentage) {
      // Convert percentage input into value of salary
      const percentageValue = (parseFloat(enteredNumber) / 100) * salaryAmount;
      const percentageValueSavings = (parseFloat(100 - enteredNumber) / 100) * salaryAmount;

      setSavedValueBudget((savedPrevBudget - percentageValue));
      
      setSavedPrevBudget(percentageValue);

      setSavedValueSavings((percentageValueSavings - savedPrevSavings));
      
      setSavedPrevSavings(percentageValueSavings);

      
    } else {

      setSavedValueBudget( savedPrevBudget - enteredNumber)

      setSavedPrevBudget( enteredNumber)

      setSavedValueSavings(salaryAmount-enteredNumber-savedPrevSavings)

      setSavedPrevSavings(salaryAmount- enteredNumber)

    }
  };
  

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <LinearGradient 
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={['#00AC83', '#22E7B8']} 
        style={styles.header}>
        <Text style={styles.headerTitle}>INCOME</Text>
      </LinearGradient>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Salary Card */}
        <View style={styles.salaryCard}>
          <LinearGradient
              // gradient goes from left which is white to right which is light pink
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={['#eceaea', '#fce4ec']}
              style={styles.savingsBoxUpper}
            >
              <Text style={styles.salaryLabel}>Salary</Text>
            </LinearGradient>

            {/* Lower part with gradient green */}
            <LinearGradient
              // gradient goes from left which is light green to right which is even lighter green
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={['#13dbab', '#A6CF71']} // gradient colors for the bottom part
              style={styles.savingsBoxLower}
              >
              <Text style={styles.salaryAmount}>+ 1.200 €</Text>
            </LinearGradient>
          </View>
        {/*Date of the salary*/}
        <Text style={styles.salaryDate}>Sun 09.06.2024</Text>

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



        <TouchableOpacity 
        style={isButtonDisabled ? styles.submitPressDisabled : styles.submitPress}
        onPress={handleSubmit}
        disabled={isButtonDisabled}
        >
          <Text style={styles.submitText}>Submit</Text>
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
    marginLeft:20,
    marginTop: -20,
    marginBottom: 10,
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
    width: '87%',
    backgroundColor: '#F8F8F8',
    borderRadius: 25,
    padding: 0, // Increased padding for a larger card
    marginTop: -170,
    marginBottom: 15, // Space between the card and toggle section
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  savingsBoxUpper: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  savingsBoxLower: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#4caf50', // Green background for the savings amount
    paddingVertical: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  salaryLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    paddingTop: 10,
  },
  salaryAmount: {
    fontSize: 33, // Increased font size for the amount
    fontWeight: 'bold',
    color: '#fff', // Green for positive amount
    marginBottom: 10,
    paddingTop: 10
  },
  salaryDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 35
  },
  toggleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Reduced margin to fix toggle positioning
  },
  amountText: {
    width: 100,
    height: 60,
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
    fontSize: 40,
    fontWeight: "bold",
    color: '#000',
    marginRight: 10,
    marginLeft: 20
  },
  percentageText: {
    fontWeight: "bold",
    fontSize: 40,
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
    borderRadius: 17,
    marginTop: 30
  },
  submitPressDisabled: {
    backgroundColor: '#d3d3d3', // Gray when disabled
    padding: 10,
    borderRadius: 17,
    marginTop: 30,
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SalaryScreen;
