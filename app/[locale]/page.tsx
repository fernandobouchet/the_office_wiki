import StatisticCards from "@/components/statisticCards";
import getSeriesData from "@/lib/getSeriesData";
import { Series } from "@/types";
import Image from "next/image";

export default async function Home() {
  const data: Series = await getSeriesData();
  return (
    <section className="main-section">
      <h1 className="text-3xl font-bold pt-4 pb-8 text-center">
        The Office Wiki
      </h1>
      <div className="relative h-80 lg:h-96 mx-auto">
        <Image
          src={`https://image.tmdb.org/t/p/original/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg`}
          alt={`${data.name} the office poster.`}
          fill
          className="mx-auto object-cover rounded-sm"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto py-8">
        <p className="text-center">{data.overview}</p>
      </div>
      <StatisticCards data={data} />
    </section>
  );
}
