import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from '/imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App dim={10} />, document.getElementById('react-root'));
});
