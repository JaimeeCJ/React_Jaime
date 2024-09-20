import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/settings"} >Settings (Pode tocar aqui)</Link>
      <Link href={"/cliente/4"}>Acessar agentes (Pode tocar aqui)</Link>

    </View>
  );
}