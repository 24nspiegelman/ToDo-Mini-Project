import { StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';

const tasks = [
  {
    key: "1",
    name: "task 1",
    completed: "yes"
  },
  {
    key: "2",
    name: "task 2",
    completed: "no"
  },
  {
    key: "3",
    name: "task 3",
    completed: "yes"
  }
];

const TextInputWithModal = ()=>{
  const [modalVisible, setModalVisible] = React.useState(false);
  const [AllatNev,setAllatNev]= React.useState("");
  return (
    <View style={styles.textInputContainer}>
       <TextInput
        placeholder="Állat neve"
        value={AllatNev}
        style={styles.textBox}
        onChangeText={(text) => setAllatNev(text)}
        />
        
        <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
          <AntDesign name="infocirlceo" size={24} color="black" />
        </TouchableOpacity>
      <ModalInfo modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  )
}

function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

function addTask() {

}

export default function App() {

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

      </View>
      <View style={styles.appContainer}>
      <View style={styles.checkboxContainer}>
        <MyCheckbox />
        <Text style={styles.checkboxLabel}>{`Task 1!`}</Text>
      </View>
    </View>
      <View style={styles.container}>
      {tasks.map((task) => {
        return (
          <View>
            <Text style={styles.item}>{task.name} | {task.completed}</Text>
          </View>
        );
      })}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonText: {
    fontSize: 100,
  },
  tableContainer :{
    flex: 1,
    height: 800,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginTop: 100,
    marginBottom: 100
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    marginTop: 50,
    justifyContent: 'center',
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
});
