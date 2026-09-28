import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href={"/(auth)/sign-up"}>Sign Up</Link>
      <Link
        className="mt-4 font-sans-extrabold rounded bg-primary text-white p-4"
        href={"/(tabs)"}
      >
        Go to home
      </Link>
    </View>
  );
};

export default SignIn;
