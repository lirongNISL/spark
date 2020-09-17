import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {connect} from 'react-redux';


// 首页
import HomePage from '../page/HomePage';
//项目页
import ProjectPage from '../page/ProjectPage';
//活动页
import ActivityPage from '../page/ActivityPage';
// 投资人页
import InvestorPage from '../page/InvestorPage';
// 我的
import MyPage from '../page/MyPage';



import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EventTypes from '../util/EventTypes';
import {BottomTabBar} from 'react-navigation-tabs';
import EventBus from 'react-native-event-bus';

type Props = {};

const TABS = {//在这里配置页面的路由
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        },
    },
    ProjectPage: {
        screen: ProjectPage,
        navigationOptions: {
            tabBarLabel: '项目',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'event-note'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        },
    },
    ActivityPage:
        {
            screen: ActivityPage,
            navigationOptions: {
                tabBarLabel: '活动',
                tabBarIcon: ({tintColor, focused}) => (
                    <MaterialIcons
                        name={'live-tv'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            },
        }
    ,
    InvestorPage: {
        screen: InvestorPage,
        navigationOptions: {
            tabBarLabel: '投资人',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'people'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        },
    }
    ,
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        },
    },
};

class DynamicTabNavigator extends Component<Props> {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    _tabNavigator() {
        if (this.Tabs) {
            return this.Tabs;
        }
        const {HomePage,ProjectPage, ActivityPage, InvestorPage, MyPage} = TABS;
        const tabs = {HomePage,ProjectPage, ActivityPage, InvestorPage, MyPage};//根据需要定制显示的tab
        ProjectPage.navigationOptions.tabBarLabel = '项目';//动态配置Tab属性
        return this.Tabs = createAppContainer(createBottomTabNavigator(tabs, {
                tabBarComponent: props => {
                    return <TabBarComponent theme={this.props.theme} {...props}/>;
                },
            },
        ));
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab
            onNavigationStateChange={(prevState, newState, action) => {
                EventBus.getInstance().fireEvent(EventTypes.bottom_tab_select, {//发送底部tab切换的事件
                    from: prevState.index,
                    to: newState.index,
                });
            }}
        />;
    }
}

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime(),
        };
    }

    render() {
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.props.theme.themeColor}
        />;
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
