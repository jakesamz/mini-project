<template>
 <div>
  <!-- Form -->
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
   <el-form :model="form">
    <el-form-item label="Date" :label-width="formLabelWidth">
     <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
     <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
     </el-select>
    </el-form-item>
   </el-form>
   <div slot="footer" class="dialog-footer">
    <el-button @click="$emit('closeEditDialog')">取 消</el-button>
    <el-button type="primary" @click="$emit('closeEditDialog')">确 定</el-button>
   </div>
  </el-dialog>
 </div>
</template>


<script>

export default {
 name: "App",
 components: {},
 props: ['dialogFormVisible', 'data'],
 data() {
  return {
   form: {
    name: "",
    region: "",
    date1: "",
    date2: "",
    delivery: false,
    type: [],
    resource: "",
    desc: ""
   },
   formLabelWidth: "120px"
  };
 },
 methods: {
 },
 created() {
   console.log('formVisible', this.formVisible)
 },
 updated() {
   console.log()
 },
};
</script>

<style>
</style>
