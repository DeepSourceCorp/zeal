import { configure } from "@storybook/vue";

import "../src/assets/css/tailwind.css";
import "../src/assets/css/typography.css";
import "../src/assets/css/layout.css";

configure(require.context("../src", true, /\.stories\.js$/), module);
