<template>
  <div>
      <!-- <div v-if="loading" class="loading">
        loading......
        <progress id="pb" :value='value' max='100'></progress>
      </div>
      <div v-else> -->
      <p>User Page: </p>

      <button @click="back()">back</button>
      <ul class="table">
        <li @mouseover="currentIndex = index" v-for="(item, index) in innerStruct" :key="index" class="tr">
          <div class="file-img">
          <img v-if="item.children && item.children.length!== 0" width="10px" height="10px" 
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1111006985,1539066905&fm=26&gp=0.jpg" alt="文件夹"/>
          <img v-else width="10px" height="10px" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=26859893,2924437670&fm=26&gp=0.jpg" alt="文件"/>  
          <!-- src="https://cdn0.iconfinder.com/data/icons/file-extension-line-icon/100/txtb-256.png" -->
          </div>
          <div class="file-name" @click="enterFile(item.children)">{{item.fileName}}</div>
          <div class="file-btn"><button 
            v-show="currentIndex === index" @click="showFileName(item)">Download</button></div>
          <div class="file-btn"><button 
            v-show="currentIndex === index && (!item.children || item.children.length === 0)" @click="showPreview(item)">Preview</button></div>
          <div class="file-btn"><button 
          v-show="currentIndex === index && (!item.children || item.children.length === 0)" @click="showShare(item)">Share</button></div>
        </li>
      </ul>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default  { 
  name: 'Struct', 
  props: {
    struct: Array,
  },
  data () {

    return {
      innerStruct: this.struct,
      strcutChain: [this.struct],
      currentIndex: 0
    }
  },
  created () {
    //this.fetchData()
  },
  methods: {
    showFileName(item) {
      alert(item.fileName)
    },

    showPreview(item) {
      alert('Preview:' + item.fileName)
    },

    showShare(item) {
     alert('Share:' + item.fileName)
    },
    enterFile(children) {
      console.log(children)
      if(!children || children.length === 0) {
        let download = confirm('Download?');
        if(download) {
          alert("Success")
        }
        return
      };
      this.strcutChain.push(children);
      this.innerStruct = this.strcutChain[this.strcutChain.length - 1];
    },
    back() {
      if(this.strcutChain.length == 1) {
        return;
      }
      this.strcutChain.pop();
      this.innerStruct = this.strcutChain[this.strcutChain.length - 1];
    },
    
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
  // computed: {
  //   newUpdate() {
  //     return this.data.list
  //   }
  // }
}
</script>
<style scoped>
li{
  display: flex;
}

.file-img{
  width: 50px;
}

.file-name{
  width: 300px;
}

.file-button{
  width: 50px;
}

li:hover {
  background-color: lightgrey;
  cursor: pointer;
}

</style>
