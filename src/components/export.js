import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

function toCamel(str) {
  return str.replace(/([^-])(?:-+([^-]))/g, function ($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}

const iconSymbol = "jfas-icon";
const JYfasIcon = FontAwesomeIcon;
JYfasIcon.name = toCamel(iconSymbol);

// use object to export
const JYfasIconPlug = {
  install: function (Vue, opts = { name: iconSymbol }) {
    JYfasIcon.name = toCamel(opts.name);
    Vue.component(opts.name, JYfasIcon);
  },
};
// or use function to export
// const JYfasIconPlug = function (Vue, opts = { name: iconSymbol }) {
//   JYfasIcon.name = toCamel(opts.name);
//   Vue.component(opts.name, JYfasIcon);
// };

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(iconSymbol, JYfasIcon);
}

export { JYfasIcon, iconSymbol };

export default JYfasIconPlug;
