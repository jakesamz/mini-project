<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h1>author : {{author}}</h1>
    <h1>{{'Getting better'}}</h1>
    count: {{returnCount}}
    <router-link :to="'/mymenu'">跳转去点餐系统</router-link>

    <router-link to="/user/jerry/profile">Go to Foo</router-link>
    <router-link to="/user/tom">Go to Foo</router-link>
    <p v-if="visible" v-bind:class="{bg:visible}">现在你看到我了</p>

    <p v-if="visible">yes, it's visible</p>
    <p v-else>no, it's invisible</p>

    <h2>Today, We have some students, they are</h2>
    <ol>
      <li v-for="(student, index) in students" :key="student.name"><b>{{++index}}： {{student.name}}</b> who is from <b>{{student.nationality}}</b></li>
    </ol>
    <button @click="beginCountDown">{{count}}</button>
    <button @click="closureCountdown">{{count}}</button>
    <table style="border: 1px solid black;">
      <tr><td>id</td><td>name</td><td>price</td><td>count</td><td> </td></tr>
      <tr v-for="item in items" :key="item.name">
        <td>
          <input v-model="item.count" placeholder="editing……" type="number" @focus="backupCount = item.count;" @change="update(item)">
          <input v-model="backupCount"/>
        </td>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.count}}</td>
        <td><button v-bind:disabled="item.count==0" @click="item.count--">-</button></td>
        <td><button v-on:click="addItem(item)" ref="addBtn">+</button></td>
        <td><button @click="item.count=0">remove</button></td>
      </tr>
      <tr><td colspan="5">Total is {{total}} <button @click="addproduct">add product</button></td></tr>
    </table>
    <div v-for="letter in letters" :key="letter">
    <span>{{letter}}</span>
    </div><button @click="letters.splice(1, 1, 't')">change letter</button>
    <input v-model="toll" placeholder="编辑我……" type="number">
    The massage in the input label is {{toll}}
    <input v-model="person.firstName"/>
    <input v-model="person.lastName"/>
    <input v-model="person.fullName"/>
    <Inner post-title="abc" v-bind:outer-count="count" v-on:addproduct="addproduct"></Inner>
    
  </div>
</template>

<style scoped>
th, td {
  border-bottom: 1px solid #ddd;
}
.bg {background-color: red}
</style>

<script>
import Inner from './Inner'
export default {
  name: 'Hello',
  components: {Inner},
  data () { 
    return {
      title: 'Welcome to my first VUE project',
      author: 'Jake',
      visible: true,
      students: [{name: 'Jake', nationality: 'China'},{name: 'Johnathon', nationality: 'America'},{name: 'Chris', nationality: 'German'}],
      count:10,
      items: [{id:1,name:'Galaxy',price:100,count:1},{id:2,name:'Iphone',price:120,count:1},{id:3,name:'Huawei',price:150,count:1}],
      letters: ['a', 'b', 'c'],
      toll: 6,
      backupCount: 0,
      person: {firstName: 'Bill', lastName: 'Gates', fullName: ''},
    }
  },
  created() {
    this.person.fullName = this.person.firstName + ' ' + this.person.lastName;
  },
  beforeMount() {
    console.group("%c%s","color:red",'beforeMount--挂载之前的状态')
    console.log("%c%s","color:blue","el  :"+this.$el)
    console.log(this.$el);
    console.log("%c%s","color:blue","data  :"+this.$data)
    console.log("%c%s","color:blue","data  :"+JSON.stringify(this.$data))
  },
  mounted() {
    console.group("%c%s","color:red",'mounted--已经挂载的状态')
    console.log("%c%s","color:blue","el  :"+this.$el)
    console.log(this.$el);
    console.log("%c%s","color:blue","data  :"+this.$data)
    console.log("%c%s","color:blue","message  :"+this.msg)
  },
  methods: {
    beginCountDown() {
      let _this = this;
      let intervalFunc = setInterval(() => {
        this.countdown(intervalFunc);
      }, 1000);
    },
    countdown(interId) {
      if(this.count <= 0) {
        clearInterval(interId)
        return;
      }
      this.count--;
    },
    closureCountdown() {
      let x = (interId) => {
        if(this.count <= 0) {
          clearInterval(interId)
          return;
        }
        this.count--;
      };
      let interId = setInterval(() => {
        x(interId);
      }, 1000);
    },
    storeValue(item) { 
      this.backupCount = item.count;
    },
    update(item) {
      alert(item.count)
      this.validItem(item);
      let validTotal = this.validTotal(item);
      if(!validTotal) {
        item.count = this.backupCount;
      }
    },
    validItem(item) {
      if(item.count < 0) {
        item.count = 0;
      }
    },
    validTotal() {
      if(this.total > 500) {
        alert('you have added more than ' +  this.total + ', exceeds 500');
        return  false;
      }
      return true;
    },
    addItem(item) {
      item.count++;
    },
    addproduct() {
      this.items.push({id:5,name:'XiaoMi',price:100,count:1});
    },
    calculateTotal() {
      let total = 0;
      for(let item of this.items) {
        total += item.price * item.count
      }
      this.total = total;
    }
  },
  watch: {
    items(a, b) {
      console.log(a, b)
    },
    person: {
      handler(a, b) {
        console.log(a, b)
        this.person.fullName = this.person.firstName + ' ' + this.person.lastName;
      },
      deep: true
    }
  },
  computed: {
    returnCount () {
      return this.$store.state.mycount + 1
    },
    total() {
      let curTotal = 0;
      for(let item of this.items) {
        curTotal += item.price * item.count
      }
      return curTotal;
    },
    // fullName() {
    //   this.person.fullName = this.person.firstName + ' ' + this.person.lastName;
    //   return;
    // }
    name() {
      let result = data.find(item => item.id == 1);
      return result.name
    }
  }
}
</script>
