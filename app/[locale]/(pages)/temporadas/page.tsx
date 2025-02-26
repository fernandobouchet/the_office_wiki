import SeasonCard from "@/components/seasonCard";
import getSeriesData from "@/lib/getSeriesData";
import { Seasons } from "@/types";
import { getLocale } from "next-intl/server";

const Page = async () => {
  const locale = await getLocale();

  const data: Seasons = await getSeriesData({ language: locale });
  return (
    <section className="main-section xl:max-w-(--breakpoint-xl)">
      <h1 className="text-3xl font-bold pt-4 pb-8 text-center">
        Temporadas de The Office
      </h1>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:items-stretch">
        {data.seasons.slice(1).map((season) => (
          <SeasonCard key={season.season_number} season={season} />
        ))}
      </div>
    </section>
  );
};

export default Page;
