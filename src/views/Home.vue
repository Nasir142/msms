<template>
  <table-lg :data="data"/>
</template>
<script>
import TableLg from '../components/TableLg.vue';
export default {
  components: { TableLg },
  name: "Home",
  data() {
    return {
      data: [
        {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'}],
      isLoading: true,
      
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      fetch("http://192.168.0.105:3000").then((res) =>
        res.json().then((result) => {
          this.data = result;
          this.isLoading = false;
        })
      );
    },
  },
};
</script>
