import { configure } from "@storybook/vue";

import "@/assets/tailwind.css";
configure(require.context("../../src", true, /\.stories\.js$/), module);
