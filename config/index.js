import path from "path";
import fs from "fs";
import dotenv from "dotenv";

const envPath = path.resolve(process.cwd(), ".env.local");
const isExistLocalEnv = fs.existsSync(envPath);

dotenv.config(
  isExistLocalEnv && {
    path: envPath,
  }
);

const config = {
  projectName: "chunsheng",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {
    __API_HOST__: JSON.stringify(process.env.API_HOST),
  },
  copy: {
    patterns: [],
    options: {},
  },
  alias: {
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/composables": path.resolve(__dirname, "..", "src/composables"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
  },
  framework: "vue3",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
