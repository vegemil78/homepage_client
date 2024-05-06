import axios from 'axios';
<<<<<<< HEAD
axios.defaults.baseURL = 'http://localhost:3000';
=======
//axios.defaults.baseURL = 'http://localhost:52273';
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
  methods: {
<<<<<<< HEAD
    async $api(url, data) {
      return (await axios({
        //baseURL : 'http://localhost:52273',
         //headers : {
          // "Content-Type": "multipart/form-data",
          // "Content-Type":'application/json;charset=utf-8',
          //'Access-Control-Allow-Origin': '*',
         //},
        method: 'post',
        url,
        data
      }).catch(e => {
        console.log(e);
      })).data;
    },
    /*
=======
    // async $api(url, data) {
    //   return (await axios({
    //     baseURL : 'http://localhost:52273',
    //      //headers : {
    //       // "Content-Type": "multipart/form-data",
    //       // "Content-Type":'application/json;charset=utf-8',
    //       //'Access-Control-Allow-Origin': '*',
    //      //},
    //     method: 'post',
    //     url,
    //     data
    //   }).catch(e => {
    //     console.log(e);
    //   })).data;
    // },
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
      async $api(url, data) {
      return (await axios({
        //baseURL : 'http://localhost:52273', 
        baseURL : 'https://e2f92c93-299e-41f9-bb9d-5150d25c3d92.mock.pstmn.io/test', 
        //headers : {
          // "Content-Type": "multipart/form-data",
          // "Content-Type":'application/json;charset=utf-8',
          //'Access-Control-Allow-Origin': '*',
         //},
        method: 'post',
        url,
        data
      }).catch(e => {
        console.log(e);
      })).data;
    },
<<<<<<< HEAD
    */
=======
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
    $base64(file) {
      return new Promise(resolve => {
        var a = new FileReader();
        a.onload = e => resolve(e.target.result);
        a.readAsDataURL(file);
      });
    },
    $currencyFormat(value, format = '#,###') {
      if (value == 0 || value == null) return 0;

      var currency = format.substring(0, 1);
      if (currency === '$' || currency === '₩') {
        format = format.substring(1, format.length);
      } else {
        currency = '';
      }

      var groupingSeparator = ",";
      var maxFractionDigits = 0;
      var decimalSeparator = ".";
      if (format.indexOf(".") == -1) {
        groupingSeparator = ",";
      } else {
        if (format.indexOf(",") < format.indexOf(".")) {
          groupingSeparator = ",";
          decimalSeparator = ".";
          maxFractionDigits = format.length - format.indexOf(".") - 1;
        } else {
          groupingSeparator = ".";
          decimalSeparator = ",";
          maxFractionDigits = format.length - format.indexOf(",") - 1;
        }
      }

      var prefix = "";
      var d = "";
      // v = String(parseFloat(value).toFixed(maxFractionDigits));

      var dec = 1;
      for (var i = 0; i < maxFractionDigits; i++) {
        dec = dec * 10;
      }

      var v = String(Math.round(parseFloat(value) * dec) / dec);

      if (v.indexOf("-") > -1) {
        prefix = "-";
        v = v.substring(1);
      }

      if (maxFractionDigits > 0 && format.substring(format.length - 1, format.length) == '0') {
        v = String(parseFloat(v).toFixed(maxFractionDigits));
      }

      if (maxFractionDigits > 0 && v.indexOf(".") > -1) {
        d = v.substring(v.indexOf("."));
        d = d.replace(".", decimalSeparator);
        v = v.substring(0, v.indexOf("."));
      }
      var regExp = /\D/g;
      v = v.replace(regExp, "");
      var r = /(\d+)(\d{3})/;
      while (r.test(v)) {
        v = v.replace(r, '$1' + groupingSeparator + '$2');
      }

      return prefix + currency + String(v) + String(d);
    }
  }
}