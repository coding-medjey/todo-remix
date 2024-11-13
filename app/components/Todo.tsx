import { Box, Container, Text, Icon, Flex, Input } from "@chakra-ui/react";
import { Checkbox } from "./ui/CheckBox";
import { ImHourGlass } from "react-icons/im";
import { FcExpired } from "react-icons/fc";
import { Tooltip } from "./ui/Tooltip";
import { useLoaderData, useFetcher } from "@remix-run/react";

interface Todo {
  id: string;
  task: string;
  dueDate: number;
  isCompleted: boolean;
}

export default function Todo() {
  const todos: Todo[] = useLoaderData();
  const fetcher = useFetcher();

  const compareDates = (date1: number, date2: number) => {
    return date1 < date2;
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleCheckboxChange = (todo: Todo) => {
    fetcher.submit(
      {
        id: todo.id,
        _action: "put"
      },
      { method: "post" }
    );
  };

  return (
    <Container
      marginTop={["1rem", "2rem", "3rem"]}
      width={["95%", "90%", "80%", "70%"]}
      maxH={["80vh", "45vh", "48vh"]}
      overflowY="auto"
      px={["2", "4", "6"]}
    >
      {todos.map((todo) => (
        <Box
          key={todo.id}
          color="rgb(182, 187, 196)"
          padding={["0.75rem", "1rem"]}
          borderBottom="1px solid rgba(182, 187, 196, 0.1)"
          _hover={{ backgroundColor: "rgba(182, 187, 196, 0.05)" }}
        >
          <Flex
            direction={["column", "column", "row"]}
            justifyContent="space-between"
            alignItems={["flex-start", "flex-start", "center"]}
            gap={["0.5rem", "0.75rem", "1rem"]}
          >
            <Flex flex="1" minWidth="0">
              <fetcher.Form method="post">
                <Input type="hidden" name="id" value={todo.id} />
                <Input 
                  type="hidden" 
                  name="isCompleted" 
                  value={(!todo.isCompleted).toString()} 
                />
                <Checkbox
                  size={["sm", "md"]}
                  height={["0.875rem", "1rem"]}
                  checked={todo.isCompleted}
                  disabled={todo.dueDate && compareDates(todo.dueDate, Date.now())}
                  onChange={() => handleCheckboxChange(todo)}
                >
                  <Text fontSize={["sm", "md"]} wordBreak="break-word">
                    {todo.task}
                  </Text>
                </Checkbox>
              </fetcher.Form>
            </Flex>

            <Flex
              alignItems="center"
              gap={["0.5rem", "0.75rem", "1rem"]}
              width={["100%", "100%", "auto"]}
              justifyContent={["space-between", "space-between", "flex-end"]}
              mt={["0.5rem", "0.5rem", "0"]}
            >
              {todo.dueDate && (
                <Text
                  display="flex"
                  alignItems="center"
                  gap="0.5rem"
                  whiteSpace="nowrap"
                  fontSize={["xs", "sm", "md"]}
                >
                  <Icon
                    color="red"
                    size={["14px", "16px", "18px"]}
                    height={["1.25rem", "1.5rem"]}
                    width={["1.25rem", "1.5rem"]}
                  >
                    <ImHourGlass />
                  </Icon>
                  {formatDate(todo.dueDate)}
                </Text>
              )}

              {todo.dueDate && compareDates(todo.dueDate, Date.now()) && (
                <Tooltip content="You forgot to do the task">
                  <Flex alignItems="center" cursor="pointer">
                    <Icon
                      color="red"
                      height={["1.25rem", "1.5rem"]}
                      width={["1.25rem", "1.5rem"]}
                    >
                      <FcExpired />
                    </Icon>
                  </Flex>
                </Tooltip>
              )}
            </Flex>
          </Flex>
        </Box>
      ))}
    </Container>
  );
}