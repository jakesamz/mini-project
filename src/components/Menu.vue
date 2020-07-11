<template>
  <div class="menu">
    <img src="./../assets/rest_logo.png">
    <section>
      <div style="float:left;width:50%;" @click="curSectionShown='food'">
          商品
        </div>
      <div style="float:left;width:50%;" @click="curSectionShown='rating'">
          评价
      </div>
    </section>
    <section v-show="curSectionShown == 'food'">
      <div style="float:left;width:30%;background-color:#999;">
        <ul>
          <li v-for="(type) in menuTypes" :key="type" @mouseover="activeType=type" :class="{activeType: type==activeType}">
            {{type}}
          </li>
        </ul>
      </div>
      <div style="float:left;width:70%;">
        <div v-for="(item, type, index) in items" :key="index">
          <ul v-show="activeType==type">
            <li v-for="(details, index) in item" :key="index">
              <div class="detail-left">
                <img src="./../assets/f1.png" width="60" height="60">
              </div>
              <div class="detail-right">
                <div><b>{{details.name}}</b></div> 
                ${{details.price}} 
                <button @click="reduce(details)">-</button>
                <span v-if="orderedItems[details.name]">{{orderedItems[details.name].count}}</span>
                <span v-else>0</span>
                <button @click="add(details)">+</button>
              </div>
              <div class="clear"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
      <div>
        You just ordered followings: <div style="height:30px;"></div>
      <ul>
        <li v-for="(itemId, details, index) in orderedItems" :key="index">
          Name: {{itemId.name}},  The price is ${{itemId.price}}, {{itemId.count}}
        </li>
      </ul>
      Total price is : {{total}}
    </div>
    </section>
    <section v-show="curSectionShown == 'rating'">
      <div style="height:100px;">这是评价区</div>
      <div><li v-for="n in numbers" :key="n">{{ n }}</li></div>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </section>
    
  <Inner post-title="menu reviews"></Inner>
  </div>
</template>

<style scoped>
.activeType{
  background-color: #ffffff;
}
ul {
  list-style-type:none;
  margin:0;padding:0;
}
li {
  padding:10px 0px;
}
.detail-left {
  float: left;
  padding: 5px;
}
.detail-right {
  float: left;
  padding: 5px;
}
.clear{
  clear: both;
}
</style>

<script>
import Inner from './Inner'
export default {
  name: 'MenuThis',
  components : {
    Inner
  },
  data () {
    return {
      curSectionShown: 'rating',
      menuTypes: ['畅销榜类', '拉面','饭类','小食','饮品','儿童餐'],
      items: {'畅销榜类':[{id:'001', name:"香煎牛肉盖浇饭",price:89}, {id:'002',name:"照烧烤鸭拉面",price:99}],
      '拉面':[{id:'001', name:"兰州拉面",price:15}, {id:'002',name:"刀削面",price:17}]},
      activeType: '畅销榜类',
      orderedItems: {},
      numbers: [ 1, 2, 3, 4, 5 ],
      sortArr: [{id:'001', name:"香煎牛肉盖浇饭",price:89}, {id:'002',name:"照烧烤鸭拉面",price:99}]
    }
  },
  methods: {
    details () {
      return 'Getting better Every Day';
    },
    increment() {
      return ++this.count;
    },
    add(newItem) {
      if(this.orderedItems[newItem.name] == undefined) {
        this.$set(this.orderedItems, newItem.name, {
          name : newItem.name,
          price: newItem.price,
          count: 1
        })
      }else{
        this.orderedItems[newItem.name].count++;
      }
    },
    reduce(newItem){
      if(this.orderedItems[newItem.name] != undefined) {
        if(this.orderedItems[newItem.name].count >= 1){
          this.orderedItems[newItem.name].count--;
          if(this.orderedItems[newItem.name].count == 0) {
            delete this.orderedItems[newItem.name];
          }
        }
      }
    }
  },
  computed: {
    total() {
      let curTotal = 0;
      for(let i in this.orderedItems){
        curTotal += this.orderedItems[i].count * this.orderedItems[i].price;
      }
      return curTotal;
    },
    evenNumbers() {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>
