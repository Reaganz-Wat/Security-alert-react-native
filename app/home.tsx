import { Button } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemedText>Welcome to the Home Screen</ThemedText>
      <Button 
        title="Go to Settings" 
        onPress={() => router.push("/settings")} 
      />
      <Button title="Profile Screen" onPress={() => router.push("/profile")}/>
      <Button title="Contact Screen" onPress={() => router.push("/contact")}/> 
      <Button title="Activity logs" onPress={() => router.push("/activity-logs")}/>
      <Button title="Activity details" onPress={() => router.push("/activity-details")}/>
      <Button title="Go to Tabs" onPress={() => router.push("/(tabs)")}/>   
    </ThemedView>
  );
}