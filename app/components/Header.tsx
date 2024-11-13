import { Button, Flex, Heading } from "@chakra-ui/react";
import { IoIosCheckbox } from "react-icons/io";

export default function Header (){
    return (
        <Flex>
        <Heading 
          display="flex" 
          fontSize={"2rem"}
          margin="auto" 
          padding="2rem" 
          paddingTop="1.5rem" 
          color="rgb(240, 236, 229)"
          alignItems="center"
          gap="0.5rem"
        >
          <IoIosCheckbox style={{ fontSize: '1.2em' }} />
          My Todos
        </Heading>
        
      </Flex>
    )
}