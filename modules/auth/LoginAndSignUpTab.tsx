import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { View } from '../../components/Themed'

type Props = {
    wantsToLogin: Function
    shouldLogin: boolean
}

const LoginAndSignUpTab: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        !props.shouldLogin ? styles.active : null
                    ]}
                    onPress={() => props.wantsToLogin(false)}>
                    <Text
                        style={[
                            styles.text,
                            !props.shouldLogin ? styles.activeText : null
                        ]}>
                        Sign up
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        props.shouldLogin ? styles.active : null
                    ]}
                    onPress={() => props.wantsToLogin(true)}>
                    <Text
                        style={[
                            styles.text,
                            props.shouldLogin ? styles.activeText : null
                        ]}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    wrapper: {
        width: '65%',
        backgroundColor: '#E9EBF0',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        alignSelf: 'center',
        marginVertical: 30
    },
    button: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundColor: '#fff'
    },
    text: {
        color: 'black',
        fontWeight: '600',
        paddingVertical: 10,
        fontSize: 16
    },
    activeText: {
        color: '#2E70E6'
    }
})

export default LoginAndSignUpTab
