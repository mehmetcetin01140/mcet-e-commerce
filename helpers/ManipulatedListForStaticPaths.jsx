import React from "react";
import { List } from "../components/Header/Category-List";
import productData from "../json/recommendation.json";
export const listManipulationForStaticPaths = () => {
  const getTopCategories = productData.map((product) => product.topCategory);
  const uniqueCategories = [...new Set(getTopCategories)];
  const categoryNames = List.map((element) => {
    let str0 = element.test[0]?.name.replaceAll(" ", "");
    let str1 = element.test[1]?.name.replaceAll(" ", "");
    let str2 = element.test[2]?.name.replaceAll(" ", "");
    let allData = [str0, str1, str2];

    return allData;
  });
  const mergeCategories = [categoryNames, uniqueCategories];
  const regex = mergeCategories.map((element) => {
    return element
      .join(",")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll("ı", "i")
      .split(",");
  });
  const merged = [].concat.apply([], regex);
  return merged;
};
