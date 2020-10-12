// import { createMaterialTopTabNavigator } from '@react-navigation/top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Page0 from "../page/ListPage";
import Page1 from "../page/ListPage";
import Page2 from "../page/ListPage";
import Page3 from "../page/ListPage";
import Page4 from "../page/ListPage";
import Page5 from "../page/ListPage";
import Page6 from "../page/ListPage";
import Page7 from "../page/ListPage";
import Page8 from "../page/ListPage";

import tab from '../res/data/tab.json';

const styles = StyleSheet.create({
    tabStyle:{
        paddingRight:15,
        width:'auto',
    },
    labelStyle:{
        fontSize:13,
        margin:0
    },
    indicatorStyle:{
        height:2,
        backgroundColor:'blue',
    }
})

const TopNav =createAppContainer(createMaterialTopTabNavigator({
  // config
Page0: {
    screen: Page0,
    navigationOptions: {
        tabBarLabel: tab[0].name,
    }
},
Page1: {
    screen: Page1,
    navigationOptions: {
        tabBarLabel: tab[1].name,
    }
},
Page2: {
    screen: Page2,
    navigationOptions: {
        tabBarLabel: tab[2].name,
    }
},
Page3: {
    screen: Page3,
    navigationOptions: {
        tabBarLabel: tab[3].name,
    }
},
Page4: {
    screen: Page4,
    navigationOptions: {
        tabBarLabel: tab[4].name,
    }
},
Page5: {
    screen: Page5,
    navigationOptions: {
        tabBarLabel: tab[5].name,
    }
},
Page6: {
    screen: Page6,
    navigationOptions: {
        tabBarLabel: tab[6].name,
    }
},
Page7: {
    screen: Page7,
    navigationOptions: {
        tabBarLabel: tab[7].name,
    }
},
Page8: {
    screen: Page8,
    navigationOptions: {
        tabBarLabel: tab[8].name,
    }
}
},{
    navigationOptions:{
        headerShown:false,       
    },
    tabBarOptions:{
        activeTintColor:'blue',
        inactiveTintColor:'#333333',
        tabStyle:styles.tabStyle,
        scrollEnabled:true,   //是否支持选项左右滚动，默认为false
        style:{
            backgroundColor:'white',   //tabbar背景颜色          
            marginBottom:5,
            minWidth:50,
            padding:0,
            marginRight:0,marginLeft:0
        },
        indicatorStyle:styles.indicatorStyle,  //标签指示器样式
        labelStyle:styles.labelStyle     //文字样式
        
    },
    swipeEnabled:true,
})
)


export default TopNav;

