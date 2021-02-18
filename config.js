const prefix = process.env.NODE_ENV === "production" ? "`" : '"';

function configGenerator(params) {
  /* Destructure params as you see fit */
  const { prefix } = params;

  return {
    bot: {
      prefix,
    },
    url: {
      repo: "https://github.com/codingthrone/coding-throne-bot",
    },
    messages: {
      notACommand: (wrongCommand) =>
        `\`${prefix}${wrongCommand}\` is not a command.\nType \`${prefix}help\` for more information my commands. :p`,
      contribute: (repo) =>
        `Our open-source code is hosted here:\n${repo}\n\nMost PRs will be accepted. So have fun!`,
    },
  };
}

module.exports = configGenerator({ prefix });
