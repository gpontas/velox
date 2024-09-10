import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { GlobalContext } from '../GlobalState';

export default function App({navigation}) {
  const { initBudget, setInitBudget, savedValueBudget, setSavedValueBudget, savedPrevBudget, setSavedPrevBudget } = useContext(GlobalContext);
  const [budget, setBudget] = useState(initBudget);

  useEffect(() => {
    if (savedValueBudget !== null && savedValueBudget !== undefined) {
      setBudget(prevBudget => prevBudget - savedValueBudget);
      setInitBudget(prevBudget => prevBudget - savedValueBudget);
      setSavedValueBudget(0);
    }
  }, [savedValueBudget]);

  const formattedBudget = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(budget);

  return (
    <View style={{ flex: 1 }}> 
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>BUDGET</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>{formattedBudget}</Text>
          </View>
        </View>
  
        {/* Categories Section */}
        <Text style={styles.categoryText}>CATEGORIES</Text>
        <Text style={styles.plusSign}>+</Text>
        <View style={styles.categoriesContainer}>
          <CategoryItem
            label="Rent"
            currentAmount="700"
            initialTotal="700"
          />
          <CategoryItem
            label="Food"
            currentAmount="224.68"
            initialTotal="400"
          />
          <CategoryItem
            label="Shopping"
            currentAmount="554.90"
            initialTotal="350"
          />
          <CategoryItem
            label="Travel"
            currentAmount="86"
            initialTotal="460"
          />
        </View>
      </ScrollView>
  
      {/* Footer Section */}
      <View style={styles.footer}> 
        <TouchableOpacity onPress={()=>navigation.navigate('MainMenu')}>
          <Text style={styles.footerIcon}>ⓥ</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>➤</Text>
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
}  

const CategoryItem = ({ label, currentAmount, initialTotal }) => {
  const [total, setTotal] = useState(initialTotal);
  const [boxColor, setBoxColor] = useState('#FFF59D'); // Default yellow background
  const [borderColor, setBorderColor] = useState('#FBC02D'); // Darker yellow border

  // Function to update the box and border colors
  const updateBoxAndBorderColor = (numericTotal, numericCurrentAmount) => {
    if (numericTotal > numericCurrentAmount) {
      setBoxColor('#C8E6C9'); // Light green
      setBorderColor('#388E3C'); // Dark green
    } else if (numericTotal < numericCurrentAmount) {
      setBoxColor('#FFCDD2'); // Light red
      setBorderColor('#D32F2F'); // Dark red
    } else {
      setBoxColor('#FFF59D'); // Light yellow
      setBorderColor('#FBC02D'); // Dark yellow
    }
  };

  // Set initial colors based on current amount and total
  useEffect(() => {
    const numericTotal = parseFloat(initialTotal);
    const numericCurrentAmount = parseFloat(currentAmount);
    updateBoxAndBorderColor(numericTotal, numericCurrentAmount);
  }, [currentAmount, initialTotal]);

  // Handle text input change and update colors
  const handleTotalChange = (newTotal) => {
    setTotal(newTotal);
    const numericTotal = parseFloat(newTotal);
    const numericCurrentAmount = parseFloat(currentAmount);
    updateBoxAndBorderColor(numericTotal, numericCurrentAmount);
  };

  return (
    <View style={[styles.categoryItem, { backgroundColor: boxColor, borderColor: borderColor }]}>
      <Text style={styles.categoryLabel}>{label}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.categoryAmount}>{currentAmount} €</Text>
        <Text style={styles.slash}> / </Text>
        <TouchableOpacity>
          <TextInput
            style={styles.categoryTotal}
            value={total}
            onChangeText={handleTotalChange}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            editable={true}
          />
</TouchableOpacity>
        <Text style={styles.euroSymbol}> €</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#F8F8F8',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balanceContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 30,
    width: '90%',
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
  plusSign: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 280,
    marginBottom: 10,
    marginTop: 20,
    padding: -10,
  },
  categoryText:{
    left: -100,
    bottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingTop: 50,
    marginBottom: -50,
    marginLeft: -30,
  },
  categoriesContainer: {
    marginTop: 10,
    width: '90%',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2, // Contour thickness
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryAmount: {
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  slash: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
  categoryTotal: {
    fontSize: 16,
    textAlign: 'center', // Center the text
    fontWeight: 'bold',
    paddingVertical: 6,  // Adds padding to make it look like a button
    paddingHorizontal: 10, // Horizontal padding for button-like feel
    margin: 0, // No margin
    width: 60, // Adjust width to fit digits
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background to contrast
    borderWidth: 1, // Adds a border to create the button effect
    borderColor: '#ccc', // Light border color
    borderRadius: 5, // Rounded corners for button effect
    shadowColor: '#000', // Optional: Add shadow to make it pop
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, // Elevation for Android shadow
    
  },
  
  euroSymbol: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  footer: {
    alignItems: 'center',
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
});
