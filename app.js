const express = require('express'),
      app = express(),
      config = require('./config'),
      { rootRoute, exploreRoute, aboutRoute, loginRoute, registerRoute, profileRoute, patientRoute, logoutRoute } = require('./routes');

config(express, app);
rootRoute(app);
exploreRoute(app);
aboutRoute(app);
loginRoute(app);
registerRoute(app);
profileRoute(app);
patientRoute(app);
logoutRoute(app);

app.listen(5000, () => console.log('Server is running...'));
