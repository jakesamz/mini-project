<template>
  <div>
      <div v-if="loading" class="loading">
        loading......
        <progress id="pb" :value='value' max='100'></progress>
      </div>
      <div v-else>
      <p>User Page: </p>

      
      <ul class="table">
        <li class="tr">
          <div class="th">ID</div>
          <div class="th">Name</div>
          <div class="th">Phone No</div>
          <div class="th">Opertion</div></li>
        <li v-for="user in data.list" :key="user.id" class="tr">
          <div class="td">
            {{user.id}}
          </div>
          <div class="td">
            <span v-if="!user.editable">{{user.name}}</span>
            <input v-if="user.editable" v-model="user.name">
          </div>
          <div class="td">
            <span v-if="!user.editable">{{user.phoneNo}}</span>
            <input v-if="user.editable" v-model="user.phoneNo">
          </div>
          <div class="td">
            <button @click="update(user, $event)">{{user.editable ? 'confirm' : 'edit'}}</button>
          </div>
        </li>
      </ul>
      <button @click="update($event)">Update</button>
      <button @click="confirm($event)">Confirm</button>
      <p>{{data}}</p>
      <!-- <router-link to="/emails">Go to User1</router-link>
      <router-link to="/profile">Go to User2</router-link> -->
      <!-- <router-view/>
      <router-view name="helper"/> -->
      <!-- </transition> -->
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default  { 
  name: 'Foo', 
  data () {
    return {
      loading: false,
      post: null,
      error: null,
      value: 0,
      data: {},
      updating: false,
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    // '$route': 'fetchData'
    // 'data.list': {
    //   handler: function(obj) {
    //     console.log('data change....', obj)
    //   },
    //   deep: true
    // }
  },
  methods: {
    fetchData () {
      
      let vm = this;
      axios.get('https://getman.cn/mock/userinfo')
        .then(function (response) {
          // // handle success
          // console.log(response);
          // console.log(response.data);
          // console.log(response.data.list);
          // let list = response.data.list.map(item => {
          //   item.eleType = 'SPAN';
          //   return item;
          // });
          // response.data.eleType = 'SPAN';
          response.data.list.forEach(item => {
            item.editable = false;
          });
          vm.$set(vm.data, 'list', response.data.list);
          vm.$set(vm.data, 'eleType', 'SPAN')
          console.log(vm.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      // this.loading = true
      // let progress = setInterval(() => {
      //   this.value = this.value + 100/3;
      //   if(this.value >= 100) {
      //     clearInterval(progress);
      //     this.loading = false;
      //     this.value = 0;
      //   }
      // }, 1000);
    },
    update(user, event) {
      if(!user.editable && this.updating) {
        alert('please complete editing first...') 
        return;
      }

      if(!user.editable) {
        user.editable = this.updating = true;
        return;
      }

      if(user.editable) {
        let target = event.target;
        let phoneNo = user.phoneNo;
        if(!(/^1[3456789]\d{9}$/.test(phoneNo))) {
          target.closest('li').querySelectorAll('input')[1].style.border="1px solid red"
          alert('invalid phone: ' + phoneNo)
          return;
        }
        user.editable = false;
        this.updating = false;
        console.log('.....update user....')
      }
    },
    confirm(event) {
      this.data.eleType = 'SPAN'
    },
  },
  computed: {
    newUpdate() {
      return this.data.list
    }
  }
}
</script>
<style scoped>
/* router-fade */
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .2s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}

* {
  font: 400 13.3333px Arial;
}

.table {

}

.tr {
  display: flex;
  justify-content: center;
  align-items: center;
}

.th, .td {
  height: 30px;
  line-height: 30px;
  width: 150px;
  border: 1px solid lightgrey;
  margin-bottom: -1px;
  margin-right: -1px; 
}

input {
  width: 145px;
  border-width: 0px;
  height: 28px;
  padding-left: 5px;
}

button {
  width: 75px;
}

/* .content {
  width: 100px;
  display: inline-block;
}

.realcontent {
  width: 100px;
  height: 28px;
  display: inline-block;
  border-width: 0px;
} */


</style>
