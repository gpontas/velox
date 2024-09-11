import React from 'react';
import { useState, useContext, useEffect} from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { GlobalContext } from '../GlobalState';
import {LinearGradient} from 'expo-linear-gradient';

const SalaryScreen = ( {navigation} ) => {

  const [enteredNumber, setEnteredNumber] = useState('');

  const [isPercentage, setIsPercentage] = useState(false);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {enteredShow, setEnteredShow} = useContext(GlobalContext);

  const { savedValueBudget, setSavedValueBudget } = useContext(GlobalContext);

  const { savedValueSavings, setSavedValueSavings } = useContext(GlobalContext);

  const { salaryAmount, setSalaryAmount } = useContext(GlobalContext);

  const {savedPrevBudget, setSavedPrevBudget} = useContext(GlobalContext);

  const {savedPrevSavings, setSavedPrevSavings} = useContext(GlobalContext);

  const handleSwitch = (newValue) => {
    setIsPercentage(newValue);
  
    if (newValue) {
      let numericValue = parseFloat(enteredNumber);
      if (!isNaN(numericValue) && numericValue > 100) {
        setEnteredNumber('100'); 
      }
    }
  };

  function numberInputHandler(inputText) {
    if (isPercentage) {
      let numericValue = parseFloat(inputText);
  
      if (isNaN(numericValue)) {
        setEnteredNumber('');  
      } else if (numericValue <= 100) {
        setEnteredNumber(inputText);
      } else {
        setEnteredNumber('100');  
      }
    } else {
      const formattedValue = inputText.replace(/[^0-9.]/g, ''); 
      const decimalCheck = formattedValue.split('.');
  
      if (decimalCheck.length > 1 && decimalCheck[1].length > 2) {
        return; 
      }
  
      let numericValue = parseFloat(formattedValue);
      if (!isNaN(numericValue) && numericValue > salaryAmount) {
        setEnteredNumber(salaryAmount.toString()); 
      } else {
        setEnteredNumber(formattedValue);
      }
    }
  }
  
  useEffect(() => {
    setIsButtonDisabled(enteredNumber.trim() === '');
  }, [enteredNumber]);

  const handleSubmit = () => {
    if (isPercentage) {
      const percentageValue = (parseFloat(enteredNumber) / 100) * salaryAmount;
      const percentageValueSavings = (parseFloat(100 - enteredNumber) / 100) * salaryAmount;

      setEnteredShow(enteredNumber);

      setSavedValueBudget((savedPrevBudget - percentageValue));
      
      setSavedPrevBudget(percentageValue);

      setSavedValueSavings((percentageValueSavings - savedPrevSavings));
      
      setSavedPrevSavings(percentageValueSavings);

      
    } else {

      setEnteredShow(((parseFloat(enteredNumber) / salaryAmount) * 100));
      setSavedValueBudget( savedPrevBudget - enteredNumber)

      setSavedPrevBudget( enteredNumber)

      setSavedValueSavings(salaryAmount-enteredNumber-savedPrevSavings)

      setSavedPrevSavings(salaryAmount- enteredNumber)

    }
  
    return;
  };
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <LinearGradient 
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={['#00AC83', '#22E7B8']} 
        style={styles.header}>
        <Text style={styles.headerTitle}>INCOME</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.salaryCard}>
          <LinearGradient
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={['#eceaea', '#fce4ec']}
              style={styles.savingsBoxUpper}
            >
              <Text style={styles.salaryLabel}>Salary</Text>
            </LinearGradient>

            <LinearGradient
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={['#13dbab', '#A6CF71']} 
              style={styles.savingsBoxLower}
              >
              <Text style={styles.salaryAmount}>+ 1.200 €</Text>
            </LinearGradient>
          </View>
        <Text style={styles.salaryDate}>Sun 09.06.2024</Text>

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
        onPress={async() => {
        await handleSubmit(); 

        console.log(savedValueBudget);
          
        navigation.navigate('IncomeFixed')}}

        disabled={isButtonDisabled}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        
      </View>



      {/* Bottom Navigation */}
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#A6E1D9',
    paddingTop: 50,
    paddingBottom: 40, 
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
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  salaryCard: {
    width: '87%',
    backgroundColor: '#F8F8F8',
    borderRadius: 25,
    padding: 0, 
    marginTop: -140,
    marginBottom: -20, 
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  savingsBoxUpper: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  
    paddingVertical: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    
  },
  savingsBoxLower: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
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
    fontSize: 33, 
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 10,
    paddingTop: 10
  },
  salaryDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 50,
    marginBottom: 20
  },
  toggleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
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
    color: '#007BFF', 
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
    marginHorizontal: -30,
  },
  footerIcon: {
    fontSize: 35,
  },
  submitPress: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 17,
    marginTop: 30
  },
  submitPressDisabled: {
    backgroundColor: '#d3d3d3', 
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
