import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
// interface Props {
//   onSearch: (searchText: string) => void;
// }
const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={16} />
      <SearchInput></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
