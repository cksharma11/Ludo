const cookieParser = cookie => {
  const parsed = {};
  const kv = cookie.split("; ").map(pair => pair.split("="));
  kv.forEach(pair => {
    parsed[pair[0]] = pair[1];
  });
  return parsed;
};
