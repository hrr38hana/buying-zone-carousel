const _ = require('lodash');

module.exports = _.template(`
<!DOCTYPE html>
<html>

<head>
  <title> Buying Zone </title>

  <meta name="author" content="Adam Gipril">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
  <!-- react-devtools -->
  <script src="http://localhost:8097"></script>
</head>

<body>
  <div id="buying-zone"></div>
  <script> window.__product__ = <%= product %> </script>
  <script src="bundle.js"></script>
</body>

</html>

`);