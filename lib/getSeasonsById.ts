interface Props {
  seasonId: string;
  language?: string;
}
const getSeasonsById = async ({ seasonId, language = "en" }: Props) => {
  try {
    const searchParams = new URLSearchParams({
      language: language,
      api_key: process.env.API_KEY as string,
    });
    const response = await fetch(
      `${process.env.API_URL!}/season/${seasonId}?${searchParams}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getSeasonsById;
