import React, { Component } from 'react';
import { TextInput,View,TouchableOpacity,Text } from 'react-native';

export default class CountryInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    onChangeCountryName = (text) => {
        this.setState({ value: text })
    }

    onSubmitPress=()=>{
        // fetch('https://mywebsite.com/mydata.json');
        alert("call")

    }

    render() {
        const { value } = this.state
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <TextInput
                placeholder={" Enter country"}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:"80%",marginTop:200 }}
                    onChangeText={text => this.onChangeCountryName(text)}
                    value={value}
                />
                <TouchableOpacity  
                disabled={value?false:true}
                style={{marginTop:100,height:50,width:"80%",backgroundColor: value?  "#add8e6":"gray",alignItems:"center",justifyContent :"center"}} onPress={this.onSubmitPress}>
                    <Text>submit</Text>
                    </TouchableOpacity>
            </View>

        );
    }
}
