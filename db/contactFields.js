const contactFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    fixed: true,
    delete: false,
    belongsTo: null,
    backendType: "String",
    isTableField: true,
    options: [],
    validation: [
      {
        require: true,
        message: "",
      },
    ],
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    fixed: true,
    delete: false,
    belongsTo: null,
    backendType: "Number",
    isTableField: true,
    options: [],
    validation: [
      {
        require: true,
        message: "",
      },
    ],
  },
];
exports.contactFields = contactFields;
