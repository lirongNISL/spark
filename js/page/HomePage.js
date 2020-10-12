import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomTheme from '../page/CustomTheme';
import actions from '../action';
import {StyleSheet,Text, View, Image,FlatList, RefreshControl, TouchableOpacity,ScrollView,ActivityIndicator,Dimensions,Animated,DeviceEventEmitter,TouchableWithoutFeedback} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Banner from '../common/Banner';
import {Card, ListItem, Button, SearchBar,Icon ,Header} from 'react-native-elements';
import GlobalStyles from '../res/styles/GlobalStyles';
import {MORE_MENU} from '../common/MORE_MENU';
import ViewUtil from '../util/ViewUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import hot from '../res/data/hot.json';

type Props = {};
// const Window_width = Dimensions.get('window').width;
// const Window_height = Dimensions.get('window').height;
class HomePage extends Component<Props> {
    constructor(props) {
        super(props);
    }
    state = {
        search: '',
    };
    componentWillMount () {};
    componentDidMount () {};
    componentWillUpdate (nextProps, nextState) {};
    componentDidUpdate (prevProps, prevState) {};
    shouldComponentUpdate (nextProps, nextState) { return true };
    onClick(menu) {
        const {theme} = this.props;
        let RouteName, params = {theme};
        switch (menu) {          
            case MORE_MENU.Hot_Project:
                RouteName = 'HotProjectPage';
                break;
            case MORE_MENU.New_Project:
                RouteName = 'NewProjectPage';
                break;
            case MORE_MENU.Project_Album:
                RouteName = 'ProjectAlbumPage';
                break;
        }
        if (RouteName) {
            NavigationUtil.goPage(params, RouteName);
        }
    };

    getItem(menu) {
        const {theme} = this.props;
        return ViewUtil.getMenuItem(() => this.onClick(menu), menu, theme.themeColor);
    };

    updateSearch = (search) => {
        this.setState({ search });
    };
    renderCustomThemeView() {
        const {customThemeViewVisible, onShowCustomThemeView} = this.props;
        return (<CustomTheme
            visible={customThemeViewVisible}
            {...this.props}
            onClose={() => onShowCustomThemeView(false)}
        />);
    }
    // 首页搜索功能
    // 广告banner
    // 热门项目
    // 项目专辑
    // 培训专辑
    // 活动专辑
    // 行业专辑
    // 机构专辑
    // 境外项目
    // 新闻动态
    // 推荐单位
    
    // 项目搜索
    // 路演项目
    // 展示项目
    // 最新项目

    

    render() {
       const {theme} = this.props;
       const { search } = this.state;
       return(
       
            <View style={styles.containers}>
                 <Header placement="left" centerComponent={{ text: '首页', style: { color: '#333'} }} 
                    containerStyle={{backgroundColor: 'white'}}/>
                {/* 搜索栏 */}
                <View style={styles.search}>
                    <SearchBar  style={styles.searchs} lightTheme round placeholder="项目 | 投资人" 
                    containerStyle={styles.searchContainer}
                    searchIcon={{color:'#333',backgroundColor:'transparent',fontSize:'28'}}
                    inputContainerStyle={styles.inputContainerStyle}  
                    inputStyle={{backgroundColor:'white'}}  
                    onChangeText={this.updateSearch} value={search}/>
                </View>  
                <ScrollView> 
                {/* 轮播图 */}
                <Banner/>
                {/* <Banner dataSource = {this.state.dataSource} width={Window_width} height={200} /> */}
                <View style={{padding:0,margin:0}}>              
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.Hot_Project)}
                    <View > 
                    <ScrollView ref="scrollView" horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>
                        {this.getHotItem(8)}                                   
                    </ScrollView>
                    </View>      
                    <View style={styles.adBox}>
                        <Image style={styles.adImage}  resizeMode="contain" source={require('../res/img/p2.jpg')}/>
                    </View>      
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.Project_Album)}
                  
                    <View style={{padding: 0,flex:1,flexDirection:'row',flexWrap:'wrap',marginBottom:10}}>                      
                        {this.getInistuition()}
                    </View>        
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.New_Project)}
                    <View style={GlobalStyles.line}/>
                    <View > 
                        <ScrollView ref="scrollView" horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>                       
                            {this.getHotItem(4)}   
                        </ScrollView>
                    </View>            
                        {this.getItem(MORE_MENU.Train_Album)}
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.Activity_Album)}
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.Industry_Album)}
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.Inistuition_Album)}
                    <View style={{padding: 0,flex:1,flexDirection:'row',flexWrap:'wrap',marginBottom:10}}>                      
                        {this.getInistuition()}
                    </View>                   
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.Abroad_Project)}
                    <View style={{padding: 0,flex:1,flexDirection:'row',flexWrap:'wrap',marginBottom:10}}>                      
                        {this.getInistuition()}
                    </View>   
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.News_Information)}
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.Recommended_Unit)}      
                    <View style={{padding: 0,flex:1,flexDirection:'row',flexWrap:'wrap',marginBottom:10}}>                      
                        {this.getInistuition()}
                    </View>            
                </View>
            </ScrollView> 
        </View>
       )
    }

    getHotItem(index) {
        var hotData = [];
        for (var i=0;i < index; i++) {
            hotData.push(
                <View key={i} style={{padding:0,margin:0}}>
                   {<Card  containerStyle={{padding: 0,borderRadius:10}}>     
                        <View style={styles.hotItem}>
                            <Image style={styles.hotImage} resizeMode="cover" source={require('../res/img/s1.png')}/>
                            <Text style={styles.name} numberOfLines={2} ellipsizeMode={'tail'}>{hot[i].name}</Text>
                            <Text style={styles.label}>{hot[i].label}</Text>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <MaterialIcons name={'whatshot'} size={24} style={{color: 'orange',paddingTop:5}}/>
                                <Text style={styles.detail}>{hot[i].detail}</Text>
                            </View>
                         </View>  
                    </Card>}                  
                </View>
            );
            
        }
        return hotData;
    }

    getInistuition(){
        var Inistuition=[];
        for (var i=0;i < 4; i++) {
            Inistuition.push(   
            <View style={{padding: 0,margin:0,width:'50%'}}>                       
                <View style={{padding:0, borderRadius:10,marginTop:10,marginLeft:10,marginBottom:0,marginRight:0,backgroundColor:'white'}}>     
                        <Image style={styles.inistuitionImage}   resizeMode="cover" source={require('../res/img/b1.jpg')}/>
                        <View style={styles.inistuitionItem}>                   
                            <Text style={styles.name} numberOfLines={2} ellipsizeMode={'tail'}>{hot[i].name}</Text>
                            <Text style={styles.label}>{hot[i].label}</Text>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <MaterialIcons name={'whatshot'} size={22} style={{color: 'orange',paddingTop:5}}/>
                                <Text style={styles.detail}>{hot[i].detail}</Text>
                            </View>
                         </View>  
                </View>   
            </View>          
            );
            
        }
        return Inistuition;
    }

    
}

const mapStateToProps = state => ({
    nav: state.nav,
    customThemeViewVisible: state.theme.customThemeViewVisible,
    theme: state.theme.theme,
});

const mapDispatchToProps = dispatch => ({
    onShowCustomThemeView: (show) => dispatch(actions.onShowCustomThemeView(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
const styles = StyleSheet.create({
    containers:{
        flex:1,
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
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


    item: {
        backgroundColor: 'white',
        padding: 10,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    groupTitle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray',
    },
    Cards:{
        height:200
    },
   
    image:{
        width:100,
        height: 70,
        borderRadius:10,
        margin:10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    // 热门项目
    hotItem:{
        width:120,
        padding:10
    },
    hotImage:{     
        width:100,
        height: 70,
        borderRadius:10,      
        
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
    // 广告位
    adBox:{
        margin:10,
        width:'100%'
    },
    adImage:{
       width:'96%',
       height:50     
    },

    //行业专辑
    inistuitionItem:{
      padding:10,
      margin:0,
      width:'100%'
    },
    inistuitionImage:{
        width:'100%',
        height:100,
        borderTopRightRadius:8,
        borderTopLeftRadius:8
    },

    //project
    project:{
      
       
    }
})