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
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5
    }
  },
  upload: {
    config: {
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
      },
      sizeLimit: 32 * 1024 * 1024
    },
  },
})