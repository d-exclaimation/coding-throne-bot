const prefix = process.env.NODE_ENV === "production" ? "`" : '"';

function configGenerator(params) {
  /* Destructure params as you see fit */
  const {prefix} = params;
  
  return {
    prefix,
  };
}

module.exports = configGenerator({prefix});
