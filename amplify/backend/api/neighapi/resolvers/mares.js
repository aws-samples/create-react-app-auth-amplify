const Mare = require('../../models/mare');

const { transformMare } = require('./merge');

module.exports = {
  events: async () => {
    try {
      const mares = await Mare.find();
      return mares.map(mare => {
        return transformMare(mare);
      });
    } catch (err) {
      throw err;
    }
  },
  createMare: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    const mare = new Mare({
      name: args.mareInput.name,
      camera: args.mareInput.camera,
      dueDate: args.mareInput.dueDate,
      status: args.mareInput.status,
    });
    let createdMare;
    try {
      const result = await mare.save();
      createdMare = transformMare(result);

      return createdMare;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};