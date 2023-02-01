import { View,Text, Pressable, StyleSheet, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Yumi = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image source={require("../assets/yumimaybe2.png")} style = {styles.yumi} />
         <Pressable style={styles.pressable} onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.text}>go baackkk</Text>
    </Pressable>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignContent: 'center'
    },
    yumi: {
        flex:2
    },
    pressable: {
        height: 50,
        width: '100%',
        backgroundColor: 'silver'
    },
    text: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'white'
    }

})
export default Yumi