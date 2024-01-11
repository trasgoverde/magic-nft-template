import Layout from "@/components/Layout";

import LoadingWrapper from "@/components/LoadingWrapper";
import CollectibleCard from "@/components/CollectibleCard";
import FaucetSection from "@/components/FaucetSection";
import ConnectOrMint from "@/components/ConnectOrMint";

// store a default listing of NFT images from the collection for display on the page
const tokens = [
  { id: 0, image: "/img/tokenomic_beer.png" },
  { id: 3, image: "/img/tokenomic_formation.png" },
  { id: 9, image: "/img/tokenomic_legal.png" },
  { id: 4, image: "/img/tokenomic_sinfondo.png" },
];

export default function Home() {
  return (
    <Layout title="Home" className="">
      <section className="hero">
        <h1 className="hidden custom-breakpoint-500:block">
          NFT World Token Congress 2024
        </h1>
        <h1 className="block custom-breakpoint-500:hidden">
          NFT World Token Congress&nbsp; 2024
        </h1>
        <p>
          Follow our{" "}
          <a
            href="https://github.com/trasgoverde/magic-nft-template"
            rel="noreferrer"
            target="_blank"
            className="text-brand-purple underline"
          >
            Potencia la Evolución Empresarial en el Universo Blockchain
          </a>{" "}
          World Token es mucho más que un evento; es una plataforma integral diseñada para catalizar el crecimiento y la adopción de la tecnología blockchain y la tokenización en el ámbito empresarial. Aquí algunas de las herramientas que nos permiten comunicar los beneficios de la tokenización en la economía real.
        </p>
      </section>

      <LoadingWrapper>
        <section className="space-t-4 mx-auto text-center">
          <ConnectOrMint />
        </section>

        <section className="mx-auto text-center">
          <FaucetSection />
        </section>

        <div className="flex justify-center">
          <section className="inline-grid place-items-center gap-8 md:grid-cols-3 lg:grid-cols-4">
            {tokens.slice(0, 4).map((item, id) => (
              <CollectibleCard key={id} item={item} />
            ))}
          </section>
        </div>
      </LoadingWrapper>
    </Layout>
  );
}
