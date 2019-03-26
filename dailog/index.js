import Dailog from './dailog.vue';
let D = {
    created(vue) {
        /**
         * @params: template 弹框页面
         * @params: dialogOption: element-ui dialog组件相关props参数
         * @params: extOPtion: 弹框props参数
         * **/
        vue.prototype.$dailog = function(template, dialogOption, extOption) {
            let vm = null;
            let NewDialog = Object.create(Dailog);
            if (template) {
                Object.assign(NewDialog.components, {
                    UiCoustom: template
                });
            }
            NewDialog.propsData = {
                dialogOption: dialogOption,
                extOption: extOption
            };
            vm = new vue(NewDialog).$mount();
            vm.dialogVisible = true;
            document.body.appendChild(vm.$el);
            return vm;
        }
    }
};

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    D.created(Vue);
}
export default install;


