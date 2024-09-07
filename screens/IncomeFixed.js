import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react'; 

const IncomeScreen = ( {navigation} ) => {

  const [selectedTab, setSelectedTab] = useState('Fixed');

  const backgroundColor = selectedTab === 'Fixed' ? '#a1c4fd' : '#c2e9fb';

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>INCOME</Text>
        <View style={styles.tabContainer}>
          <Pressable onPress={() => setSelectedTab('Fixed')} style={styles.tabActive}>
            <TouchableOpacity>
              <Text style={styles.tabTextActive} onPress={() => setSelectedTab('Fixed')}>Fixed</Text>
            </TouchableOpacity>
          </Pressable>

          <Pressable onPress={() => setSelectedTab('Dynamic')} style={styles.tabInactive}>
            <TouchableOpacity>
              <Text style={styles.tabTextInactive} onPress={() => setSelectedTab('Dynamic')} >Dynamic</Text>
            </TouchableOpacity>
          </Pressable>
        

        </View>
      </View>

      {/* Date Filter */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateFilter}>
        {['FEB', 'MAR', 'APR', 'MAY', 'JUN'].map((month, index) => (
          <TouchableOpacity key={index} style={month === 'JUN' ? styles.selectedMonth : styles.monthItem}>
            <Text style={month === 'JUN' ? styles.selectedMonthText : styles.monthText}>{month}</Text>
          </TouchableOpacity>
        ))}
        <Text style={styles.yearText}>2024</Text>
      </ScrollView>

      {selectedTab === 'Fixed' ? (
          <ScrollView contentContainerStyle={styles.incomeContainer}>
          <IncomeItem label="Salary" date="Sun 09.06.2024" amount="+ € 1257" percentage="80" moneyicon= "%" />
          <IncomeItem label="Tenant from Rome" date="Fri 07.06.2024" amount="+ € 750" percentage="500" moneyicon= "€"/>
          <IncomeItem label="Tenant from Napoli" date="Fri 07.06.2024" amount="+ € 460" percentage="460" moneyicon= "€"/>
          <IncomeItem label="Family Fund" date="Wed 05.06.2024" amount="+ € 600" percentage="50" moneyicon= "%"/>
          <IncomeItem label="Freelancing Gig" date="Tue 09.06.2024" amount="+ € 600" percentage="100" moneyicon= "%" />
        </ScrollView>
        ) : (
          <ScrollView contentContainerStyle={styles.incomeContainer}>
        <IncomeItem label="Aruta" date="Wed 12.06.2024" amount="+ 15,00 €" percentage="100" moneyicon= "%" />
        <IncomeItem label="Gustavo" date="Fri 07.06.2024" amount="+ 250,00 €" percentage="200" moneyicon= "€"/>
        <IncomeItem label="Amazon reimb.." date="Wed 05.06.2024" amount="+ 68,64 €" percentage="100" moneyicon= "%" />
        <IncomeItem label="Asli" date="Fri 07.06.2024" amount="+ 26,70 €" percentage="15" moneyicon= "€"/>
        <IncomeItem label="Mom" date="Tue 09.06.2024" amount="+ 100,00 €" percentage="100" moneyicon= "%"/>
      </ScrollView>
        )}
      {/* Income Items */}
      

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* Add icons here */}
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
      </View>
    </View>
  );
};

const IncomeItem = ({ label, date, amount, percentage, moneyicon }) => {
  return (
    <View style={styles.incomeItem}>
      <View style={styles.incomeDetails}>
        <Text style={styles.incomeLabel}>{label}</Text>
        <Text style={styles.incomeDate}>{date}</Text>
        <Text style={styles.incomeAmount}>{amount}</Text>
      </View>
      <View style={styles.incomeStatsContainer}>
        <View style={styles.incomeStats}>
          <Text style={styles.incomePercentage}>{percentage}{moneyicon}</Text>
          <Text style={styles.incomeBudgetText}>in the budget</Text>
        </View>
        {/* Vertically Flipped Triangular Shape */}
        <View style={styles.percentageTriangle}></View>
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
    backgroundColor: '#A6E1D9',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#E5F8F4',
    borderRadius: 15,
    padding: 5,
  },
  tabActive: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  tabInactive: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabTextActive: {
    color: '#333',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: '#888',
  },
  dateFilter: {
    marginTop: 10,
    paddingLeft: 20,
  },
  monthItem: {
    marginRight: 15,
    paddingVertical: 10,
  },
  monthText: {
    color: '#888',
  },
  selectedMonth: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  selectedMonthText: {
    color: '#333',
    fontWeight: 'bold',
  },
  yearText: {
    color: '#888',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  incomeContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100, // for spacing above the bottom navigation
  },
  incomeItem: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  incomeDetails: {
    flexDirection: 'column',
  },
  incomeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  incomeDate: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  incomeAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  incomeStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  incomeStats: {
    alignItems: 'center',
    marginRight: 20, // Space between text and the triangle
  },
  incomePercentage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A673D4', // Purple color for the percentage
  },
  incomeBudgetText: {
    fontSize: 12,
    color: '#888',
  },
  percentageTriangle: {
    paddingVertical:18,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 0,
    height: 0,
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderTopWidth: 40,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#C8A3E1', // Light purple for the triangle
    transform: [{ rotateZ: '90deg' }], // Flip vertically
    marginLeft: -15, // Shift the triangle slightly to overlap the card
    
    
    
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
});

export default IncomeScreen;
