<template>
  <div>
    <el-tree :props="defaultProps" :load="loadNode" lazy></el-tree>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      node:0,
      defaultProps: {
        children: "zones",
        label: "text",
        isLeaf: 'leaf'  //判断是否为最后一级 字段名为leaf
      }
    };
  },
  methods: {
    getTree(resolve) {
      this.$axios
        .get(
          "http://localhost:8088/basesearch/loadTree.do?_dc=1555033384003&token=0F2871C9A1D92B35A5F2D3C29E46C6D18EFDECDBE24DDE188585DCF4C4C5DC46",
          {
            params: {
              node: this.node
            }
          }
        )
        .then(res => {
          console.log(res.data.data)
          resolve(res.data.data)
        });
    },
    loadNode(node, resolve){
        //node为当前点击的对象，数据在data里
        // console.log(node)
        // console.log(resolve)
        if(node.level!=0){  
            this.node = node.data.id
        }
        
        this.getTree(resolve) 
    }
  }
};
</script>
