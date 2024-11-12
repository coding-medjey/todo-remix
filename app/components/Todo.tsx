import { Box, Container, Text, Icon } from "@chakra-ui/react";
import { Checkbox } from "./ui/CheckBox";
import { ImHourGlass } from "react-icons/im";
import { FcExpired } from "react-icons/fc";
import { Tooltip } from "./ui/Tooltip";

export default function Todo() {
  return (
    <Container paddingTop={"3rem"} width={"70%"}>
      <Box
        color={"rgb(182, 187, 196)"}
        display={"flex"}
        justifyContent={"space-between"}
        textAlign={"left"}
      >
        <Checkbox size={"md"} height={"1rem"} checked={false}>
          Accept terms and conditions
        </Checkbox>
        <Text display={"flex"} alignItems={"center"} gap={"0.5rem"}>
          <ImHourGlass />
          28th June
        </Text>
        <Tooltip content="You forgot to do the task">
          <Icon color={"red"} height={"1.5rem"} width={"1.5rem"}>
            <FcExpired  />
          </Icon>
        </Tooltip>
      </Box>
    </Container>
  );
}
