import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
export const List = [
  {
    name: "Moda",
    url: "/moda.png",
    test: [
      { name: "Ayakkabı & Çanta", image: "/category/shoes.png" },
      { name: "Kadın Giyim & Aksesuar", image: "/category/hat.png" },
      { name: "Erkek Giyim & Aksesuar", image: "/category/man.png" },
    ],
  },
  {
    name: "Teknoloji",
    url: "/teknoloji.png",
    test: [
      { name: "Telefon & Aksesuar", image: "/category/airpods.png" },
      { name: "Televizyon & Ses", image: "/category/sound.png" },
      { name: "Ev Aletleri", image: "/category/householdappliances.png" },
    ],
  },
  {
    name: "Yaşam",
    url: "/yasam.png",
    test: [
      { name: "Mobilya", image: "/category/wardrobe.png" },
      { name: "Dekorasyon & Aydınlatma", image: "/category/lamb.png" },
      { name: "Ev Aletleri", image: "/category/householdappliances.png" },
    ],
  },
  {
    name: "Bebek",
    url: "/annebebek.png",
    test: [
      { name: "Islak Mendil", image: "/category/hand.png" },
      { name: "Bebek Giyim", image: "/category/childshoes.png" },
      { name: "Hamile Giyim", image: "/category/pregnant.png" },
    ],
  },
  {
    name: "Kozmetik",
    url: "/kozmetik.png",
    test: [
      { name: "Parfüm & Deodorant", image: "/category/parfume.png" },
      { name: "Saç Bakım", image: "/category/care.png" },
      { name: "Yüz & Vücut Bakım", image: "/category/woman.png" },
    ],
  },
  {
    name: "Altın&Saat",
    url: "/saat.png",
    test: [
      { name: "Altın & Gümüş", image: "/category/golden.png" },
      { name: "Saat", image: "/category/watch.png" },
      { name: "Güneş Gözlüğü", image: "/category/glass.png" },
    ],
  },
  {
    name: "Spor",
    url: "/spor.png",
    test: [
      { name: "Fitness", image: "/category/plates.png" },
      { name: "Spor Giyim & Ayakkabı", image: "/category/sportshoes.png" },
      { name: "Bisiklet", image: "/category/bike.png" },
    ],
  },
  {
    name: "Kültür",
    url: "/kitap.png",
    test: [
      { name: "Kitap", image: "/category/books.png" },
      { name: "Film", image: "/category/movie.png" },
      { name: "Müzik", image: "/category/music.png" },
    ],
  },
  {
    name: "Otomotiv",
    url: "/lastik.png",
    test: [
      { name: "Aksesuar", image: "/category/speed.png" },
      { name: "Yağ&Akü", image: "/category/oil.png" },
      { name: "Navigasyon", image: "/category/navigation.png" }
    ],
  },
];
const regexForRouteLink = (param) => {
  return param
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("ı", "i")
    .replaceAll(" ", "")
    .split(",");
};

export default function CategoryList() {
  const listLoop = () => {
    return (
      <ul className="category-list">
        {List.map((listItem,i) => (
          <li key={i}>
            <img
              src={listItem.url}
              width={"30px"}
              height={"30px"}
              className="category-image"
              alt="i"
            />
            <span> {listItem.name}</span>
            <div className="dropdown">
              <div className="dropdown-content">
                {listItem.test.map((element,i) => (
                  <div className="dropdown-items" key={i}>
                    <Link
                      href={`/kategori/${regexForRouteLink(
                        element.name.toLowerCase()
                      )}`}
                    >
                      <a style={{ textDecoration: "none", color: "inherit" }}>
                        <img src={element.image} alt={i} />
                        <div className="dropdown-items-text">
                          <span> {element.name}</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  return <Container className="list-container">{listLoop()}</Container>;
}
