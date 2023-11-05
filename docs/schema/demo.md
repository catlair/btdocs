<Demo></Demo>

<Emo v-model="a"></Emo>

<pre>{{ a }}</pre>

<script setup>
  import Demo from "./Demo.vue";
  import Emo from '../.vitepress/components/widgets/DynamicInputNumber.vue'

  import { ref} from 'vue'

  const a = ref([1,2,3])
</script>
