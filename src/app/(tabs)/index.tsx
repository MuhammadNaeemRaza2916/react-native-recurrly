import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href={"/onboarding"}>Go to onboarding</Link>
      <Link href={"/(auth)/sign-in"}>Go to Sign In</Link>
      <Link href={"/(auth)/sign-up"}>Go to Sign Up</Link>

      <Link href={"/subscriptions/spoticy"}>Spoticy Subscription</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
