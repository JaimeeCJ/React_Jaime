import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerShown: false,
          statusBarColor: "#000"
        }}
      />
      <Stack.Screen
        name="(options)/settings/index" // Caminho para a tela, isso é o roteamento estático.
        options={{
          title: "Settings",
          statusBarColor: "lightblue"
        }}
      />
      <Stack.Screen
        name="(options)/cliente/[id]"
        options={{
          title: "Agents page"
        }}
      />
    </Stack>
  );
}
