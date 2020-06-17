<template>
  <div class="app-container">
    <div style="margin-bottom:20px">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <Tinymce :height="300" v-model="content"></Tinymce>
      <div ref="html"></div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed label="日期" width="150">
        <template slot-scope="scope">{{ scope.row.date | dateFilter }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
// import { getList } from '@/api/table';
// import { Component, Vue } from "vue-property-decorator";
import Tinymce from '@/components/Tinymce/index.vue';
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({
  components: {
    Tinymce,
  },
  filters: {
    dateFilter(value:number){
      return value+'111'
    }
  },
})
export default class tableIncludeEdit extends Vue {
  private tableData: any[] = [
    {
      date: "2016-05-02",
      name: "王小虎",
      province: "上海",
      city: "普陀区",
      address: "上海市普陀区金沙江路 1518 弄",
      zip: 200333
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      province: "上海",
      city: "普陀区",
      address: "上海市普陀区金沙江路 1517 弄",
      zip: 200333
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      province: "上海",
      city: "普陀区",
      address: "上海市普陀区金沙江路 1519 弄",
      zip: 200333
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      province: "上海",
      city: "普陀区",
      address: "上海市普陀区金沙江路 1516 弄",
      zip: 200333
    }
  ];
  private input: string = "";
  private content: any = null;
  @Watch("input")
  onInput(value: string) {
    debugger;
  }
  @Watch('content')
  onContent(value: any){
    console.log(value);
     (this.$refs.html as any).innerHTML = value;
  }
  created() {
    // 初始化操作
  }
  private handleClick() {
    this.tableData = [
      {
        date: "2016-05-02",
        name: "王小虎1",
        province: "上海",
        city: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
        zip: 200333
      }
    ];
  }
}
</script>
