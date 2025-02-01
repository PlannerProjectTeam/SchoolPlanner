import React from "react";
import { StyleSheet } from "react-native";

export const accentColor = '#4A4458'; // Dark Purple
export const textColor = '#37313C'; // Dark Grey

export const globalStyles = StyleSheet.create({
    titleText: {
        fontFamily: 'Lato',
        fontSize: 24,
        color: textColor
    },
    sectionHeadingText: {
        fontFamily: 'Lato',
        fontSize: 18,
        color: accentColor
    }
});
