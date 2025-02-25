import SerieCard from "@/components/serieCard";
import getRecommendations from "@/lib/getRecommendations";
import { Series } from "@/types";

const Page = async () => {
  const data = await getRecommendations();

  return (
    <section className="main-section xl:max-w-(--breakpoint-xl)">
      <h1 className="text-3xl font-bold pt-4 pb-8 text-center">
        Recomendaciones de series similares
      </h1>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:items-stretch">
        {data.map((serie: Series) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </div>
    </section>
  );
};

export default Page;
