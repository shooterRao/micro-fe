module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage", // "usage" | "entry" | false
        corejs: 3,
        debug: false // 可以看引入了哪些polyfill
      }
    ]
  ]
};
