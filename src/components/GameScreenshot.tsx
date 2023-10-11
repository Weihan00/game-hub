import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshot";
interface Props {
  gameId: number;
}
const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  console.log("scree", data);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
