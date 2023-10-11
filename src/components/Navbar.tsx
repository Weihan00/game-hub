import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
// interface Props {
//   onSearch: (searchText: string) => void;
// }
const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize={16} objectFit="cover" />
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
