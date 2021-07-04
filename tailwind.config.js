module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    base: "hsl(203, 89%, 53%)",
                    dark: "hsl(203, 79%, 48%)",
                    light: "hsl(203, 75%, 78%)",
                    extraLight: "hsl(205, 92%, 95%)",
                    lightest: "hsl(192, 19%, 95%)",
                },
                gray: {
                    dark: "#657786",
                    light: "#AAB8C2",
                    extraLight: "#E1E8ED",
                    lightest: "#F5F8FA",
                },
                hoverBlue: "hsl(205, 58%, 93%)",
                green: {
                    base: "hsl(147, 56%, 51%)",
                    hover: "hsl(148, 38%, 91%)",
                },
                red: {
                    base: "hsl(341, 75%, 51%)",
                    hover: "hsl(341, 49%, 92%)",
                },
                black: "#14171A",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
