import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header} from "react-native-elements";
import GlobalStyles from '../res/styles/GlobalStyles';
import {MORE_MENU} from '../common/MORE_MENU';
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {};
class MyPage extends Component<Props> {
    render() {      
        return (
            <View style={GlobalStyles.root_container}>
                 <Header placement="left" centerComponent={{ text: '我的', style: { color: '#333'} }} 
                    containerStyle={{backgroundColor: 'white'}}/>
                <ScrollView>
                <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.onClick(MORE_MENU.About)}
                    >
                        <View style={styles.about_left}>
                            <Ionicons
                                name={MORE_MENU.About.icon}
                                size={40}
                                style={{
                                    marginRight: 10,
                                   
                                }}
                            />
                            <Text>This is MyPage</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}



export default MyPage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    about_left: {
        alignItems: 'center',
        flexDirection: 'row',
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
});



