const t=window.AppLibrary.h;class e{render(){return t("div",{class:"app-field"},t("label",{htmlFor:this.id},this.label),t("input",{id:this.id,type:this.type,class:"form-control"}))}static get is(){return"app-field"}static get properties(){return{id:{type:String,attr:"id"},label:{type:String,attr:"label"},type:{type:String,attr:"type"}}}static get style(){return".app-field{margin-bottom:.75rem}.app-field>label{display:block}"}}export{e as AppField};