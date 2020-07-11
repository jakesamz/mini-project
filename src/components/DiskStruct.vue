<template>
  <div>
      
      <p>Files: </p>

      <Struct :struct="diskStruct1"/>
      
    </div>
</template>

<script>
import axios from 'axios'
import Struct from './Struct'
export default  { 
  name: 'Foo', 
  components: {Struct},
    data () {
    return {
      "diskStruct": [
        {"我的图片":["1.jpg", "2.jpg",{"图片备份":["b1.png","b2.png","b3.png"]}]},
        {"我的文档":["a.txt","b.txt","c.txt",]},
        {"我的项目":[]},
        {"我的音乐":[]},
        "复习资料.zip",
        "桌面照片.jpg",
        "安装包.zip"
      ],
      "diskStruct1": [
        {fileName: "我的图片",fileName: "我的图片", 
          children:[
            {fileName: "1.jpg"},
            {fileName: "2.jpg"},
            {fileName: "图片备份", children: [{fileName: "b1.jpg"},{fileName: "b2.jpg"},{fileName: "b3.jpg"}]},
          ]
        },
        {fileName: "我的文档", children: ["1.jpg", "2.jpg",{"图片备份":["b1.png","b2.png","b3.png"]}]},
        {fileName: "我的项目", children: ["1.jpg", "2.jpg",{"图片备份":["b1.png","b2.png","b3.png"]}]},
        {fileName: "我的音乐", children: ["1.jpg", "2.jpg",{"图片备份":["b1.png","b2.png","b3.png"]}]},
        {fileName: "复习资料.zip", children: []},
        {fileName: "桌面照片.jpg", children: []},
        {fileName: "安装包.zip", children: []}
      ],
      currentIndex: 0
    }
  },
  created () {
    this.fetchData()
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
