// TODO: get version from file
const VERSION_TO_LOOK_FOR = "1.0";
const CHECKED_COMMENT_TEXT = ` CHECKED ${VERSION_TO_LOOK_FOR}`;
const CHECKED_COMMENT = `//${CHECKED_COMMENT_TEXT}`;

const checkIfCheckedCommentIsLast = (sourceCode) => {
  const escapedText = sourceCode.text.replace(/\r\n|\r|\n/g, "");

  const indexOfCheckedComment = escapedText.indexOf(CHECKED_COMMENT);

  if (indexOfCheckedComment < 0) {
    return false;
  }

  return indexOfCheckedComment + CHECKED_COMMENT.length === escapedText.length;
};

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

        const checkedComment = node.comments.find(
          (comment) => comment.value === CHECKED_COMMENT_TEXT
        );

        if (!checkedComment) {
          context.report({
            node,
            message: "the checked comment is missing",
          });
        } else if (!checkIfCheckedCommentIsLast(context.sourceCode)) {
          context.report({
            node,
            message: "the checked comment should be at the end",
          });
        }
      },
    };
  },
};
