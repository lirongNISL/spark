
import React, {Component} from 'react';
import {StyleSheet,  Text, View, FlatList,Image, Alert} from 'react-native';
import {Card, ListItem, Button, SearchBar,Icon,Avatar,Header } from 'react-native-elements';
import GlobalStyles from '../res/styles/GlobalStyles';
import imgList from './imgList';
type Props = {};

class InvestorPage extends Component<Props> {
    constructor(props) {
        super(props);
    }
    state = {
        search: '',
    };
    updateSearch = (search) => {
        this.setState({ search });
    };
    
    renderItem({item}){    
        return(
            <View>
                <View style={styles.Cards}>  
                           
                    <Avatar style={styles.left} size="large" rounded source={item.image} onPress={() => { }} activeOpacity={0.7}/>
                    <View style={styles.right}>                                                              
                        <Text class="mz_name left">{item.name}</Text>
                        <View >                                               
                            <Text style={{color:'#797979'}}>{item.label}</Text>
                        </View>
                        <View>                           
                            <Text style={{color:'#797979'}}>{item.limit}</Text>  
                            <Text>{item.detail}</Text>                         
                        </View>                                             
                    </View>                 
                </View>
                <View style={GlobalStyles.line}/>
            </View>        
        )
    }

    render() {
        const { search } = this.state;
        return (
        <View style={styles.container}>
             <Header placement="left" centerComponent={{ text: '投资人', style: { color: '#333'} }} 
                    containerStyle={{backgroundColor: 'white'}}/>
            <View style={styles.search}>
                    <SearchBar  style={styles.searchs} lightTheme round placeholder="项目 | 投资人" 
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={styles.inputContainerStyle}
                    onChangeText={this.updateSearch} value={search}/>
            </View>    
            <View style={{padding:0,margin:0,width:'100%'}}>
                    <FlatList  data={imgList}  renderItem={this.renderItem}
                        keyExtractor={item =>item.id}/>
            </View>                    
        </View>
        )
    }
}


export default InvestorPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
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

    Cards:{
        height:170,
        flexDirection:'row',
        flex:1,
    },
    left:{
      flex:1,
      width:100,
      height:120,
      paddingTop:25
    },
    right:{
      flex:3,
      marginTop:20,
      paddingLeft:20
    }
});
