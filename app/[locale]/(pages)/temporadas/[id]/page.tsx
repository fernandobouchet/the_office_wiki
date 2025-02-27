import EpisodeCard from "@/components/episodeCard";
import getSeasonsById from "@/lib/getSeasonsById";
import { Season } from "@/types";
import { getLocale, getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const locale = await getLocale();
  const data: Season = await getSeasonsById({
    seasonId: id.toString(),
    language: locale,
  });

  const t = await getTranslations("Shared");

  return (
    <section className="main-section xl:max-w-(--breakpoint-xl)">
      <div className="pt-4 pb-8 text-center">
        <h1 className="text-3xl font-bold mb-6">
          {t(`Season`)} {id}
        </h1>
        <p>{data.overview}</p>
      </div>
      <div className="flex flex-col items-stretch sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.episodes!.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
};

export default Page;
