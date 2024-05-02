<!-- PageAbout.vue -->
<template>
    <div class="about">
      <h1>This is an about page</h1>
      <button id="confirm" v-on:click="btn_confirm">확인하기</button>
      <h1>This is an about page</h1>
      <button id="login" v-on:click="login2">LOGIN TEST</button>
    </div>
</template>
<script>
import mixins from "@/mixins";
import axios from 'axios';

export default{
  mixins: [mixins],
  nmae: "about",
  methods :{
    btn_confirm: function() {
      alert('hello ' + "good");
    },
    async login2() {
      //console.log("aaa");
      
      //await this.$api("https://e2f92c93-299e-41f9-bb9d-5150d25c3d92.mock.pstmn.io/test", {
      // await this.$api("http://127.0.0.1:52273/content/test", {
      //   param: [
      //     {email:"kk@naver.com", nickname:"kump"},
      //     {nickname:"hoon"}
      //   ]
      // });
      await this.$api("/content/test", {
        param: [
          {email:"kk@naver.com", nickname:"kump"},
          {nickname:"hoon"}
        ]
      });
      alert('hello ' + "Login");
    },
    testAxios(){
      axios({
        headers : {
          "Content-Type": "multipart/form-data",
        },
        method: 'post',
        url: "http://127.0.0.1:52273/content/test/",
        data:{
          boardnum: 1,
        }
      })
    }
  }

}
</script>
