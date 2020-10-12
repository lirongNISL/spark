import React, {Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import hot from '../res/data/hot.json';
import GlobalStyles from '../res/styles/GlobalStyles';
class ProjectList extends Component<Props> {
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
            <View style={styles.container}>
                <FlatList  data={hot}  renderItem={this.renderProject}
                        keyExtractor={item =>item.id}/>
            </View>                             
        )
    }
   
    renderProject({item}){
        return(                                                    
            <View>                 
              <View style={styles.Cards}>     
                  <Image style={styles.left}  resizeMode="cover" source={require('../res/img/s1.png')}/>
                  <View style={styles.right}>                                                                              
                      <Text style={styles.name} numberOfLines={2} ellipsizeMode={'tail'}>{item.name}</Text>
                      <Text style={styles.label}>{item.label}</Text>
                      <View style={{flex:1,flexDirection:'row'}}>
                          <MaterialIcons name={'whatshot'} size={22} style={{color: 'orange',paddingTop:5}}/>
                          <Text style={styles.detail}>{item.detail}</Text>
                      </View>
                  </View>  
              </View>
              <View style={GlobalStyles.line}/>   
           </View>
        )
      }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:0,
        margin:0,
        width:'100%',
        backgroundColor:'white'
    },
    Cards:{
        height:150,
        flexDirection:'row',
        flex:1,
    },
    left:{
      flex:1,
      height:150,
      paddingTop:25,
      paddingLeft:10
    },
    right:{
      flex:3,
      marginTop:10,
      paddingLeft:20,
      height:150
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

export default  ProjectList;