module.exports = {
  // todos plugins
  presets: [
    // passando labels
    [
      '@babel/preset-env',
      {
        // preparando targets
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
