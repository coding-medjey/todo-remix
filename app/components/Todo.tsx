import { Box, Container, Text, Icon, Flex } from "@chakra-ui/react";
import { Checkbox } from "./ui/CheckBox";
import { ImHourGlass } from "react-icons/im";
import { FcExpired } from "react-icons/fc";
import { Tooltip } from "./ui/Tooltip";
import data from "./meta";

export default function Todo() {
  const todos = data["todos"];

  const compareDates = (date1: number, date2 : number) => {
    // Convert to milliseconds if they're not already
    const timestamp1 = typeof date1 === 'object' ? date1.getTime() : date1;
    const timestamp2 = typeof date2 === 'object' ? date2.getTime() : date2;
    
    return timestamp1 < timestamp2
}


  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Container
      marginTop={["1rem", "2rem", "3rem"]}
      width={["95%", "90%", "80%", "70%"]}
      maxH={["80vh", "45vh", "48vh"]}
      overflowY="auto"
      px={["2", "4", "6"]}
    >
      {todos.map(({ id, task, dueDate, isCompleted }) => (
        <Box
          key={id}
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
              <Checkbox 
                size={["sm", "md"]} 
                height={["0.875rem", "1rem"]}
                checked={isCompleted}
              >
                <Text 
                  fontSize={["sm", "md"]} 
                  wordBreak="break-word"
                >
                  {task}
                </Text>
              </Checkbox>
            </Flex>

            <Flex 
              alignItems="center" 
              gap={["0.5rem", "0.75rem", "1rem"]}
              width={["100%", "100%", "auto"]}
              justifyContent={["space-between", "space-between", "flex-end"]}
              mt={["0.5rem", "0.5rem", "0"]}
            >
              {dueDate && (
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
                   <ImHourGlass/>
                  </Icon>
                  {formatDate(dueDate)}
                </Text>
              )}

              {dueDate && compareDates(dueDate,Date.now()) && <Tooltip content="You forgot to do the task">
                <Flex alignItems="center" cursor="pointer">
                  <Icon 
                    color="red" 
                    height={["1.25rem", "1.5rem"]} 
                    width={["1.25rem", "1.5rem"]}
                  >
                    <FcExpired />
                  </Icon>
                </Flex>
              </Tooltip>}
            </Flex>
          </Flex>
        </Box>
      ))}
    </Container>
  );
}