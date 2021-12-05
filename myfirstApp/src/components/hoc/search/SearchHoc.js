import React, { useEffect, useReducer } from 'react';
import { TextInput, Text, View, StyleSheet } from "react-native"
import axios from 'axios';

export default function SearchHoc(WrappedComponent) {

    return function () {

        const LOADING_START = "LOADING_START";
        const LOADING_DONE = "LOADING_DONE";
        const API_SUCCESS = "API_SUCCESS";
        const SEARCH_TEXT_CHANGE = "INPUT_TEXT_CHANGE";

        const [state, dispatch] = useReducer(reducer, { loading: false, showText: true, inputValue: '', data: null });
        function reducer(state, action) {
            switch (action.type) {
                case LOADING_START:
                    return { ...state, loading: true }
                case LOADING_DONE:
                    return { ...state, loading: false }
                case API_SUCCESS:
                    return { ...state, data: action.payload, loading: false }
                case SEARCH_TEXT_CHANGE:
                    return { ...state, inputValue: action.payload }

                default:
                    break;
            }
        }




        useEffect(() => {

            async function callApi() {
                console.log("calling api");
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
                    dispatch({ type: API_SUCCESS, payload: response.data });
                } catch (error) {
                    console.log(error);
                }
            }
            dispatch({ type: LOADING_START });
            callApi();

        }, [state.inputValue])

        searchTextChange = (value) => {
            dispatch({ type: SEARCH_TEXT_CHANGE, payload: value })
        }

        return (
            <View style={{ flex: 1 }}>
                <TextInput style={styles.input} onChangeText={searchTextChange} />
                {state.loading === true ? <View style={styles.loader}>
                    <Text>Loading</Text>
                </View> : <WrappedComponent data={state.data} />}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    loader: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {

    }
});

