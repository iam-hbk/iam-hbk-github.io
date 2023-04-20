import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#CD5115",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
  },
});
export default theme;
