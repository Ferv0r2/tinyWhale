import Head from "next/head";
import { useRouter } from "next/router";

const metaData = {
  title: "Tiny Whales",
  siteName: "Tiny Whales",
  description: "새로운 세상의 고래가 되어 보세요.",
  url: "https://tinywhales.org/",
  robots: "follow, index",
  image: "images/banner.png",
};

const SEO = () => {
  const router = useRouter();

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="robots" content={metaData.robots} />
      <meta content={metaData.description} name="description" />
      <meta property="og:url" content={`${metaData.url}${router.asPath}`} />

      {/* Open Graph */}
      <meta property="og:type" content={metaData.type} />
      <meta property="og:site_name" content={metaData.siteName} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:image" name="image" content={metaData.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />

      <link rel="icon" type="image/png" href="favicon.png" />

      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};

export default SEO;
