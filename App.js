import { StyleSheet, Text, View ,Dimensions,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const App = () => {
  const [value,setValue]=useState({values: [0,37],})
  const multiSliderValuesChange = (values) => {
    setValue({
        values,
    });
}
  return (
    <View style={styles.container}>
   
    <Text style={styles.slider_Length}>slider</Text>

   <View style={styles.slider_box}>
    
     <Text style={styles.Text}>slider</Text>
     <MultiSlider
     values={[value.values[0],value.values[1]]}
     sliderLength={200}
     selectedStyle={{backgroundColor:'#CD5808',}}
     containerStyle={{alignSelf:'center',marginTop:-10}}
     onValuesChange={multiSliderValuesChange}
     markerStyle={{
       ...Platform.select({
         android: {
           height: 13,
           width: 13,
           borderRadius: 50,
           backgroundColor: '#CD5808'
         }
       })
     }}
     min={0}
     max={37}
     step={1}
     />
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:-20}}>
     <Text style={{color:'#DBDBDB'}}>{value.values[0]} min</Text>
     <Text style={{fontSize:20,color:'#DBDBDB'}}> - </Text>
     <Text style={{color:'#DBDBDB'}}>{value.values[1]} max </Text>
     </View>
     </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#000000'},
  slider_Length:{color:'#ffffff',
  fontSize:22,
  alignSelf:'center',
  marginTop:20},
  slider_box:{width:Dimensions.get('window').width-60,
  height:86,
  marginHorizontal:28,
  backgroundColor:'rgba(255, 255, 255, 0.19)',
  borderRadius:10,
  marginTop:17,
},
Text:{color:'#FFFFFF',
fontSize:20,
marginHorizontal:10,
marginTop:10
}

})