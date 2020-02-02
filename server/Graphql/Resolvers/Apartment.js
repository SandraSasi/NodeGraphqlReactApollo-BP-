export default {
  Query: {
    async getFlat(root, args, { models }, info) {
      return models.Apartment.findAll();
    },
    async getFlatbyId(root, { id }, { models }) {
      return models.Apartment.findByPk(id);
    }
  },

  Mutation: {
    createFlat(parent, { flat }, { models }, info) {
      let result;
      flat.FlatId = makeid(10);
      let aid = makeid(10);
      flat.AddressId = aid;
      var { Address, ...rest } = flat;
      console.log("place", rest);
      let add = models.Address.create({ ...Address, AddressId: aid });
      result = models.Apartment.create(rest);
      result.Address = add;
      return add;
    }
  }
};
function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
