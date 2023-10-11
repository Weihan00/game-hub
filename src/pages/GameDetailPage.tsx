import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <div>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id}></GameTrailer>
      <GameScreenshot gameId={game.id}></GameScreenshot>
    </div>
  );
};

export default GameDetailPage;
