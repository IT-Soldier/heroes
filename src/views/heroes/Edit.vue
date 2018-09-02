<template>
    <form>
        <div class="form-group">
            <label for="heroName">英雄名称</label>
            <input type="text" class="form-control" id="heroName" placeholder="英雄名称" v-model="formData.name">
        </div>
        <div class="form-group">
            <label for="heroGender">英雄性别</label>
            <input type="text" class="form-control" id="heroGender" placeholder="英雄性别" v-model="formData.gender">
        </div>
        <!-- 去阻止submit的默认提交事件 -->
        <button type="submit" @click.prevent="editHandel" class="btn btn-success">修改</button>
    </form>
</template>

<script>

// import axios from 'axios';
export default {
    props : ['id'],
    // 相当于在data中添加了一个id
    data() {
        return {
            // 定义一个对象,去拿表单的值,方便post传递值
            formData : {
                name : '',
                gender : ''
            }
        }
    },
    methods : {
        editHandel() {
            // axios
            this.$http
                .put(`heroes/${this.id}`,this.formData)
                .then(response => {
                    // post添加数据成功,状态码为201
                    if(response.status === 200) {
                        // 使用编程式导航,跳回列表页面(用该方法失败了)router.push('/heroes'),why
                        // console.log(this.$router)
                        this.$router.push('/heroes')
                        // router.push('/heroes')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadData() {
            // axios
            this.$http
                .get(`heroes/${this.id}`)
                .then(response => {
                    if(response.status === 200) {
                        // 状态码为200时,即为数据请求成功
                        // console.log(response.data)
                        this.formData = response.data;
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.loadData();
    }

}
</script>

<style>

</style>
