import path from "path";

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "src/pages/index",
      },
    ];
  },
  plugins: [
    "react-static-plugin-typescript",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};
