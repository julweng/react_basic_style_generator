import "regenerator-runtime/runtime"
import "./jestExtensions"

// window events
global.scrollTo = () => {}
Element.prototype.scrollIntoView = () => {}
