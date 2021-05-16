import { r as registerInstance, h, g as getAssetPath } from './index-bf2c0524.js';

const appStartCss = ".app-start{width:100vw;height:100vh;position:relative;overflow:hidden;background-color:#EDE8E5}.app-start .hill,.app-start .hill-4,.app-start .hill-3,.app-start .hill-2,.app-start .hill-1{position:absolute;bottom:0}.app-start .hill-1{right:-1px;height:75%}.app-start .hill-2{left:0;height:81%}.app-start .hill-3{right:0;height:48%}.app-start .hill-4{left:0;height:42%}";

const AppStart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "app-start" }, h("img", { src: getAssetPath('./assets/hill-1.svg'), class: "hill-1" }), h("img", { src: getAssetPath('./assets/hill-2.svg'), class: "hill-2" }), h("img", { src: getAssetPath('./assets/hill-3.svg'), class: "hill-3" }), h("img", { src: getAssetPath('./assets/hill-4.svg'), class: "hill-4" })));
  }
  static get assetsDirs() { return ["assets"]; }
};
AppStart.style = appStartCss;

export { AppStart as app_start };
