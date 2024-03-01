import { StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';


function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
};


export default function App() {

  const deleteElement = () => {
    setShowElement(false);
  };

  const logPress = (pressType) => {
    console.log(pressType);
  };


  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.containerLeft}>
        <View style={styles.buttonContainer}>
        <Pressable style={styles.greenButton}
        onPress={() => alert("This is supposed to add a task")}
        >
          <Text style={styles.buttonText}>{'+'}</Text>
        </Pressable>
      </View>
      </View>
      <View style={styles.containerRight}>
        <View style={styles.buttonContainer}>
        <Pressable style={styles.redButton}
        onPress={() => alert("This is supposed to remove a task")}
        >
          <Text style={styles.buttonText}>{'-'}</Text>
        </Pressable>
      </View>
      </View>
        </View>

      </SafeAreaView>
      <View style={styles.headerContainer}> 
      <Text style={styles.header}>{'ToDo'}</Text>
      </View>
      <View style={styles.appContainer}>
      <View id = '1' style={styles.checkboxContainer}>
        <MyCheckbox />
        <Text style={styles.checkboxLabel}>{`Clean Room`}</Text>
      </View>
      <View id = '2' style={styles.checkboxContainer}>
        <MyCheckbox />
        <Text style={styles.checkboxLabel}>{`Do Laundry`}</Text>
      </View>
      <View id = '3' style={styles.checkboxContainer}>
        <MyCheckbox />
        <Text style={styles.checkboxLabel}>{`Finish Homework`}</Text>
      </View>
      <View id = '4' style={styles.checkboxContainer}>
        <MyCheckbox />
        <Text style={styles.checkboxLabel}>{`Wash Dishes`}</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerLeft:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerRight:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  greenButton: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: 'green',
    marginTop: 50,
    marginLeft: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  redButton: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: 'red',
    marginTop: 50,
    marginRight: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 200,
    marginBottom: 30,

  },
  checkboxContainer: {
    marginTop: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'black',
  },
  textInputContainer:{
    borderRadius:10,
    padding: 10,
    flexDirection:"row",
    margin:15,

    borderWidth:2,
},
textBox:{
  fontFamily:'Quicksand-Medium',
  marginRight:20,
},
header:{
  fontSize: 200,
  fontWeight: 300,
},
appContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
},
});
