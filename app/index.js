import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'

import * as IntentLauncher from 'expo-intent-launcher'
import { openInbox } from 'react-native-email-link'

const Home = () => {

    const handleOpenGmail = async () => {
        if (Platform.OS === 'android') {
            IntentLauncher.startActivityAsync('android.intent.action.MAIN', {
                category: 'android.intent.category.APP_EMAIL',
            })
        }

        if (Platform.OS === 'ios') {
            try {
                await openInbox({ title: "Open mail app" });
            } catch (error) {
                console.error(`OpenEmailbox > iOS Error > ${error}`);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={handleOpenGmail}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    Open Gmail
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '60%',
        backgroundColor: '#0782f9',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
})

export default Home