import { ReactNode } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading>{term}</Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
