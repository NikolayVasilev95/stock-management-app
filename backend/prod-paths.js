const tsConfigPaths = require("tsconfig-paths");

tsConfigPaths.register({
  baseUrl: "./dist",
  paths: {
    "@my-types/*": ["./libs/types/*"],
  },
});
