export default {
  Query: {
    async getAddress(root, args, { models }) {
      return models.Address.findAll();
    },
    async getAddressByPincode(root, { id }, { models }) {
      return models.Address.findByPk(id);
    }
  },

  Mutation: {
    createAddress: (parent, args, { models }, info) =>
      models.Address.create({
        args
      })
  }
};
