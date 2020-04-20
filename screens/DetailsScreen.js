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

    }

    getCountryFromApi() {
        return fetch('https://restcountries.eu/rest/v2/name/india')
            .then((response) => response.json())
            .then((json) => {
                return json[1];
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { value } = this.state
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{flexDirection:"row"}}>
                <Text>
                    abc
    </Text>

                <Text>
value
    </Text>

                </View>
                <View>
                </View>
                <View>
                </View>
                <View>
                </View>

            </View>

        );
    }
}
