export default {
  Query: {
    async getplacecode(root, args, { models }, info) {
      return models.PlaceCode.findAll();
    },
    async getPlaceCodeByPincode(root, { id }, { models }) {
      return models.PlaceCode.findByPk(id);
    }
  },

  Mutation: {
    createPlaceCode(parent, { placeArray }, { models }, info) {
      placeArray.PlaceCode = makeid(10);
      console.log("place", placeArray);
      return models.PlaceCode.create(placeArray);
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
