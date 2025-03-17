
import { ChakraProvider } from "@chakra-ui/react";
import ButtonsPage from "./ButtonsPage";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider  theme={theme}>
      <ButtonsPage />
    </ChakraProvider>
  );
}

export default App;

