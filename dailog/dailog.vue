<template>
    <div>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <ui-coustom @close="close" @ok="ok"></ui-coustom>
        </el-dialog>
    </div>
</template>
<style>

</style>
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
            handleClose(done) {
                console.log('点击 xx close');
                done();
            },
            close() {
                console.log('close');
                this.dialogVisible = false;
            },
            ok() {
                console.log('ok');
                this.$emit('ok', ...arguments);
                this.dialogVisible = false;
            }

        }
    };
</script>
