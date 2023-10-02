// TODO: get version from file
const VERSION_TO_LOOK_FOR = "1.0";

const getNodeEnd = (node) => node.range[1];

// TODO: add suggestion
// TODO: make this fixable
module.exports = {
  meta: {
    type: "problem",
    hasSuggestions: false,
    fixable: false,
  },
  create(context) {
    return {
      Program(node) {
        // context.sourceCode.getCommentsAfter() is not working properly

        const nodeEnd = getNodeEnd(node);

        const checkedComment = node.comments.find(
          (comment) => comment.value === ` CHECKED ${VERSION_TO_LOOK_FOR}`
        );

        if (!checkedComment) {
          context.report({
            node,
            message: "the checked comment is missing",
          });
        } else if (getNodeEnd(checkedComment) < nodeEnd - 1) {
          context.report({
            node,
            message: "the checked comment should be at the end",
          });
        }
      },
    };
  },
};
