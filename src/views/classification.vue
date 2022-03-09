<template>
    <!-- 分类 -->
    <div>
        <div class="classification">
            <ta-ble></ta-ble>
        </div>
    </div>
</template>
<script>
import taBle from "../components/table.vue";
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    taBle,
  },
};
</script>