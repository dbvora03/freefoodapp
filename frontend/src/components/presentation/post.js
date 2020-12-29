
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

class Post extends Component{

    constructor(){
        super();
        this.state = {
            screenWidth: Dimensions.get("window").width
        }

    };    

    render() {

        const imageURI = "https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg" //+ "=s" + this.state.screenWidth + "-c"

        return (
            <View style={{flexDirection:"column"}}>
                <View style={styles.userBar}>

                    <View style={{flexDirection: "row", alignItems:"center"}}>
                        <Image style={styles.userPic} source={{uri:"https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg"}}></Image>
                        <Text style={{marginLeft: 10}}>Sample User</Text>
                    </View>     
                </View>
                <Image 
                style={{width: this.state.screenWidth, height: 450}}
                source={{uri:imageURI}}></Image>
            
                <View style={styles.iconBar}>
                    <Text style={{fontSize:20, padding: 10}}>Title</Text>
                    <Text style={{paddingLeft: 10}}>Description</Text>
                    <Text style={{paddingLeft: 10}}>Address</Text>
                    <Text style={{paddingLeft: 10}}>Allergen info</Text>
                </View>

            </View>
        )
    }



}

const styles = StyleSheet.create({

    userBar:{
        width:100 + '%',
        height:50,
        backgroundColor:'rgb(255,255,255)',
        flexDirection:"row",
        marginHorizontal: 10

    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 40
    },
    iconBar: {
      height: 110,
      width: 100 + '%',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor:'rgb(233, 233, 233)',
      flexDirection:"column"

    }
})

export default Post