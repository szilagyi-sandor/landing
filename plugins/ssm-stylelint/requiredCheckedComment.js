const stylelint = require("stylelint");

// TODO: get version from file
const VERSION_TO_LOOK_FOR = "1.0";
const CHECKED_COMMENT_TEXT = `CHECKED ${VERSION_TO_LOOK_FOR}`;
const CHECKED_COMMENT = `// ${CHECKED_COMMENT_TEXT}`;

const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = "ssm-plugin/requiredCheckedComment";

const messages = ruleMessages(ruleName, {
  missing: () => "the checked comment is missing",
  placement: () => "the checked comment should be at the end",
});

const checkIfCheckedCommentIsLast = (checkedComment) => {
  const escapedText = checkedComment.source.input.css.replace(
    /\r\n|\r|\n/g,
    ""
  );

  const indexOfCheckedComment = escapedText.indexOf(CHECKED_COMMENT);

  if (indexOfCheckedComment < 0) {
    return false;
  }

  return indexOfCheckedComment + CHECKED_COMMENT.length === escapedText.length;
};

module.exports = stylelint.createPlugin(
  ruleName,
  function getPlugin(primaryOption, secondaryOptionObject, context) {
    return function lint(postcssRoot, postcssResult) {
      const validOptions = validateOptions(postcssResult, ruleName, {});

      if (!validOptions) {
        return;
      }

      let checkedComment = undefined;
      const isAutoFixing = Boolean(context.fix);

      postcssRoot.walkComments((comment) => {
        if (comment.text === CHECKED_COMMENT_TEXT && !checkedComment) {
          checkedComment = comment;
        }
      });

      if (!isAutoFixing) {
        if (!checkedComment) {
          report({
            ruleName,
            result: postcssResult,
            message: messages.missing(),
            node: postcssRoot,
          });
        } else if (!checkIfCheckedCommentIsLast(checkedComment)) {
          report({
            ruleName,
            result: postcssResult,
            message: messages.placement(),
            node: checkedComment,
            word: CHECKED_COMMENT,
          });
        }
      }
    };
  }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
