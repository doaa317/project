import { extendTheme } from "@chakra-ui/react";
import designToken from "./designToken.json"; 

const theme = extendTheme({
  colors: designToken.colors,
  fontSizes: designToken.fontSizes,
  radii: designToken.borderRadius ,
  shadow: designToken.shadows,
  
});

export default theme;
