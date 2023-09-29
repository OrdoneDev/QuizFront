import { View, StyleSheet, Text } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E90FF'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    }
})