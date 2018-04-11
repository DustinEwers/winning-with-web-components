/*! Built with http://stenciljs.com */
const{h:e}=window.AppLibrary;class t{constructor(){this.currentCount=0}componentWillLoad(){console.log("The counter component is about to be rendered")}componentDidLoad(){console.log("The counter component has been rendered")}componentWillUpdate(){console.log("The counter component will update")}componentDidUpdate(){console.log("The counter component did update")}componentDidUnload(){console.log("The view has been removed from the DOM")}changeCount(e){const t=this.currentCount;this.currentCount+=e,this.countChanged.emit({oldValue:t,newValue:this.currentCount})}render(){return e("div",{class:"card"},e("h5",{class:"card-header"},"Counter"),e("div",{class:"card-body"},e("p",null,"Current Count: ",this.currentCount),e("button",{class:"btn btn-primary",onClick:()=>this.changeCount(1)},"Increment"),e("button",{class:"btn btn-warning",onClick:()=>this.changeCount(-1)},"Decrement")))}static get is(){return"app-counter-card"}static get properties(){return{currentCount:{state:!0}}}static get events(){return[{name:"countChanged",method:"countChanged",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"button.btn{margin-right:5px}"}}export{t as AppCounterCard};