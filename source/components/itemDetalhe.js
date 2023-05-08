import { View, StyleSheet, Text } from "react-native";


export default function ItemDetalhe({ item }) {
    return (
        <View style={styles.item}>
                <View style={styles.info}>
                    <View>
                        <Text style={styles.texto}>Area: {item.area}</Text>
                        <Text style={styles.texto}>Carga: {item.carga}</Text>
                    </View>
                    <Text style={styles.texto}>Telefone: {item.telefone}</Text>
                    <Text style={styles.texto}>Email: {item.email}</Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.texto}>{item.descricao}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        padding: 5,
        backgroundColor: '#FFF',
        borderBottomColor: 'red',
        borderBottomWidth: 2
    },
    texto: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 8,
    },
});