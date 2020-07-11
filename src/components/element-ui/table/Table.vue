<template>
 <div>
  <h2>Table</h2>

  <div class="clusterize">
   <table>
    <thead>
     <tr>
      <th>Headers</th>
     </tr>
    </thead>
   </table>
   <div id="scrollArea" class="clusterize-scroll">
    <table>
     <tbody id="contentArea" class="clusterize-content">
      <tr class="clusterize-no-data">
       <td>Loading data…</td>
      </tr>
     </tbody>
    </table>
   </div>
  </div>

  <el-table :data="tableData" multiable style="width: 100%">
   <el-table-column type="selection" width="55"></el-table-column>
   <el-table-column prop="date" label="日期" width="180"></el-table-column>
   <el-table-column prop="name" label="姓名" width="180"></el-table-column>
   <el-table-column prop="address" label="地址"></el-table-column>
   <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="block">
   <el-pagination layout="prev, pager, next" :total="total" @current-change="handleCurrentChange"></el-pagination>
  </div>

  <EditDialog :dialogFormVisible="dialogFormVisible" @closeEditDialog="closeEditDialog"></EditDialog>
 </div>
</template>


<script>
import data from "./data";
import EditDialog from './EditDialog';

export default {
 name: "App",
 components: {EditDialog},
 data() {
  return {
   tableData: [],
   currentPage: 1,
   pageSize: 10,
   total: data.length,
   dialogFormVisible: false,
   row: {}
  };
 },
 methods: {
  handleCurrentChange(toPageNum) {
   this.tableData = data.slice((toPageNum - 1) * 10, toPageNum * 10);
  },
  handleEdit(index, row) {
    this.openEditDialog();
    console.log(index, row)
    this.row = row;
  },
  openEditDialog() {
    this.dialogFormVisible = true;
  },
  closeEditDialog() {
    this.dialogFormVisible = false;
  }
 },
 created() {
  console.log("data.slice(0, pageSize)", data.slice(0, this.pageSize));
  this.tableData = data.slice(0, this.pageSize);
 },
 mounted() {
  console.log("tableData length", this.tableData.length);
  console.log(Date.now() - this.start);
 }
};
</script>

<style>
</style>
