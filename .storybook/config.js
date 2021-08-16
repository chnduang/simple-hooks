import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import "../src/styles/index.less"
library.add(fas);

setOptions({
  sortStoriesByKind: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: false,
});

const req = require.context('../stories/', true, /\.story\.tsx?$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

configure(loadStories, module);
