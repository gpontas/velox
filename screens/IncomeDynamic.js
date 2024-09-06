import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const IncomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>INCOME</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabTextInactive}>Fixed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Dynamic</Text>
            <View style={styles.selectionBar}></View>
          </TouchableOpacity>
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

      {/* Income Items */}
      <ScrollView contentContainerStyle={styles.incomeContainer}>
        <IncomeItem label="Aruta" date="Wed 12.06.2024" amount="+ 15,00 €" percentage="100" moneyicon= "%" />
        <IncomeItem label="Gustavo" date="Fri 07.06.2024" amount="+ 250,00 €" percentage="200" moneyicon= "€"/>
        <IncomeItem label="Amazon reimb.." date="Wed 05.06.2024" amount="+ 68,64 €" percentage="100" moneyicon= "%" />
        <IncomeItem label="Asli" date="Fri 07.06.2024" amount="+ 26,70 €" percentage="15" moneyicon= "€"/>
        <IncomeItem label="Mom" date="Tue 09.06.2024" amount="+ 100,00 €" percentage="100" moneyicon= "%"/>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* Add icons */}
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
      </View>
    </View>
  );
};

const IncomeItem = ({ label, date, amount, percentage, moneyicon}) => {
  return (
    <View style={styles.incomeItem}>
      <View style={styles.incomeDetails}>
        <Text style={styles.incomeLabel}>{label}</Text>
        <Text style={styles.incomeDate}>{date}</Text>
        <Text style={styles.incomeAmount}>{amount}</Text>
      </View>
      <View style={styles.incomeStatsContainer}>
        <View style={styles.incomeStats}>
          <Text style={styles.incomePercentage}>{percentage} {moneyicon}</Text>
          <Text style={styles.incomeBudgetText}>in the budget</Text>
        </View>
        {/* Right-Aligned Green Triangle */}
        <View style={styles.triangle}></View>
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
    backgroundColor: '#DCC0FF',
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
    color: '#3D0859',
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#EEDCFF',
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
    color: '#3D0859',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: '#888',
  },
  selectionBar: {
    width: '100%',
    height: 3,
    backgroundColor: '#3D0859',
    marginTop: 5,
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
    color: '#3D0859',
    fontWeight: 'bold',
  },
  yearText: {
    color: '#888',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  incomeContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
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
    color: '#4CAF50',
  },
  incomeStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  incomeStats: {
    
    alignItems: 'center',
    marginRight: 70,
  },
  incomePercentage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3D0859',
  },
  incomeBudgetText: {
    fontSize: 12,
    color: '#888',
  },
  triangle: {
    marginRight:-30,
    width: 0,
    height: 0,
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderBottomWidth: 40,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#A6E1D9',
    position: 'absolute',
    right: 0,
    top: '0%',
    transform: [{ rotateZ: '270deg' }],
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
