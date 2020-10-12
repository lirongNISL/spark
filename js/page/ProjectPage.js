import React, {Component} from 'react';
import {StyleSheet,  Button, Text, View } from 'react-native';
import {SearchBar,Icon,Header} from 'react-native-elements';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Page0 from "../page/ProjectList";
import Page1 from "../page/ListPage";
const style = StyleSheet.create({
    tabStyle:{
        paddingRight:15,
        width:'auto',
       
    },
    labelStyle:{
        fontSize:13,
        margin:0
    },
    indicatorStyle:{
        height:0,
        backgroundColor:'blue',
    }
   
});

const TopBar = createAppContainer(createMaterialTopTabNavigator({
  Page0: {
      screen: Page0,
      navigationOptions: {
          tabBarLabel: "路演项目",
      }
  },
  Page1: {
      screen: Page1,
      navigationOptions: {
          tabBarLabel: "展示项目",
      }
  },
},
{
    navigationOptions:{
        headerShown:false,       
    },
    tabBarOptions:{
        activeTintColor:'white',
        activeBackgroundColor:'blue',
        inactiveTintColor:'blue',
        inactiveBackgroundColor:'white',
        tabStyle:style.tabStyle,
        scrollEnabled:true,   //是否支持选项左右滚动，默认为false
        style:{
                // backgroundColor:'blue',   //tabbar背景颜色          
                marginBottom:5,
                width:"40%",
                padding:0,
                marginLeft:"30%",
                marginRight:"30%",
                marginTop:5,
                marginBottom:5,
                borderRadius:20,
                borderColor:'blue'
                
        },
        indicatorStyle:style.indicatorStyle,  //标签指示器样式
        labelStyle:style.labelStyle     //文字样式
            
        },
        swipeEnabled:true,
    }
))




type Props = {};
class ProjectPage extends Component<Props> {
    constructor(props) {
        super(props);
    }
    state = {
        search: '',
    };
    render() {
        const { search } = this.state;
        return (
        <View style={styles.container}>
             <Header placement="left" centerComponent={{ text: '项目', style: { color: '#333'} }} 
                    containerStyle={{backgroundColor: 'white'}}/>
            <View style={styles.search}>
                    <SearchBar  style={styles.searchs} lightTheme={true} round placeholder="项目 | 投资人" 
                    containerStyle={styles.searchContainer}
                    searchIcon={{color:'#333',backgroundColor:'transparent',fontSize:'28'}}
                    inputContainerStyle={styles.inputContainerStyle}  
                    inputStyle={{backgroundColor:'white'}}  
                            
                    onChangeText={this.updateSearch} value={search}/>
            </View>
            <View style={{flex:1}}>
                <TopBar/>
            </View>  
        </View>
    )}
}


export default ProjectPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
     // 搜索栏
     search:{
        backgroundColor:'transparent',
        marginBottom:0,
        borderColor:'transparent'
    },
    searchs:{
        backgroundColor:'white',
        opacity:0.8,
        height: 50,
        borderWidth:0,
        shadowColor:'white'
    },
    searchContainer:{
      width:'100%',
      backgroundColor:'white',
      borderWidth:0,
      shadowColor:'white',
      borderBottomColor:'transparent',
      borderTopColor:'transparent'
    },
    inputContainerStyle:{
       
    },
});




         