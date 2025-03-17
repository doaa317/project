import { Button, VStack, Container, Heading } from "@chakra-ui/react";

function ButtonsPage() {
  return (
    <Container centerContent p={5}>
      <Heading mb={4} color="teal.500">
        welcom
      </Heading>
      <VStack spacing={4}>
        <Button bg="primary.500" size="sm">click me</Button>
        <Button  bg="danger.500" size="md">click me</Button>
        <Button colorScheme="danger" size="lg">click me</Button>
        <Button  boxShadow="soft" colorScheme="secondary" variant="outline">click me </Button>
        <Button colorScheme="warning"  > click me </Button>
      </VStack>
    </Container>
  );
}

export default ButtonsPage;
