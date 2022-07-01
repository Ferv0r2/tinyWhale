import React from "react";

const Footer = () => {
  const urlMap = [
    {
      link: "https://klu.bs/pfp/0x2089CFC532195E9568608fD0E8aD7Ab5e4cfDc91",
      url: "klubs.png",
    },
    {
      link: "https://opensea.io/collection/tinywhales",
      url: "opensea.png",
    },
    {
      link: "https://pala.world/square/project/2089CFC532195E9568608fD0E8aD7Ab5e4cfDc91",
      url: "pala.png",
    },
    {
      link: "https://discord.gg/RtXGG5jxuu",
      url: "discord.png",
    },
    {
      link: "https://twitter.com/blanky_nftdev",
      url: "twitter.png",
    },
  ];

  const baseURI = "images/external/";
  const urls = urlMap.map((url) => (
    <li key={url.link} className="flex">
      <a className="relative w-8 h-8 m-1.5" href={url.link}>
        <img src={baseURI + url.url} alt={url.link} />
      </a>
    </li>
  ));

  return <footer>{urls}</footer>;
};

export default Footer;
