import React from 'react';
import {Text , View ,StyleSheet, ScrollView} from 'react-native';

const Greeting = (props) => {

    return (
        <View style={styles.box}>
            <Text style={styles.row1}>{props.date} 일</Text>
            <Text style={styles.row2}>{props.atm} 원</Text>
            <Text style={styles.row3}>{props.name}</Text>
        </View>
    )

}


const TestComponent = () => {

    return(
        
        <ScrollView style={styles.container}>
            <Greeting name='카드 ' date='01' atm='300,000'  />
            <Greeting name='전세대출이자' date='02' atm='380,000'  />
            <Greeting name='월세' date='02' atm='40,000'  />
            <Greeting name='신용대출' date='12' atm='130,000'  />
            <Greeting name='의료실비보험' date='23' atm='110,000'  />
            <Greeting name='운전자보험' date='23' atm='10,000'  />
            <Greeting name='대출금' date='26' atm='2,000,000'  />
            <Greeting name='관리비' date='26' atm='200,000'  />
            <Greeting name='생활비' date='26' atm='150,000'  />
            <Greeting name='인터넷' date='26' atm='50,000'  />
        </ScrollView>
    )
}



const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#ff9d00',
        },

        box:{
            flexDirection:"row",
            backgroundColor:'#000000',
            borderColor: '#ff9d00',
            borderRadius:2,
            paddingTop:15,
            paddingLeft:20,
            marginTop:2,
            marginBottom:0,
            marginLeft:5,
            marginRight:5,
            minHeight:60
        },

        row1: {
            fontSize:20,
            width:80,
            color:'#ff9d00'
          },
          row2: {
            fontSize:20,
            width:170,
            color:'#ff9d00',
            
          },
          row3: {
            fontSize:20,
            width:'100%',
            color:'#ff9d00'
            
          }


    }
)

export default TestComponent;