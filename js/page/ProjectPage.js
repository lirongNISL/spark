import React, {Component} from 'react';
import {StyleSheet,  Text, View, } from 'react-native';

type Props = {};

class ProjectPage extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.container}>
            <Text>This is ProjectPage</Text>
        </View>;
    }
}


export default ProjectPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
   
});
