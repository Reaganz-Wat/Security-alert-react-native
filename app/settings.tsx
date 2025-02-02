import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Text, View } from "react-native"

export default function SettingScreen() {
    return (
        <ThemedView
         style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: "white"}}>Hello</Text>
            <ThemedText>This is a themed text</ThemedText>
        </ThemedView>
    )
}