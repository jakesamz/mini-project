
<template>
  <div>
    <p>Child: {{num}}</p>
    <button @click="updateStduent">updateStduent</button>
    <button @click="updateTeacher">updateTeacher</button>
    <p>Student: {{student.name + ' - ' + student.age}}</p>
    <p>Teacher: {{teacher + '-' + teacher.name + ' - ' + teacher.age}}</p>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["num"],
  data() {
    return {
      student: {
        name: 'Thomas',
        age: 20
      },
      teacher: {
        name: 'Ross',
        age: 35
      }
    }
  },
  methods: {
    updateStduent() {
      this.student.age++;
    },
    updateTeacher() {
      this.teacher = 'xxxxx';
    }
  },
  watch: {
    num: {
      handler: function() {
        console.log('num updated....')
      },
      immediate: true
    },
    student: {
      handler: function() {
        console.log('student updated....')
      },
      deep: true
    },
    teacher: {
      handler: function() {
        console.log('teacher updated....')
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gold {
  color: gold;
}
.green {
  color: green;
}
</style>
