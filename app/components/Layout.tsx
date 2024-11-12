import { Container, Box} from "@chakra-ui/react";
import InputBox from "./InputBox";
import Header from "./Header";
import Todo from "./Todo";

export default function Layout() {
  return (
    <Container
      margin={0}
      padding={0}
      maxW="100%"
      minH="100vh"
      height={"30rem"}
      bgColor="rgb(22, 26, 48)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        textAlign="center"
        bgColor="rgb(49, 48, 77)"
        height="70%"
        width="80%"
        borderRadius="md"
      >
        <Header/>
        <InputBox/>
        <Todo/>
      </Box>
    </Container>
  );
}