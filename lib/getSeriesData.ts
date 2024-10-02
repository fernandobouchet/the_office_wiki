const getSeriesData = async () => {
  const searchParams = new URLSearchParams({
    language: "es",
    api_key: process.env.API_KEY as string,
  });
  const response = await fetch(`${process.env.API_URL!}?${searchParams}`);

  const data = response.json();
  return data;
};

export default getSeriesData;
