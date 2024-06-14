const mongoose = require("mongoose");

const fetchSchemaFields = async () => {
  const CustomFieldModel = mongoose.model("CustomField");
  return await CustomFieldModel.find({ moduleName: "Contacts" });
};

const contactSchema = new mongoose.Schema({
  interestProperty: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Properties",
    },
  ],
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
  createdDate: {
    type: Date,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const initializeContactSchema = async () => {
  const schemaFieldsData = await fetchSchemaFields();
  schemaFieldsData[0]?.fields?.forEach((item) => {
    contactSchema.add({ [item.name]: item?.backendType });
  });
};

const Contact = mongoose.model("Contacts", contactSchema, "Contacts");
module.exports = { Contact, initializeContactSchema };
