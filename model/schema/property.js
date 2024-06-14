const mongoose = require("mongoose");

const fetchSchemaFields = async () => {
  const CustomFieldModel = mongoose.model("CustomField");
  return await CustomFieldModel.find({ moduleName: "Properties" });
};

const propertySchema = new mongoose.Schema({
  propertyPhotos: [],
  virtualToursOrVideos: [],
  floorPlans: [],
  propertyDocuments: [],
  propertyAddress: { type: String, default: "" },
  propertyType: { type: String, default: "" },
  squareFootage: { type: String, default: "" },
  yearBuilt: { type: Number, default: 0 },
  deleted: { type: Boolean, default: false },
  updatedDate: { type: Date, default: Date.now },
  createdDate: { type: Date },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const initializePropertySchema = async () => {
  const schemaFieldsData = await fetchSchemaFields();
  schemaFieldsData[0]?.fields?.forEach((item) => {
    propertySchema.add({ [item.name]: item?.backendType });
  });
};

const Property = mongoose.model("Properties", propertySchema, "Properties");
module.exports = { Property, initializePropertySchema };
