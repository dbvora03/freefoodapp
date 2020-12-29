import React, {Component} from 'react'
import {Post} from '../presentation/index'
import {FlatList} from 'react-native'


class PostFeed extends Component {

    _renderPost() {
        return <Post></Post>
    }

    _returnKey(item) {
        return item.toString()
    }


    render() {
        return(
            <FlatList data={[1, 2, 3, 4, 5, 6, 7]} renderItem={this._renderPost} keyExtractor={this._returnKey}></FlatList>
        )
    }
} 


export default PostFeed