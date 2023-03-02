import type { AppProps } from "next/app";

import { useEffect, useMemo, useState } from "react";

import { getStoredTheme, getThemeOptions, setStoredTheme } from "../theme";
import {
    createTheme,
    PaletteMode,
    ThemeProvider,
    CssBaseline,
} from "@mui/material";
import Layout from "../components/Layout";
import TopBar from "../components/Appbar";

function MyApp({ Component, pageProps }: AppProps) {


    const [mode, setMode] = useState<PaletteMode>("light");
    
    useEffect(() => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            setMode(storedTheme);
        } else {
            const isWindowDefined = typeof window !== "undefined";
            const prefersDarkMode =
                (isWindowDefined &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
                false;
            if (!prefersDarkMode)//se nao quiser dark set light
                setMode(mode);
            else
                setMode("dark");
        }
    }, [mode]);

    const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar
                mode={mode}
                onClick={() => {
                    const newMode = mode === "dark" ? "light" : "dark";
                    setMode(newMode);
                    setStoredTheme(newMode);
                }}
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
