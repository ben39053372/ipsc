<template>
  <div class="login">
    <h1>IPSC System</h1>
    <Paper class="form">
      <h2>Login</h2>
      <Input v-model="username" />
      <Input v-model="password" />
      <div class="actions">
        <Button @click="login">Login</Button>
        <!-- <Button outline color="secondary">Forgot Password</Button> -->
      </div>
    </Paper>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Input from '../components/Input.vue';
  import Button from '../components/Button.vue';
  import Paper from '../components/Paper.vue';
  import router from '../router';

  export default defineComponent({
    components: {
      Input,
      Button,
      Paper,
    },
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        console.log('login', this.username, this.password);
        router.push({ name: 'Home' });
      },
      forgotPassword() {
        router.push({ name: 'forgotPassword' });
      },
    },
  });
</script>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .form > * {
    margin: 10px;
  }

  .actions {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .actions > * {
    margin: 0 5px;
  }
</style>
