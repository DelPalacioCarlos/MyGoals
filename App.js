import { useState } from 'react';
import { StyleSheet, View, FlatList  } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals]= useState([])

  function handleAddGoal
  (enteredGoalText){
    //console.log(enteredGoalItem)
    // console.log('hello You')
    setGoals(()=> [...goals,{Text: enteredGoalText, key: Math.random().toString()} ])
      console.log('goals', goals)
      console.log('handleAddGoal')
    
  }
  function handleDeleteGoal(id){
    console.log('DELETE')
    const deleteGoal= goals.filter((goal)=> {return goal.key !== id })
    setGoals(deleteGoal)
  }

return(
  <View style={styles.container}>
  
  <GoalInput 
  onAddGoal={handleAddGoal}
  />
  <View
 style={styles.goalsContainer}>
  <FlatList
  data={goals}
  renderItem={ (itemData) =>{
    return(
      //<view style={styles.goalsItem}>
      // <text styles.goaltext}>{itemData.item.text}</text
      //</view>
      <GoalItem
      itemData={itemData}
      onDeleteItem={handleDeleteGoal}
      id={itemData.item.key}
      />
    )
  }}
  keyExtractor={(item)=> {
    return item.id
  }}
  />
  </View>
  </View>
);


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:20,
  },
  inputContainer:{
    flex:1,
    flexdirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#7BC9FF'
  },
  btnGoal:{
    borderRadius:20,
    backgroundColor:'#cccccc'

  },
  textInput:{
    borderWidth:1, 
    borderColor:'#cccccc',
    width:'80%',
    marginRight:3,
    padding:8,
    borderRadius:5
  },
  goalsContainer:{
    flex:5
  },
});
