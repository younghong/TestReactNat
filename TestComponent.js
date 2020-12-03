import React from 'react';
import {Text , View ,StyleSheet, ScrollView} from 'react-native';

const Greeting = (props) => {

    return (
        <View style={styles.box}>
            <Text style={styles.row1}>{props.date}</Text>
            <Text style={styles.row2}>{props.atm}</Text>
            <Text style={styles.row3}>{props.name}</Text>
        </View>
    )

}


const TestComponent = () => {

    return(
        
        <ScrollView style={styles.container}>
            <Greeting name='점심' date='12/01' atm='9,000'  />
            <Greeting name='간식' date='12/02' atm='29,000'  />
            <Greeting name='쇼핑' date='12/03' atm='19,000'  />
            <Greeting name='쇼핑0' date='12/03' atm='19,000'  />
            <Greeting name='쇼핑1' date='12/03' atm='19,000'  />
            <Greeting name='쇼핑2' date='12/03' atm='19,000'  />
            <Greeting name='쇼핑3' date='12/03' atm='19,000'  />
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#555555',
        },

        box:{
            flexDirection:"row",
            backgroundColor:'#000000',
            borderColor: '#121212',
            borderRadius:2,
            paddingTop:5,
            marginTop:10,
            marginBottom:10,
            minHeight:150
        },

        row1: {
            fontSize:30,
            width:100,
            color:'#ff9d00'
          },
          row2: {
            fontSize:25,
            width:100,
            color:'#ff9d00'
          },
          row3: {
            fontSize:40,
            width:'100%',
            color:'#ff9d00'
            
          }


    }
)

export default TestComponent;