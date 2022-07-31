import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({title}) => {  //destructuring uses in props space
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

Header.defaultProps = {  //How this is working little confused 
  title: "Shopping List"
};

const styles = StyleSheet.create({
  header: {
    height:60, 
    padding:15,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color:"#fff",
    fontSize: 23,
    textAlign:'center',
  }
})

export default Header