import { Card, CardContent, CardFooter } from "./ui/card";
import { Cast } from "@/types";
import ImageCastCardLoader from "./imageCastCardLoader";
import { Link } from "@/i18n/routing";

interface Props {
  cast: Cast;
}

const CastCard = ({ cast }: Props) => {
  return (
    <Link
      href={`https://www.themoviedb.org/person/${cast.id}?language=es-ES`}
      target="_blank"
    >
      <Card className="overflow-hidden w-40 lg:w-auto h-full">
        <CardContent className="p-0">
          <div className="relative rounded-full min-h-[240px] lg:min-h-[300px]">
            <ImageCastCardLoader
              imageUrl={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              imageAlt={cast.name}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center p-4">
          <p className="text-lg font-semibold text-center">{cast.name}</p>
          <p className="text-sm text-gray-500 text-center">
            {cast.roles[0].character}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CastCard;
