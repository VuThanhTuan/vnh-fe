import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    color1: "#01a8ee", // Xanh nước biển
    color2: "#f57761", // Cam đỏ
    color3: "#de1129", // Đỏ
    color4: "#ff017e", // Hồng
    color5: "#01a8ee", // Hồng tím
    color6: "#6871c1", // Tím xanh
    color7: "#7551e8", // Tím
    color8: "#1458e9", // Xanh dương đậm
    transparency: 0.15, // Độ trong suốt, mặc định 15%
  },
});

export default theme;
