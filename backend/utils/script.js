const getBase64 = (username, password) => {
  const base64String = Buffer.from(username + ":" + password).toString(
    "base64"
  );
  console.log("Authorization: Basic " + base64String);
};

getBase64("username", "hacking");
