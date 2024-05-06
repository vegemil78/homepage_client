<template>
<<<<<<< HEAD
  <!-- <div>
    <button @click="getVisitCount()">클릭</button>	
  </div> -->
  <tr :key="i" v-for="(cnt, i) in visitCountData">
    <td>{{cnt.totalCount}}</td>
  </tr>

  <v-container>
        <v-img
          :src="require('../assets/title.png')"
        />
=======
  <v-container>
 

        <v-img
          :src="require('../assets/title.png')"
        />
      
    
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
  </v-container>
</template>

<script>

<<<<<<< HEAD


export default {
  name: 'HelloWorld',
  data() {
    console.log("");
    console.log("[HelloComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("전역 글로벌 변수 : " + this.$MainVisitCount);
    console.log("");

    // [글로벌 전역 변수 변경 실시]
    /**
     * 참고 사항 : A 컴포넌트에서 전역 변수
     * 변경 후 B 컴포넌트에서 호출 시 main.js
     * 에서 설정한 초기값이 불러와진다
     * (공통 변수 사용 위해서는 스토리지에 저장 후 A , B 컴포넌트에서 사용)
    */
    // this.$MainVisitCount = 1;

    // console.log("");
    // console.log("[HelloComponent] : [data] : [글로벌 변수 변경]");
    // console.log("전역 글로벌 변수 : " + this.$MainVisitCount);
    // console.log("");
    return {
      visitCountData: [],
      resultData: 0,
    }; 
  },
  created() {
    if(this.$MainVisitCount == 0)this.getVisitCount();
  },
  methods:{
    async getVisitCount(){
      //alert("버튼을 클릭 했습니다.");
      this.resultData = await this.$api("/api/insertvisit", {});
      console.log('insertResult',this.resultData);
      this.visitCountData = await this.$api("/api/visit", {});
      console.log('visitCountData',this.visitCountData);
      this.$MainVisitCount = 1;
      console.log("");
      console.log("[HelloComponent] : [data] : [글로벌 변수 변경]");
      console.log("전역 글로벌 변수 : " + this.$MainVisitCount);
      console.log("");
    },
  }
 

} 
</script>

=======
export default {
  name: 'HelloWorld',




}
</script>
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
