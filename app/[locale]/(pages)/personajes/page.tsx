import CastCard from "@/components/castCard";
import getTopCast from "@/lib/getTopCast";
import { Cast } from "@/types";
import { getLocale, getTranslations } from "next-intl/server";

const Page = async () => {
  const locale = await getLocale();

  const data: Cast[] = await getTopCast({ language: locale });

  const t = await getTranslations("CastPage");

  return (
    <section className="main-section">
      <h1 className="text-3xl font-bold pt-4 pb-8 text-center">{t(`title`)}</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.map((cast) => (
          <CastCard key={cast.id} cast={cast} />
        ))}
      </div>
    </section>
  );
};

export default Page;
