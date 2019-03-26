<style></style>
<script>
    export default {
        components: {
            UiCoustom: {
                template: '<div> I AM UI-COUSTOM </div>'
            }
        },
        data() {
            return {
                dialogVisible: true
            };
        },
        created() {

        },
        methods() {
            // handleClose(done) {
            //     console.log('点击 xx close');
            //     done();
            // },
            close() {
                console.log('close');
                this.dialogVisible = false;
            },
            ok() {
                console.log('ok');
                this.$emit('ok', ...arguments);
                this.dialogVisible = false;
            }

        },
        render(createElement) {
            let that = this;
            let dialogOption = {
                props: Object.assign(this.dialogOption, {
                    visible: this.dialogVisible,
                    beforeClose(done) {
                        that.dialogVisible = false;
                    }
                })
            };
            let extOption = {
                props: this.extOption,
                on: {
                    close: this.close,
                    ok: this.ok
                }
            };
            return  <el-dialog {...dialogOption}>
                       <ui-coustom {...extOption}></ui-coustom>
                    </el-dialog>
        }
    };
</script>
