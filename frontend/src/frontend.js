
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import config from './config';
import {PostFeed} from './components/container/'

class Frontend extends Component{


    render() {

        const imageURI = "https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg" //+ "=s" + this.state.screenWidth + "-c"

        return (
            <View style={{flex: 1, width: 100 + '%', height: 100 + '%'}}>
                <View style={styles.tempNav}>
                    <Text >Free Food</Text>
                </View>
                <PostFeed/>
            </View>
        )
    }



}

const styles = StyleSheet.create({
    tempNav:{
        width: 100+"%", 
        height: 85, 
        backgroundColor:'rgb(250, 250, 250)',
        borderBottomColor:'rgb(233, 233, 233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 35,

    }
})

export default Frontend