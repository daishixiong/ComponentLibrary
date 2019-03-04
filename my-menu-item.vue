<template>
    <div>
        <template v-if="(!item.children) || item.children.length === 0">
            <el-menu-item :index="item.key">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
        </template>
        <el-submenu v-else :index="item.key">
            <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </template>
            <my-menu-item v-for="child in item.children" :key="child.key" :index="child.key" :item="child"></my-menu-item>
        </el-submenu>
    </div>
</template>
<style lang="less"></style>
<script>
export default {
    name: 'MyMenuItem',
    props: {
        item: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>
