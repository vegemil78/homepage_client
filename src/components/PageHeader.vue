<!-- PageHeader.vue -->
<template>
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/board/list">게시판</router-link>|
        <router-link to="/board/BoardWrite">쓰기</router-link>|
        <router-link to="/bindtest">바인드테스트</router-link>|
        <router-link class="nav-link" to="/sales">제품등록페이지</router-link>|
        <router-link class="nav-link" to="/image_insert">사진등록</router-link>|
        <!-- <button class="btn btn-danger" type="button" @click="Login">로그인</button>| -->
        <button v-on:click="login">로그인</button>
      </div>
       </header>
    <hr/>

  </template>
  
  <script>
  import mixins from "@/mixins";
 export default {
  mixins: [mixins],
  name: 'PageHeader',
  computed: {
    // user() {
    //   return this.$store.state.user;
    // }
  },
  methods: {
    async login() {
      console.log("aaa");
      await this.$api("/api/login", {
        param: [
          {email:"kk@naver.com", nickname:"kump"},
          {nickname:"hoon"}
        ]
      });
    },
  }
}
  </script>
  
  <style scoped>
  
  </style>