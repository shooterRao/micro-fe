<template>
  <div class="home">
    <section>
      <h2>我是main-app</h2>

      <h2>测试iview</h2>

      <Row>
        <i-col span="12">
          <Button type="primary" :style="{ marginRight: '10px' }">button</Button>
          <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
        </i-col>
        <i-col span="12">
          <TimePicker
            type="timerange"
            placement="bottom-end"
            placeholder="Select time"
            style="width: 168px"
          ></TimePicker>
        </i-col>
      </Row>

      <h2>测试获取注入的配置文件</h2>

      <Button @click="getConfig">get config</Button>

      <h2>跳转到vue-app</h2>

      <Button to="/vue">go vue-app</Button>
    </section>
  </div>
</template>

<script>

export default {
  name: "home",
  methods: {
    getConfig() {
      console.log(this.$store.state.globalState.config)
    }
  },
};
</script>

<style scoped>
section {
  padding: 10px;
}

h2 {
  padding: 10px;
}
</style>
