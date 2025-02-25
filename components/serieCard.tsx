import { Series } from "@/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/card";
import VoteAverageBar from "./voteAverageBar";
import ImageCardLoader from "./imageCardLoader";
import { Link } from "@/i18n/routing";

interface Props {
  serie: Series;
}

const SerieCard = ({ serie }: Props) => {
  return (
    <Link
      href={`https://www.themoviedb.org/tv/${serie.id}?language=es-ES`}
      target="_blank"
    >
      <Card className="w-full overflow-hidden flex flex-col h-full">
        <div className="relative min-h-52 sm:min-w-80 lg:max-w-[400px]">
          <ImageCardLoader
            imageUrl={`https://image.tmdb.org/t/p/w400${serie.backdrop_path}`}
            imageAlt={`${serie.name} the office poster.`}
          />
        </div>
        <CardHeader>
          <CardTitle>{serie.name}</CardTitle>
          <CardDescription>
            {`${serie.first_air_date.split("-", 1)}`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <span className="text-sm text-gray-400">Valoración:</span>
          <VoteAverageBar voteAverage={serie.vote_average} />
        </CardContent>
        <CardFooter>
          <p className="line-clamp-6">{serie.overview}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default SerieCard;
