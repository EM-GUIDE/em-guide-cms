module.exports = ({ env }) => ({
  "generate-data": {
    enabled: true,
  },
  'drag-drop-content-types': {
    enabled: true
  },
  'strapi-blurhash': {
    enabled: true,
    config: {
      regenerateOnUpdate: true
    }
  }
})