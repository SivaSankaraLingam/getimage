const { app } = require('@azure/functions');

app.http('getImages', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    ctx.log("getImages function triggered");

    return {
      status: 200,
      jsonBody: [
        {
          id: "1",
          name: "birds.jpg",
          url: "https://yazhini.blob.core.windows.net/processed-images/birds.jpg"
        }
      ]
    };
  }
});
