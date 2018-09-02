<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <!-- router-link标签,to属性必须要有,否则标签的状态不会生效 -->
        <router-link class="btn btn-success" to="/heroes/add">Add</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>英雄名称</th>
                        <th>英雄性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in list" :key="item.id">
                        <td>{{index + 1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.gender}}</td>
                        <td>
                            <!-- <a href="edit.html">edit</a> -->
                            <!-- to属性不绑定的情况下,=后面全为字符串 -->
                            <router-link :to="'/heroes/edit/'+ item.id">Edit</router-link>
                            <!-- 去阻止a标签的默认跳转行为 -->
                            <a href="javascript:;" @click.prevent="deleteHandel(item.id)">delete</a>
                        </td>
                    </tr>
                    <!-- 如果没有数据时,就显示下面的文字 -->
                    <tr>
                        <!-- 注意行合并与列合并,是针对td,表格的 -->
                    <td v-show="list.length==0" colspan="4" align="center">暂无数据显示</td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    // 查询操作
export default {
    // 引入axios插件
    // 依旧是个组件,组件即为Vue实例,是实例就可以使用相关方法
    // 组件的data要求必须是个函数,且返回一个对象
    data() {
            return {
                list : []
            }
        },
        methods : {
            loadData() {
                axios
                    .get('http://localhost:3001/heroes')
                    .then(response => {
                        if(response.status === 200) {
                            // 状态码为200时,即为数据请求成功
                            // console.log(response.data)
                            this.list = response.data;
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            deleteHandel(id) {
                if(!confirm('是否确认删除?')) {
                    return;
                }
                axios
                    .delete(`http://localhost:3001/heroes/${id}`)
                    .then(response => {
                        if(response.status == 200) {
                            this.loadData();
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        mounted() {
            // 选择在挂载之后去加载数据
            this.loadData();
        }
    
}
</script>

<style>

</style>


