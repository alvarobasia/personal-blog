module.exports = {
  ci: {
    collect: {
      staticDistDir: './next',
      url: ['http://localhost:3000'],
      startServerCommand: 'npm run start',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};