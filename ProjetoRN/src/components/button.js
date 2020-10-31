import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text } from "react-native";

export function Button({text, style, radius, color, size, background, onPress}) {
    return(
        <TouchableOpacity
            style={[
                style, 
                {
                    alignItems: 'center', 
                    justifyContent: "center", 
                    borderRadius: radius, 
                    backgroundColor: background
                    },
        ]}>
        </TouchableOpacity>
    );
}