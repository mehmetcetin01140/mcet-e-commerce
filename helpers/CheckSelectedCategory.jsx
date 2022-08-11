import React from 'react'
import recommendationData from "../json/recommendation.json"
export default function CheckSelectedCategory(param) {
    const modaProducts = recommendationData.slice(4,16)
    switch (param) {
        case "moda":
            return modaProducts
        default:
            break;
    }
}
