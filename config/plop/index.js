const path = require("path");

const OUTPUT_TARGET_COMPONENT = path.resolve(
  `${__dirname}/../../src/Components`
);
const COMPONENT_TEMPLATE_PATH = `${__dirname}/Components`;

module.exports = function (plop) {
  plop.setGenerator("Component", {
    prompts: [
      {
        name: "name",
        type: "input",
        message: "Name of your Component?",
        validate: function (value) {
          if (/([A-Z][a-z]+)+/.test(value)) {
            return true;
          }
          return " the component name must be in the hump form ";
        },
      },
    ],
    actions: ({ name }) => {
      const actions = [];
      //main component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_COMPONENT}/${name}/${name}Component.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/component.js.hbs`,
      });
      //style component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_COMPONENT}/${name}/${name}.style.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/style.js.hbs`,
      });

      return actions;
    },
  });
};
