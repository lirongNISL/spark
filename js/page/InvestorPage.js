
import React, {Component} from 'react';
import {StyleSheet,  Text, View, ScrollView} from 'react-native';
import {Card, ListItem, Button, SearchBar,Icon } from 'react-native-elements';

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
    render() {
        const { search } = this.state;
        return (
        <View style={styles.container}>
            <View style={styles.searchs}>
                    <SearchBar  placeholder="项目 | 投资人" onChangeText={this.updateSearch} value={search}/>
            </View>  
            
            <ScrollView ref="scrollView" horizontal={false} showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>   
                <Card image={require('../res/img/p1.jpg')} style={styles.Cards}>
                <Text style={{marginBottom: 5,color:'#000',fontWeight:'bold'}}>纳米孔基因测序仪</Text>
                <Text style={{marginBottom: 5}}>            
                    近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗...            
                </Text>
                <Text style={{marginBottom: 5,color:'gray'}}> 四川,成都</Text>       
                </Card>
                <Card image={require('../res/img/p2.jpg')} style={styles.Cards}>
                <Text style={{marginBottom: 5,color:'#000',fontWeight:'bold'}}>纳米孔基因测序仪</Text>
                <Text style={{marginBottom: 5}}>            
                    近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗...            
                </Text>
                <Text style={{marginBottom: 5,color:'gray'}}> 四川,成都</Text>       
                </Card>
                <Card image={require('../res/img/p1.jpg')} style={styles.Cards}>
                <Text style={{marginBottom: 5,color:'#000',fontWeight:'bold'}}>纳米孔基因测序仪</Text>
                <Text style={{marginBottom: 5}}>            
                    近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗...            
                </Text>
                <Text style={{marginBottom: 5,color:'gray'}}> 四川,成都</Text>       
                </Card>
                <Card image={require('../res/img/p2.jpg')} style={styles.Cards}>
                <Text style={{marginBottom: 5,color:'#000',fontWeight:'bold'}}>纳米孔基因测序仪</Text>
                <Text style={{marginBottom: 5}}>            
                    近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗...            
                </Text>
                <Text style={{marginBottom: 5,color:'gray'}}> 四川,成都</Text>       
                </Card>
                <Card image={require('../res/img/p1.jpg')} style={styles.Cards}>
                <Text style={{marginBottom: 5,color:'#000',fontWeight:'bold'}}>纳米孔基因测序仪</Text>
                <Text style={{marginBottom: 5}}>            
                    近年来，基因测序市场正在快速增长。有分析认为，在2025年达到约244亿美元左右。基因测序是精准医疗...            
                </Text>
                <Text style={{marginBottom: 5,color:'gray'}}> 四川,成都</Text>       
                </Card>
            </ScrollView>
        </View>
        )
    }
}


export default InvestorPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%'
        
    },
    searchs:{
        backgroundColor:'#fff',
        opacity:0.8,
        color:'#fff',
        height: 60,
    },
    Cards:{
        height:170
    },
});
