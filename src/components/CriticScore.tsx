import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score >= 90 ? "green/50" : score >= 80 ? "yellow/50" : "red/50";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" bg={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
