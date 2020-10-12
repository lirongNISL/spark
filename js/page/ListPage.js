import React, {Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import hot from '../res/data/hot.json';
class ListPage extends Component<Props> {
    constructor(props) {
        super(props);
    }
    componentWillMount () {};
    componentDidMount () {};
    componentWillUpdate (nextProps, nextState) {};
    componentDidUpdate (prevProps, prevState) {};
    shouldComponentUpdate (nextProps, nextState) { return true };

    render() {
        return(                         
            <SafeAreaView >  
                <View style={{padding:0,margin:0,width:'100%'}}>
                    <FlatList  data={hot}  renderItem={this.renderProject}
                        keyExtractor={item =>item.id}/>
                </View> 
            </SafeAreaView>                      
        )
    }
   
    renderProject({item}){
        return(
          <View style={{padding: 0,marginBottom:10,width:'100%'}}>                       
              <View style={{padding:0, borderRadius:10,marginLeft:10,marginRight:10,backgroundColor:'white'}}>     
                  <Image style={styles.inistuitionImage}   resizeMode="cover" source={require('../res/img/b2.jpg')}/>
                  <View style={styles.inistuitionItem}>                   
                      <Text style={styles.name} numberOfLines={2} ellipsizeMode={'tail'}>{item.name}</Text>
                      <Text style={styles.label}>{item.label}</Text>
                      <View style={{flex:1,flexDirection:'row'}}>
                          <MaterialIcons name={'whatshot'} size={22} style={{color: 'orange',paddingTop:5}}/>
                          <Text style={styles.detail}>{item.detail}</Text>
                      </View>
                  </View>  
              </View>   
          </View>       
        )
      }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    inistuitionItem:{
        padding:10,
        margin:0,
        width:'100%'
    },
    inistuitionImage:{
        width:'100%',
        height:130,
        borderTopRightRadius:8,
        borderTopLeftRadius:8
    },
    name:{
        fontSize:16,
        textAlign:'left',
        marginTop:10,
    },
    label:{
        fontSize:14,
        color:'#9E9E9E',
        marginTop:10
       
    },
    detail:{
        fontSize:14,
        color:'orange',
        paddingTop:10
      
    },
})

export default  ListPage;