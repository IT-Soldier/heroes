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
        <button type="submit" @click.prevent="addHandel" class="btn btn-success">添加</button>
    </form>
</template>

<script>

// import axios from 'axios';


export default {
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
        addHandel() {
            // axios
            this.$http
                .post('http://localhost:3001/heroes',this.formData)
                .then(response => {
                    // post添加数据成功,状态码为201
                    if(response.status === 201) {
                        // 使用编程式导航,跳回列表页面(用该方法失败了)router.push('/heroes'),why
                        // console.log(this.$router)
                        this.$router.push('/heroes')
                        // router.push('/heroes')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

}
</script>
    
<style>

</style>
