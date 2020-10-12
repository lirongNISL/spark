import React, {Component} from 'react';
import {StyleSheet,  Text, View, FlatList,RefreshControl} from 'react-native';
import {Card, ListItem, Button, SearchBar,Icon,Header } from 'react-native-elements';

type Props = {};
const list=[{
    id:1,
    image:require('../res/img/p1.jpg'),
    title:"纳米孔基因测序仪",
    detail:" 近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗... ",
    place:" 四川,成都"
},{
    id:2,
    image:require('../res/img/p3.jpg'),
    title:"纳米孔基因测序仪",
    detail:" 近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗... ",
    place:" 四川,成都"
},{
    id:3,
    image:require('../res/img/p1.jpg'),
    title:"纳米孔基因测序仪",
    detail:" 近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗... ",
    place:" 四川,成都"
},{
    id:4,
    image:require('../res/img/p3.jpg'),
    title:"纳米孔基因测序仪",
    detail:" 近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗... ",
    place:" 四川,成都"
},{
    id:5,
    image:require('../res/img/p1.jpg'),
    title:"纳米孔基因测序仪",
    detail:" 近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗... ",
    place:" 四川,成都"
},{
    id:6,
    image:require('../res/img/p3.jpg'),
    title:"纳米孔基因测序仪",
    detail:" 近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗... ",
    place:" 四川,成都"
}]



class ActivityPage extends Component<Props> {
    constructor(props) {
        super(props)
    } 
    state = {
        search: '',
        dataList: list,
        isLoading: false,
    };
    updateSearch = (search) => {
        this.setState({ search });
    };
    renderList({item}){
        return (
                <Card image={item.image} style={styles.Cards}>
                    <Text style={{marginBottom: 5,color:'#000',fontWeight:'bold'}}>{item.title}</Text>
                    <Text style={{marginBottom: 5}}>{item.detail}</Text>
                    <Text style={{marginBottom: 5,color:'gray'}}>{item.place}</Text>       
                </Card>
            )
       
    }
    loadData(refresh) {
        if (refresh) {
            this.setState({
                isLoading: true
            });
        }
        setTimeout(() => {
            let dataList = [];
            if (refresh) {
                for (let i = this.state.dataList.length - 1; i >= 0; i--) {
                    dataList.push(this.state.dataList[i]);
                }
            } else {
                dataList = this.state.dataList.concat(list);
            }
            this.setState({
                dataList: dataList,
                isLoading: false
            });
        }, 500);
    }
    render() {
        const { search,dataList,isLoading} = this.state;
        return (
            <View style={styles.container}>
                <Header placement="left" centerComponent={{ text: '活动', style: { color: '#333'} }} 
                    containerStyle={{backgroundColor: 'white'}}/>
                <View style={styles.search}>
                    <SearchBar  style={styles.searchs} lightTheme round placeholder="活动名称 | 活动地点" 
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={styles.inputContainerStyle}
                    onChangeText={this.updateSearch} value={search}/>
                </View>  
                <View style={{padding:0,margin:0,width:'100%'}}>
                    <FlatList ref="flatlist"  data={dataList}                     
                    renderItem={this.renderList} keyExtractor={item =>item.id}
                    refreshControl={
                        <RefreshControl
                            title='Loading...'
                            colors={['red']}
                            refreshing={isLoading}
                            onRefresh={() => this.loadData(true)}
                            tintColor={'orange'}
                        />
                    }
                    onEndReached={() => this.loadData()}
                    />
                </View>               
        </View>
        )
    }
}


export default ActivityPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        backgroundColor:'white',
        
    },
     // 搜索栏
     search:{
        backgroundColor:'transparent',
        // opacity:0.8,
        // color:'#fff',
        // height: 50,
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
        height:170
    },
});
