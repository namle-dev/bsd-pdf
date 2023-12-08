<template>
  <ul>
    <li v-for="(item, index) of list" :key="item.title + index" class="item">
      <div class="item-title" @click="itemClick(item)">
        <i
          v-if="item.items.length > 0"
          @click.stop="toggle(item)"
          class="icon"
          :class="[{ 'up-arrow': item.show }]"
        ></i>
        <em>{{ item.title }}</em>
      </div>
      <transition name="fade">
        <div
          v-if="item.items.length > 0"
          v-show="item.show"
          class="item-children"
          :key="item.title"
        >
          <tree-list
            v-on="$listeners"
            v-bind="$attrs"
            :list="item.items"
          ></tree-list>
        </div>
      </transition>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tree-list',
  props: {
    list: {
      type: Array,
    },
  },
  mixins: [],
  components: {},
  data() {
    return {
      select: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    itemClick(item) {
      this.$emit('item-click', item);
    },
    toggle(item) {
      item.show = !item.show;
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>

<style>
.pdf-catalogue {
  overflow: auto;
  width: 200px;
  padding: 0 5px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 14px;
}
.pdf-catalogue ul {
  list-style: none;
}
.pdf-catalogue .item-children {
  padding-left: 15px;
}
.pdf-catalogue .item-title {
  cursor: pointer;
  margin: 5px 0;
}
.pdf-catalogue .item-title.active {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.9);
}
.pdf-catalogue .item-title em {
  margin-left: 15px;
  display: block;
  line-height: 1;
  font-style: normal;
}
.pdf-catalogue .icon {
  float: left;
  cursor: pointer;
  position: relative;
  top: 2px;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #555;
}
.pdf-catalogue .up-arrow {
  top: 5px;
  border-top: 5px solid #555;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid transparent;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  height: auto;
}
</style>
