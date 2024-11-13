import { Box, Button, Input } from "@chakra-ui/react";
import { Field } from "~/components/ui/Field";
import { Form } from "@remix-run/react";

export default function InputBox() {
  return (
    <Form method="post">
      <Box
        width="75%"
        bgColor="#B6BBC4"
        margin="auto"
        height="2.6rem"
        mx="10%"
        display="flex"
        alignItems="center"
        gap="2"
        borderRadius="0.2rem"
        padding="2"
      >
        <Field flex="1" color="black">
          <Input
            width="100%"
            backgroundColor="#B6BBC4"
            border="none"
            _focus={{
              border: "none",
              boxShadow: "none",
              outline: "none",
              backgroundColor: "#B6BBC4",
            }}
            _hover={{
              border: "none",
              backgroundColor: "#B6BBC4",
            }}
            name="task"
            placeholder="Add a new todo..."
          />
        </Field>
        <Field width="auto" color="black">
          <Input
            name="date"
            backgroundColor="#B6BBC4"
            border="none"
            size={"sm"}
            px="2"
            _focus={{
              border: "none",
              boxShadow: "none",
              outline: "none",
              backgroundColor: "#B6BBC4",
            }}
            _hover={{
              border: "none",
              backgroundColor: "#B6BBC4",
            }}
            type="date"
          />
        </Field>
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
          value="create"
        >
          Add
        </Button>
      </Box>
    </Form>
  );
}
