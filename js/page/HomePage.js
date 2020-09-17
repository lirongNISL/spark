import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomTheme from '../page/CustomTheme';
import actions from '../action';
import {StyleSheet,Text, View, Image,FlatList, RefreshControl, TouchableOpacity,ScrollView,ActivityIndicator,Dimensions,Animated,DeviceEventEmitter,TouchableWithoutFeedback} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Banner from '../common/Banner';
import {Card, ListItem, Button, SearchBar,Icon } from 'react-native-elements';
import GlobalStyles from '../res/styles/GlobalStyles';
import {MORE_MENU} from '../common/MORE_MENU';
import ViewUtil from '../util/ViewUtil';
import NavigationUtil from '../navigator/NavigationUtil';

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
        <ScrollView> 
            <View style={styles.container}>
                {/* 搜索栏 */}
                <View style={styles.searchs}>
                    <SearchBar  placeholder="项目 | 投资人" onChangeText={this.updateSearch} value={search}/>
                </View>  
                {/* 轮播图 */}
                <Banner/>
                {/* <Banner dataSource = {this.state.dataSource} width={Window_width} height={200} /> */}
                <View>              
                    <View style={GlobalStyles.line}/>            
                        {this.getItem(MORE_MENU.Hot_Project)}
                    <View > 
                    <ScrollView ref="scrollView" horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>
                        <Card image={require('../res/img/p1.jpg')} style={styles.Cards}>
                            <Text style={{marginBottom: 10,color:'#000',fontWeight:'bold'}}>纳米孔基因测序仪</Text>
                            <Text style={{marginBottom: 10}}>            
                                近年来，基因测序市场正在快速增长。有分析认为，基因测序市场的年复合增长率在未来几年将超过20%，在2025年达到约244亿美元左右。基因测序是精准医疗...            
                            </Text>
                            <Text style={{marginBottom: 10,color:'gray'}}> 四川,成都</Text>
                            <Button buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}} title='查看详情'/>
                        </Card>
                    </ScrollView>                  
                    </View>            
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Project_Album)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.New_Project)}
                    <View style={GlobalStyles.line}/>
                    <View > 
                        <ScrollView ref="scrollView" horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>                       
                            <Card  containerStyle={{padding: 0,borderRadius:10}}>     
                                <View style={styles.user}>
                                    <Image style={styles.image} resizeMode="cover" source={require('../res/img/s1.png')}/>
                                    <Text style={styles.name}>智能高速激光赋码平台</Text>
                                    <Text style={styles.label}>物联网，区块链</Text>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <MaterialIcons name={'whatshot'} size={26} style={{color: 'orange'}}/>
                                        <Text style={styles.detail}>物联网，区块链</Text>
                                    </View>
                                </View>  
                            </Card>
                            <Card  containerStyle={{padding: 0,borderRadius:10}}>     
                                <View style={styles.user}>
                                    <Image style={styles.image} resizeMode="cover" source={require('../res/img/s2.png')}/>
                                    <Text style={styles.name}>工业制造冬天仿真项目</Text>
                                    <Text style={styles.label}>物联网，区块链</Text>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <MaterialIcons name={'whatshot'} size={26} style={{color: 'orange'}}/>
                                        <Text style={styles.detail}>物联网，区块链</Text>
                                    </View>   
                                </View>  
                            </Card>
                            <Card  containerStyle={{padding: 0,borderRadius:10}}>     
                                <View style={styles.user}>
                                    <Image style={styles.image} resizeMode="cover" source={require('../res/img/s3.png')}/>
                                    <Text style={styles.name}>纳米孔基因测序仪</Text>
                                    <Text style={styles.label}>物联网，区块链</Text>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <MaterialIcons name={'whatshot'} size={26} style={{color: 'orange'}}/>
                                        <Text style={styles.detail}>物联网，区块链</Text>
                                    </View>                  
                                </View>  
                            </Card>
                            <Card  containerStyle={{padding: 0,borderRadius:10}}>     
                                <View style={styles.user}>
                                    <Image style={styles.image} resizeMode="cover" source={require('../res/img/s4.png')}/>
                                    <Text style={styles.name}>纳米孔基因测序仪</Text>
                                    <Text style={styles.label}>物联网，区块链</Text>
                                    <Button buttonStyle={{borderRadius: 5, marginLeft: 5, marginRight: 0, marginBottom: 10,width:140}} title='View Now'/>
                                </View>  
                            </Card>
                
                        </ScrollView>
                    </View>            
                    {this.getItem(MORE_MENU.Train_Album)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Activity_Album)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Industry_Album)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Inistuition_Album)}
                    <View style={{paddingBottom:10}}>
                        <View style={{flex:1,flexDirection:'row',justifyContent: 'space-around'}}>
                            <Card  containerStyle={{padding: 0,borderRadius:10}}>     
                                <View style={styles.user}>
                                    <Image style={styles.image} resizeMode="cover" source={require('../res/img/s1.png')}/>
                                    <Text style={styles.name}>智能高速激光赋码平台</Text>
                                    <Text style={styles.label}>物联网，区块链</Text>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <MaterialIcons name={'whatshot'} size={26} style={{color: 'orange'}}/>
                                        <Text style={styles.detail}>物联网，区块链</Text>
                                    </View>
                                </View>  
                            </Card>
                            <Card  containerStyle={{padding: 0,borderRadius:10}}>     
                                <View style={styles.user}>
                                    <Image style={styles.image} resizeMode="cover" source={require('../res/img/s2.png')}/>
                                    <Text style={styles.name}>工业制造冬天仿真项目</Text>
                                    <Text style={styles.label}>物联网，区块链</Text>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <MaterialIcons name={'whatshot'} size={26} style={{color: 'orange'}}/>
                                        <Text style={styles.detail}>物联网，区块链</Text>
                                    </View>   
                                </View>  
                            </Card>
                        </View>
                        <View style={{flex:1,flexDirection:'row',justifyContent: 'space-around'}}>
                            <Card  containerStyle={{padding: 0,borderRadius:10}}>     
                                <View style={styles.user}>
                                    <Image style={styles.image} resizeMode="cover" source={require('../res/img/s3.png')}/>
                                    <Text style={styles.name}>智能高速激光赋码平台</Text>
                                    <Text style={styles.label}>物联网，区块链</Text>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <MaterialIcons name={'whatshot'} size={26} style={{color: 'orange'}}/>
                                        <Text style={styles.detail}>物联网，区块链</Text>
                                    </View>
                                </View>  
                            </Card>
                            <Card  containerStyle={{padding: 0,borderRadius:10}}>     
                                <View style={styles.user}>
                                    <Image style={styles.image} resizeMode="cover" source={require('../res/img/s4.png')}/>
                                    <Text style={styles.name}>工业制造冬天仿真项目</Text>
                                    <Text style={styles.label}>物联网，区块链</Text>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <MaterialIcons name={'whatshot'} size={26} style={{color: 'orange'}}/>
                                        <Text style={styles.detail}>物联网，区块链</Text>
                                    </View>   
                                </View>  
                            </Card>
                        </View>
                    </View>
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Abroad_Project)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.News_Information)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Recommended_Unit)}               
                </View>
            </View>
        </ScrollView> 
       )
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
    container:{
        flex:1,
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    searchs:{
        backgroundColor:'#fff',
        opacity:0.8,
        color:'#fff',
        height: 60,
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
    user:{
        alignItems: 'center',
        justifyContent: 'space-between',
        width:170,
    },
    image:{
        width:100,
        height: 70,
        borderRadius:10,
        margin:10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name:{
        fontSize:16,
        width:140,
        textAlign:'left',
        padding:10
    },
    label:{
        fontSize:16,
        color:'#eee',
        padding:10
    },
    detail:{
        fontSize:14,
        color:'orange',
        padding:5
        
    },
    
})