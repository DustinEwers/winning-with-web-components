import{h}from"../app-library.core.js";var BootstrapCard=function(){function e(){}return e.prototype.render=function(){return h("div",{class:"card"},h("h5",null,this.cardTitle),h("div",null,h("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"app-card"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cardTitle:{type:String,attr:"card-title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".card{padding:1rem;margin-bottom:1rem;-webkit-box-shadow:2px 2px 4px 0 #828282;-moz-box-shadow:2px 2px 4px 0 #828282;box-shadow:2px 2px 4px 0 #828282;max-width:50rem}"},enumerable:!0,configurable:!0}),e}(),CounterCard=function(){function e(){this.currentCount=0}return e.prototype.componentWillLoad=function(){console.log("The counter component is about to be rendered")},e.prototype.componentDidLoad=function(){console.log("The counter component has been rendered")},e.prototype.componentWillUpdate=function(){console.log("The counter component will update")},e.prototype.componentDidUpdate=function(){console.log("The counter component did update")},e.prototype.componentDidUnload=function(){console.log("The view has been removed from the DOM")},e.prototype.changeCount=function(e){var n=this.currentCount;this.currentCount+=e,this.countChanged.emit({oldValue:n,newValue:this.currentCount})},e.prototype.render=function(){var e=this;return h("app-card",{cardTitle:"Counter"},h("p",null,"Current Count: ",this.currentCount),h("button",{class:"btn btn-primary",onClick:function(){return e.changeCount(1)}},"Increment"),h("button",{class:"btn btn-warning",onClick:function(){return e.changeCount(-1)}},"Decrement"))},Object.defineProperty(e,"is",{get:function(){return"app-counter-card"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{currentCount:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"countChanged",method:"countChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"button.btn{margin-right:5px}"},enumerable:!0,configurable:!0}),e}();export{BootstrapCard as AppCard,CounterCard as AppCounterCard};