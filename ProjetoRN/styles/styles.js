import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    gradient: {
        height: "100%",
    },
    header: {
        backgroundColor: "rgba[40,40,40,0.2]"
    },
    headerText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 15,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 5,
        marginBottom: 5,
    },
    titleContainer: {
        flexDirection: "row",
        width: "100%",
        marginVertical: 20,
    },
    title: {
        color: "#fff",
        marginLeft: 10,
        fontSize: 16,
        marginTop: 5,
    },
    progessContainer: {
        backgroundColor: "rgba(255,255,255,0.05)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15,
    },
    durationContainer: {
        flexDirection: "row",
    },
    durationText: {
        flex: 0.5,
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    buttonsContainer: {
        flexDirection: "row",
        marginVertical: 40,
    },
    mainButtons: {
        marginHorizontal: 30,
    },
    VolumeBarContainer: {
        flexDirection: "row",
        width: "100%",
    },
});

export { styles };