var panel = require("sdk/panel").Panel({
  width: 300,
  height: 200,
  contentURL: "http://www.google.com"
});

require("sdk/widget").Widget({
  id: "google",
  label: "Google",
  contentURL: "http://www.google.com/favicon.ico",
  panel: panel
});
