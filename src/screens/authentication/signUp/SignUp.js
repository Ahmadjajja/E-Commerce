import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import clearSkyBg from "../../../assets/ClearSky.jpg"
import Icon from 'react-native-vector-icons/FontAwesome'
// import  TextInput  from 'react-native-paper';

export default function SignUp({navigation}) {
    const [text, setText] = useState("");
    const onChangeNumber = () => {

    }
    return (
        <>
            <ImageBackground source={require("../../../assets/ClearSky.jpg")} style={styles.container}  >
                <Text style={styles.loginText}>SignUp</Text>
                <View>
                    {/* <TextInput
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                    /> */}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        // value={text}
                        placeholder="Enter Your email"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        // value={text}
                        placeholder="Enter Your password"
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        // value={text}
                        placeholder="Enter Your confirm password"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.btn}>
                    <Button
                        onPress={()=> navigation.navigate("Home")}
                        title="SignUp"
                        color="#013a63"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={styles.orSection}>
                    <View style={styles.line}></View>
                    <View style={styles.ORBOX}>
                        <Text style={styles.OR}>
                            OR
                        </Text>
                    </View>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.login}>
                    <Text style={{ color: "white", marginBottom: 0 }}>Already a user?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                        <Text style={{ color: "white", paddingLeft: 5, fontSize: 16 }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "red"
    }, input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        backgroundColor: "white",
        width: 300,
    },
    loginText: {
        color: "white",
        fontSize: 32
    },
    btn: {
        width: 300,
        marginTop: 10
    }, OR: {
        fontSize: 24,
        color: "white"
    }, login: {
        flexDirection: 'row',
        marginTop: 10,
    }, ORBOX: {
        marginVertical: 10,
        borderWidth: 2,
        width: 60,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        // overflow:'hidden',
        borderColor: "white",
    }, line: {
        width: 75,
        height: 2,
        backgroundColor: "white"
    }, orSection: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})