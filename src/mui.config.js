import {
    createTheme,
} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#D0071E",
        },
        secondary: {
            main: "#E1F5FE",
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: "10px",
                    fontSize: ".8rem"
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "0.8rem",
                    paddingTop: ".2rem"
                },
                shrink: {
                    fontSize: "1rem"
                },
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "#D0071E",
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            }
        },
    }
});