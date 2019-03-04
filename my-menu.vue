<template>
    <el-menu
        :default-active="defaultActive"
        @select="handleClick"
        class="el-menu-vertical-demo">
        <my-menu-item v-for="item in menuData" :key="item.key" :item="item"></my-menu-item>
    </el-menu>
</template>
<style lang="less" scoped></style>

<script>
import MyMenuItem from './my-menu-item.vue';
export default {
    components: {
        MyMenuItem
    },
    props: {
        defaultActive: {
            type: [String, Number],
            default() {
                return '';
            }
        },
        menuData: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        handleClick(index, indexPath) {
            this.$emit('select', index, indexPath);
        }
    }
};
</script>

