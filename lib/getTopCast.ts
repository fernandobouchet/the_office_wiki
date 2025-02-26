import { Cast } from "@/types";

interface Props {
  language?: string;
}

const getTopCast = async ({ language = "en" }: Props) => {
  try {
    const searchParams = new URLSearchParams({
      language: language,
      api_key: process.env.API_KEY as string,
    });
    const response = await fetch(
      `${process.env.API_URL!}/aggregate_credits?${searchParams}`
    );

    const data = await response.json();
    const filteredAndSortedData = data.cast
      .filter((cast: Cast) => cast.total_episode_count >= 40)
      .sort((castA: Cast, castB: Cast) => castA.order - castB.order);
    return filteredAndSortedData;
  } catch (error) {
    console.log(error);
  }
};

export default getTopCast;
