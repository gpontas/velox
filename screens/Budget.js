
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { GlobalContext } from '../GlobalState';

export default function App( navigation) {

  const { initBudget}  = useContext(GlobalContext);

  const {setInitBudget} = useContext(GlobalContext);
  
  const { savedValueBudget } = useContext(GlobalContext);

  const { setSavedValueBudget } = useContext(GlobalContext);

  const {savedPrevBudget, setSavedPrevBudget} = useContext(GlobalContext);

  const [budget, setBudget] = useState(initBudget);

  useEffect(() => {
    if (savedValueBudget !== null && savedValueBudget !== undefined) {
      // Use the previous budget value to apply the subtraction
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
        <Text style={styles.categoriesText}>CATEGORIES</Text>
        <Text style={styles.plusSign}>+</Text>
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
  
      {/* Footer Section */}
      <View style={styles.footer}> 
        <TouchableOpacity>
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
    backgroundColor: '#F8F8F8',
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
    backgroundColor: '#F8F8F8',
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
  plusSign:{
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 250,
    marginRight: -45,
    marginBottom: 10,
    marginTop: 20,
    padding: -10,
  },
  categoriesText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: -50,
    marginLeft: -200,
    marginTop: 25,
  },
  categoriesContainer: {
    marginTop: 10,
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
});

