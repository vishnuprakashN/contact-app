import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';
import { lightBlue } from "@mui/material/colors";

export const tokens = (mode) => ({
    ...(mode === 'dark'
    ? {
        grey: {
            100: "#B5BDC9",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#1F2A40",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        greenAccent: {
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#47B5FF",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632",
        },
        greyAccent: {
            100: "#FFFFFF",
            200: "#B5BDC9",
            300: "#526581",
            400: "#09244B"
        },
        navbartext: {
            100: "#B5BDC9"
        },
        navbar:{
            100:"#1B2130"
        }
        
    } :{
        grey: {
            100: "#09244B",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },
        primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0",
            500: "#141b2d",
            600: "#434957",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
        },
        greenAccent: {
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
        },
        redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
        },
        blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#47B5FF",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe",
        },
        greyAccent: {
            100: "#FFFFFF",
            200: "#B5BDC9",
            300: "#526581",
            400: "#09244B"
        },
        navbartext: {
            100: "#526581"
        },
        navbar:{
            100:"#FFFFFF"
        }
    }
    ),
});


//colour design tokens
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return{
        palette: {
            mode: mode,
            ...(mode==='dark'
            ?{
                primary:{
                    main: colors.greenAccent[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.greenAccent[200],
                    main: colors.greenAccent[200],
                    light: colors.greenAccent[200],
                },
                background: {
                    default: colors.primary[600],
                }
            } : {
                primary:{
                    main: colors.greenAccent[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.greenAccent[500],
                    main: colors.greenAccent[500],
                    light: colors.greenAccent[500],
                },
                background: {
                    default: "#F2F4F6",
                }
            }
          )
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },

        },
    };
};


//context for color mode
export const ColorModeContext =  createContext({
    toggleColorMode: () =>{}
});

export const useMode = () =>{
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: ()=>
                setMode((prev) => (prev === "light" ? "dark": "light")),
        }),
        []
    );
    const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode]);
    return [theme,colorMode];
}