import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import clearSkyBg from "../../../assets/ClearSky.jpg"
import Icon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';


// import  TextInput  from 'react-native-paper';
const initialState = { email: "", password: "", confirmPassword: "" }

export default function SignUp({ navigation }) {
    const [isPasswordShow, setIsPasswordShow] = useState(true);
    const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(true);
    const [signUpData, setSignData] = useState(initialState);
    const handleChange = (name, value) => {
        setSignData({ ...signUpData, [name]: value })
    }
    const submitHandler = () => {
        if (signUpData.password === signUpData.confirmPassword) {
            auth()
            .createUserWithEmailAndPassword(signUpData.email, signUpData.password)
            .then(() => {
                console.log('User account created & signed in!');
                // navigation.navigate("Home")
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
        } else {
            Alert.alert("Provided Password and Confirm Password does'nt match");
        }

        // console.log(signUpData)

    }
    return (
        <>
            <ImageBackground source={require("../../../assets/ClearSky.jpg")} style={styles.container}  >
                <Text style={styles.signUpText}>SIGN UP</Text>
                <View style={styles.iconAndInput}>
                    <Icon
                        style={styles.inputIcon}
                        name="user-o"
                        size={25}
                        color="white" />
                    <TextInput
                        style={styles.inputEmail}
                        onChangeText={(text) => handleChange('email', text)}
                        value={signUpData.email}
                        placeholder="Enter Your email"
                        keyboardType="email-address"
                        placeholderTextColor="#ccc"
                    />
                </View>
                <View style={styles.iconAndInput}>
                    <Icon style={styles.inputIcon} name="lock" size={25} color="white" />
                    <TextInput
                        style={styles.inputPassword}
                        onChangeText={(text) => handleChange('password', text)}
                        value={signUpData.password}
                        placeholder="Enter Your password"
                        keyboardType="default"
                        placeholderTextColor="#ccc"
                        secureTextEntry={isPasswordShow}
                    />
                    <TouchableOpacity>
                        <FeatherIcon style={styles.inputIcon} 
                            onPress={() => setIsPasswordShow(!isPasswordShow)}
                            name={isPasswordShow ? "eye-off" : "eye"}
                            size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconAndInput}>
                    <Icon style={styles.inputIcon} name="lock" size={25} color="white" />
                    <TextInput
                        style={styles.inputPassword}
                        onChangeText={(text) => handleChange('confirmPassword', text)}
                        value={signUpData.confirmPassword}
                        placeholder="Enter Your confirm password"
                        keyboardType="default"
                        placeholderTextColor="#ccc"
                        secureTextEntry={isConfirmPasswordShow}
                    />
                    <TouchableOpacity>
                        <FeatherIcon style={styles.inputIcon}
                            onPress={() => setIsConfirmPasswordShow(!isConfirmPasswordShow)}
                            name={isConfirmPasswordShow ? "eye-off" : "eye"}
                            size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                    <Button
                        onPress={submitHandler}
                        title="SIGN UP"
                        color="#013a63"
                        // accessibilityLabel="Learn more about this purple button"
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
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: "white", paddingLeft: 5, fontSize: 16 }}>SIGN IN</Text>
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
    }, inputEmail: {
        height: 40,
        margin: 8,
        // borderWidth: 1,
        // borderColor: "#ccc",
        // borderStyle:"",
        backgroundColor: "#115197",
        padding: 10,
        width: 260,
        color: "white"
    }, inputPassword: {
        height: 40,
        margin: 8,
        // borderWidth: 1,
        // borderColor: "#ccc",
        // borderStyle:"",
        backgroundColor: "#115197",
        padding: 10,
        width: 240,
        color: "white"
    },
    iconAndInput: {
        flexDirection: 'row',
        width: 300,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    }, inputIcon: {
        paddingTop: 15,
    }, eye: {
        paddingLeft: -10,
    },
    signUpText: {
        color: "white",
        fontSize: 32,
        paddingRight: 185,
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