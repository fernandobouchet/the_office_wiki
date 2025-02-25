import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Season } from "@/types";
import { Link } from "@/i18n/routing";
import VoteAverageBar from "./voteAverageBar";
import ImageCardLoader from "./imageCardLoader";

interface Props {
  season: Season;
}

const SeasonCard = ({ season }: Props) => {
  return (
    <Card className="w-full overflow-hidden">
      <div className="relative min-h-52 sm:min-w-80 lg:max-w-[400px]">
        <ImageCardLoader
          imageUrl={`https://image.tmdb.org/t/p/w400${season.poster_path}`}
          imageAlt={`${season.name} the office poster.`}
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded">
          Temporada {season.season_number}
        </div>
      </div>
      <CardHeader>
        <CardTitle>The Office</CardTitle>
        <CardDescription>
          Temporada {season.season_number} • {season.air_date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{season.episode_count} episodios</span>
        </div>
        <span className="text-sm text-gray-500">Valoración:</span>
        <VoteAverageBar voteAverage={season.vote_average} />
      </CardContent>
      <CardFooter>
        <Link className="w-full" href={`/temporadas/${season.season_number}`}>
          <Button className="w-full">Más información</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SeasonCard;
