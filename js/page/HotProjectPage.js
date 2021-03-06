import React, {Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from "react-native-elements";
import hot from '../res/data/hot.json';
import Banner from '../common/Banner';
import navBar from '../common/NavigationBar';
import list from '../res/data/tab.json';
import TopNav from '../navigator/materialTopTabNavigator';
class HotProjectPage extends Component<Props> {
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
                 <Header placement="left" centerComponent={{ text: '热门项目', style: { color: '#333'} }} 
                    containerStyle={{backgroundColor: 'white'}} leftComponent={{ icon: 'menu', color: '#333' }}/>
                 {/* <Banner/>  */}
                <Image source={require('../res/img/b1.jpg')} style={styles.image} resizeMode="cover"/>                                         
                <TopNav></TopNav>              
         </View>
        )
    }
    renderItem({item}){
        return(
            <View style={styles.tab}>
                <Text style={styles.tabText}>{item.name}</Text>
            </View>
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
        padding:0,
        margin:0,
    },
    image:{
        width:'100%',
        height:140,
       marginTop:5
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
    tab:{
        height:50,
        padding:5,
        borderBottomWidth:1,
        borderBottomColor:'blue',
       
    },
    tabText:{
        color:'blue',
        fontSize:16
    }
})

export default  HotProjectPage;