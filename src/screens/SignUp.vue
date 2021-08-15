<template lang="">
  <div class="signUp">
    <Paper class="form">
      <div>Sign Up</div>
      <Input v-model="firstName" placeholder="First Name" />
      <Input v-model="lastName" placeholder="Last Name" />
      <Input v-model="email" placeholder="Email" />
      <Input v-model="phone" placeholder="Phone" />
      <Input v-model="password" placeholder="Password" />
      <Button type="submit" @click="signUp">Submit</Button>
    </Paper>
  </div>
</template>
<script>
  import { defineComponent } from 'vue';
  import Paper from '../components/Paper.vue';
  import Input from '../components/Input.vue';
  import Button from '../components/Button.vue';

  export default defineComponent({
    components: {
      Paper,
      Input,
      Button,
    },
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
      };
    },
    methods: {
      signUp() {
        console.log(
          this.firstName,
          this.lastName,
          this.email,
          this.phone,
          this.password,
        );
      },
    },
  });
</script>

<style scoped>
  .signUp {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form > * {
    margin: 10px 0;
  }
</style>
