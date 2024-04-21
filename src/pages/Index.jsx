import { Box, VStack, HStack, Text, Input, Button, IconButton, useColorMode, useColorModeValue, Image } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <VStack p={4}>
      <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} />
      <Box bg={bgColor} w="100%" p={4} borderRadius="lg" boxShadow="md">
        <VStack spacing={4}>
          <HStack spacing={3} w="100%">
            <Image borderRadius="full" boxSize="50px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHx8fDE3MTM2NDg5NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Profile" />
            <Text fontWeight="bold" fontSize="lg" color={textColor}>
              John Doe
            </Text>
          </HStack>
          <VStack spacing={3} w="100%" overflowY="auto" maxH="400px" p={2}>
            <Box w="100%" p={2} bg="blue.500" color="white" borderRadius="lg" alignSelf="flex-start">
              <Text>Hello! How are you?</Text>
            </Box>
            <Box w="100%" p={2} bg="green.500" color="white" borderRadius="lg" alignSelf="flex-end">
              <Text>I'm fine, thanks! And you?</Text>
            </Box>
            <Box w="100%" p={2} bg="blue.500" color="white" borderRadius="lg" alignSelf="flex-start">
              <Text>Great! Working on a new project. Need to catch up soon!</Text>
            </Box>
          </VStack>
          <HStack w="100%">
            <Input placeholder="Type a message..." />
            <IconButton icon={<FaPaperPlane />} isRound={true} colorScheme="blue" onClick={() => alert("Message sent!")} />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
