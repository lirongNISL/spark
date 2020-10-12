import {createAppContainer, createSwitchNavigator} from 'react-navigation';
//@ https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0
import {createStackNavigator} from 'react-navigation-stack';
// 引入页面组件
import TabPage from '../page/TabPage';
import LoginPage from '../page/LoginPage';
import WebViewPage from '../page/WebViewPage';
import HomePage from '../page/HomePage';
import ProjectPage from '../page/ProjectPage';
import ActivityPage from '../page/ActivityPage';
import InvestorPage from '../page/InvestorPage';
import MyPage from '../page/MyPage';
import DetailPage from '../page/DetailPage';
import SortKeyPage from '../page/SortKeyPage';
import SearchPage from '../page/SearchPage';
import CustomKeyPage from '../page/CustomKeyPage';
import AboutPage from '../page/about/AboutPage';
import AboutMePage from '../page/about/AboutMePage';
import NewProjectPage from '../page/NewProjectPage';
import HotProjectPage from '../page/HotProjectPage';
import ProjectAlbumPage from '../page/ProjectAlbumPage';
import LisPage from '../page/ListPage';
import ProjectList from '../page/ProjectList';
// Project_Album
// Train_Album
// Activity_Album
// Industry_Album
// Inistuition_Album
// Abroad_Project
// News_Information
// Recommended_Unit

// import CodePushPage from '../page/CodePushPage';

export const rootCom = 'Init';//设置根路由，对应RootNavigator中第一个初始化的路由名

const IOS_MODAL_ROUTES = ['OptionsScreen'];

let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const isModal = IOS_MODAL_ROUTES.some(
    screenName =>
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
  );
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    isModal
  );
};




const InitNavigator = createStackNavigator({
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    }
});
const MainNavigator = createStackNavigator({
    TabPage:{
        screen: TabPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    ProjectPage :{
        screen:ProjectPage ,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    ActivityPage:{
        screen:ActivityPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    InvestorPage:{
        screen:InvestorPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    MyPage:{
        screen:MyPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    WebViewPage: {
        screen: WebViewPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    AboutPage: {
        screen: AboutPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    AboutMePage: {
        screen: AboutMePage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    CustomKeyPage: {
        screen: CustomKeyPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    SortKeyPage: {
        screen: SortKeyPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    SearchPage: {
        screen: SearchPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    HotProjectPage: {
        screen: HotProjectPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    NewProjectPage: {
        screen: NewProjectPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },  
    ProjectAlbumPage: {
        screen: ProjectAlbumPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    LisPage:{
        screen: LisPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    ProjectList:{
        screen:ProjectList,
        navigationOptions:{
            headerShown:false,
        }
    }
    // TrainAlbumPage: {
    //     screen: TrainAlbumPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // ActivityAlbumPage: {
    //     screen: ActivityAlbumPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // IndustryAlbumPage: {
    //     screen: IndustryAlbumPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // InistuitionAlbumPage: {
    //     screen: InistuitionAlbumPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // AbroadProjectPage: {
    //     screen: AbroadProjectPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // NewsInformationPage: {
    //     screen: NewsInformationPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // RecommendedUnitPage: {
    //     screen: RecommendedUnitPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // CodePushPage: {
    //     screen: CodePushPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
}, {
    mode: 'card',
    headerMode: 'none',
    defaultNavigationOptions: {
        headerShown: false,    // 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        gesturesEnabled: false,
    },
    // transitionConfig: dynamicModalTransition
    transitionConfig: () => ({
        transitionSpec: {
          duration: 300,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
  
          const height = layout.initHeight;
          const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
          });
  
          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });
  
          return { opacity, transform: [{ translateY }] };
        },
    }),
    
});
export default createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        headerShown: false,
    },
}));
