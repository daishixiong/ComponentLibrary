import Dailog from './dailog.vue';
let D = {
    created(vue) {
        vue.prototype.$dailog = function(template) {
            let vm = Object.created(Dailog);
            if (template) {
                Object.assign(vm.components, {
                    UiCoustom: template
                });
            }
            vm = new vue(Dailog).$mount();
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


