import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href={"/(auth)/sign-in"}>Sign In</Link>
      <Link
        className="mt-4 font-sans-extrabold rounded bg-primary text-white p-4"
        href={"/onboarding"}
      >
        Go to onboarding
      </Link>
    </View>
  );
};

export default SignUp;
