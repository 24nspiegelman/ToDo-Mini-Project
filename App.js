import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, icons } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component'; 


export default function App() {

  const header = ['Task', 'Completed?']
  const data = [['Task 1', '✓'],
                ['Task 2', 'x']

]
  return (
    <View>
      <SafeAreaView>
      <Pressable
        id="addTask"
        title="+"
        style = {styles.button}
        onLongPress={()=>Alert.alert('Long Press')}
        onPress={()=>Alert.alert('Button Pressed')}
        color = "#f194ff"

        >
          <View style={styles.buttonContainer}><Text style={styles.buttonText}>+</Text></View>
        </Pressable>
      </SafeAreaView>
    <View style={styles.container}>
    <View style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 2,  
                borderColor: 'black' }}> 
                <Row data={header} /> 
                <Rows data={data} /> 
            </Table> 
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: 'green',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor:'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonText: {
    fontSize: 100,
  },
  tableContainer :{
    flex: 1,
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
});
