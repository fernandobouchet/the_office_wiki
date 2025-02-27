"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Episode } from "@/types";
import VoteAverageBar from "./voteAverageBar";
import ImageCardLoader from "./imageCardLoader";
import { useTranslations } from "next-intl";

interface Props {
  episode: Episode;
}

const EpisodeCard = ({ episode }: Props) => {
  const t = useTranslations("Shared");
  return (
    <Card className="w-full overflow-hidden flex flex-col h-auto">
      <div className="relative min-h-52 sm:min-w-80 lg:min-w-96">
        <ImageCardLoader
          imageUrl={`https://image.tmdb.org/t/p/w400${episode.still_path}`}
          imageAlt={`${episode.name} the office poster.`}
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded">
          {t(`Season`)} {episode.episode_number}
        </div>
      </div>
      <div>
        <CardHeader>
          <CardTitle>{episode.name}</CardTitle>
          <CardDescription>
            {t(`Season`)} {episode.episode_number} • {episode.air_date}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between"></div>
          <span className="text-sm text-gray-400">{t(`Rating`)}:</span>
          <VoteAverageBar voteAverage={episode.vote_average} />
        </CardContent>
        <CardFooter>
          <p>{episode.overview}</p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default EpisodeCard;
