import { Progress } from "./ui/progress";

interface Props {
  voteAverage: number;
}

const VoteAverageBar = ({ voteAverage }: Props) => {
  const value = (voteAverage * 10).toPrecision(2);

  return (
    <div className="flex items-center gap-2">
      <Progress className="*:bg-green-600! h-3" value={Number(value)} />
      <span className="text-sm">{value}%</span>
    </div>
  );
};

export default VoteAverageBar;
