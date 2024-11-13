import { Container, Box, Button } from "@chakra-ui/react";
import InputBox from "./InputBox";
import Header from "./Header";
import Todo from "./Todo";
import { Form } from "@remix-run/react";

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
      flexDirection={"column"}
    >
      <Box
        textAlign="center"
        bgColor="rgb(49, 48, 77)"
        height="70%"
        width="80%"
        borderRadius="md"
      >
        <Header />
        <InputBox />
        <Todo />
      </Box>
      <Form method="delete">
        <Button
          type="submit"
          backgroundColor="black"
          color="white"
          size="sm"
          _hover={{
            backgroundColor: "gray.800",
          }}
          _active={{
            backgroundColor: "gray.700",
          }}
          borderRadius="0.2rem"
          name="_action"
          value="delete"
          margin={"1rem"}
          variant={"subtle"}
        >
          Delete Expired and Compeleted
        </Button>
      </Form>
    </Container>
  );
}
