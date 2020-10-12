import React, {Component} from 'react';
import NavigationUtil from '../navigator/NavigationUtil';
import SplashScreen from 'react-native-splash-screen';
import actions from '../action';
import {connect} from 'react-redux';
import {StyleSheet,Text, View, TouchableHighlight,Alert} from 'react-native';

// 可以作为登录页面
type Props = {};
class LoginPage extends Component<Props> {
    componentDidMount() {
        this.props.onThemeInit();
        this.timer = setTimeout(() => {
             // 解决启动白屏
            SplashScreen.hide();
            NavigationUtil.resetToHomPage({
                navigation: this.props.navigation,
            });
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>This is Login page</Text>
                <TouchableHighlight style={styles.button} onPress={
                ()=> {
                    Alert.alert(
                        `你点击了按钮`,
                        'Hello World！',
                        [
                            {text: '以后再说', onPress: () => console.log('Ask me later pressed')},
                            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: '确定', onPress: () => console.log('OK Pressed')},
                        ]
                    )
                }
            }>
                <Text style={styles.button} color="#000">Button</Text>
            </TouchableHighlight>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        fontSize:20,
        textAlign:'center',
        margin:10,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:20,
        color:'green'
    },
    button:{
        padding:5,
        borderRadius:4,
        fontSize:16,
       
        
    }
})

const mapDispatchToProps = dispatch => ({
    onThemeInit: () => dispatch(actions.onThemeInit()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
