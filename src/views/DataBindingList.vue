<template>
    <div>
      <table>
        <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>도시</th>
        </tr>
        </thead>
        <tbody>
        <tr :key="index" v-for="(person, index) in peopleList">
          <td>{{person.name}}</td>
          <td>{{person.age}}</td>
          <td>{{person.city}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    </template>
     
    <script>
    import mixins from "@/mixins";
    export default {
      mixins: [mixins],
      data() {
        return {
          peopleList : []
        };
      },
      created() {
        this.getList();
      },
      methods : {
        async getList() {
          this.peopleList = await this.$api("https://e2f92c93-299e-41f9-bb9d-5150d25c3d92.mock.pstmn.io/test", "{\"aa\":1}");
          //this.peopleList = await this.$api("http://127.0.0.1:52273/content/test", "post","{\"aa\":1}");
          console.log(this.peopleList); //확인용
        }
      }
    }
    </script>
     
    <style scoped>
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
    </style>
    