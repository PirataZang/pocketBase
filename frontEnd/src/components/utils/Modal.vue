<template>
  <div v-if="show" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-btn" @click="close"><i class="fa-solid fa-xmark"></i></button>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },

  methods: {
    close() {
      this.$emit('close', false);
    }
  },
  watch: {
    show(newVal) {
        console.log(this.size);
      if (!newVal) {
        this.close();
      }
    }
  }
};

</script>
