import { useLocalSearchParams } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, Image } from "react-native";
import { useEffect, useState } from "react";

type DadosApi = {
    cep?: string,
    logradouro?: string,
    bairro?: string,
    estado?: string
}

type Agents = {
    data: [{
        displayName : string,
        displayIcon : string
    }]
}

export default function Cliente() {
    const [dados, setDados] = useState<DadosApi>({});
    const [agente, setAgente] = useState<Agents>();

    const { id } = useLocalSearchParams()


    function callApi() {
        fetch('https://valorant-api.com/v1/agents')
            .then(async (resposta) => {
                const data = await resposta.json()
                setAgente(data)
            })
    }


    return (
        <ScrollView>
        <Button
            title="Buscar agentes"
            onPress={() => callApi()}
        />
        <Text style={styles.textSoma}>{dados?.cep}</Text>
        <Text style={styles.textSoma}>
            {agente?.data.map((data, index) => (
            <Text key={index} style={styles.textSoma}>
                {data.displayName}{"\n"}
                    <Image
                        source={{ uri: data.displayIcon }}
                        style={styles.agentImage}
                    />
                {"\n"}
            </Text>
            ))}
        </Text>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    textSoma: {
      fontSize: 50
    },
    agentImage: {
      width: 100,   // Largura da imagem
      height: 100,  // Altura da imagem
      resizeMode: 'contain'  // Ajusta a imagem para caber no tamanho sem distorção
    }
  });
  
