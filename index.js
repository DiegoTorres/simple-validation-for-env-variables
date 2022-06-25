const check = (envList = []) => {
  let missing = false;
  const messages = [];
  for (const it of envList) {
    if (!process.env[it]) {
      missing = true;
      messages.push(`Missing env[${it}] variable.`);
    }
  }

  if (messages.length)
    throw new Error(`\n\n${messages.join('\n')}\n\n`);
};

module.exports = {
  check,
};
