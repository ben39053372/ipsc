<template appear lang="">
  <Container>
    <h4 class="text">
      No. of Projectiles to be scored: {{ noOfProjectilesToBeScored }} + 1
    </h4>
    <h4 class="text">Score: {{ score }} points</h4>
    <form class="form" :onsubmit="handleSubmitCourse">
      <label>Paper Target</label>
      <Input v-model.number="papers" type="number" />
      <label>No Shoot Target:</label>
      <Input v-model.number="noShoots" type="number" />
      <label>Mini Poppers Target:</label>
      <Input v-model.number="miniPoppers" type="number" />
      <label>Starting Position:</label>
      <textarea v-model="startingPosition" :rows="3" />
      <label>Handgun Ready Condition</label>
      <div>
        <label>Gun: </label>
        <input
          id="gunCondition"
          v-model="handgunReadyCondition.gun"
          type="checkbox"
          name="gunCondition"
        />
        <label for="gunCondition">{{
          handgunReadyCondition.gun ? 'Loaded' : 'Empty'
        }}</label>
      </div>
      <div>
        <label>Chamber: </label>
        <input
          id="chamberCondition"
          v-model="handgunReadyCondition.chamber"
          type="checkbox"
          name="chamberCondition"
        />
        <label for="chamberCondition">{{
          handgunReadyCondition.chamber ? 'Loaded' : 'Empty'
        }}</label>
      </div>
      <textarea v-model="handgunReadyCondition.detail" />
      <Button type="submit">Submit</Button>
    </form>
  </Container>
</template>
<script lang="ts">
  import { computed, defineComponent, reactive, ref, watch } from 'vue';
  import Input from '../components/Input.vue';
  import Button from '../components/Button.vue';
  import Container from '../components/Container.vue';
  import router from '../router';

  export default defineComponent({
    components: { Input, Button, Container },
    setup() {
      const papers = ref(0);
      const noShoots = ref(0);
      const miniPoppers = ref(0);
      const startingPosition = ref('');
      const handgunReadyCondition = reactive({
        gun: true,
        chamber: true,
        detail: '',
      });

      const gun = ref(false);
      const chamber = ref(false);

      const score = computed(() => {
        return papers.value * 10 + miniPoppers.value * 5;
      });

      const noOfProjectilesToBeScored = computed(() => {
        return papers.value * 2 + miniPoppers.value;
      });

      const handleSubmitCourse = (e: Event) => {
        e.preventDefault();
        router.push({ name: 'Course List' });
      };

      return {
        score,
        papers,
        noShoots,
        miniPoppers,
        startingPosition,
        handgunReadyCondition,
        gun,
        chamber,
        noOfProjectilesToBeScored,
        handleSubmitCourse,
      };
    },
  });
</script>

<style scoped>
  .form {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .text {
    text-align: center;
  }
</style>
