/*! Built with http://stenciljs.com */
const{h:t}=window.AppLibrary;class e{render(){return t("div",{class:"form-container form-group"},t("label",{htmlfor:this.id},this.label),t("input",{id:this.id,type:this.type,class:"form-control"}))}static get is(){return"app-field"}static get properties(){return{id:{type:String,attr:"id"},label:{type:String,attr:"label"},type:{type:String,attr:"type"}}}static get style(){return".form-container{width:400px;padding-bottom:5px}"}}export{e as AppField};