import { Badge } from "@chakra-ui/react";
interface Props {
  criticScore: number;
}
const CriticScore = ({ criticScore }: Props) => {
  let colorScheme =
    criticScore > 75 ? "green" : criticScore > 60 ? "yellow" : "red";

  return (
    <Badge
      fontSize={14}
      paddingX={2}
      borderRadius="4PX"
      colorScheme={colorScheme}
    >
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
