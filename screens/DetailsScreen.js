import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';

export default class DetailsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        let countryData = await this.getCountryFromApi();
        this.setState({countryData:countryData})

    }

    getCountryFromApi() {
        // return fetch('https://restcountries.eu/rest/v2/name/'+"india")

        return fetch('https://restcountries.eu/rest/v2/name/'+this.props.countryName)
            .then((response) => response.json())
            .then((json) => {
                return json[1];
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { countryData } = this.state;
        console.log("co",countryData)
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{marginVertical:50,width:"80%",}} >
                    <Text>
                        capital
    </Text>

                    <Text>
                        { ( this.state.countryData&& this.state.countryData.capital)? this.state.countryData.capital:""}
    </Text>

                </View>
                 <View style={{marginVertical:50,width:"80%"}}>
                    <Text>
                    population
    </Text>

                    <Text>
                    { ( this.state.countryData&& this.state.countryData.population)? this.state.countryData.population:""}
                    
    </Text>
                </View>
                <View style={{marginVertical:50,width:"80%"}} >
                    <Text>
                    lat
    </Text>

                    <Text>
                    { ( this.state.countryData&& this.state.countryData.latlang)? this.state.countryData.latlang[0]:""}
    </Text>
                </View>
                
                <View style={{marginVertical:50,width:"80%"}} >
                    <Text>
                    lng
    </Text>

                    <Text>
                    { ( this.state.countryData&& this.state.countryData.latlang)? this.state.countryData.latlang[1]:""}

    </Text>
                </View>
                
            </View>

        );
    }
}
