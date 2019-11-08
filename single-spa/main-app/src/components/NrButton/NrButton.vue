<!--
 * @Author: raojw
 * @Description: NrButton
 -->
<template>
  <button type="button" :class="buttonClass" :style="buttonStyle" @click.stop.prevent="handleClick">
    <template v-if="loading">
      <i class="icon-loading ivu-load-loop ivu-icon ivu-icon-ios-loading"></i>
    </template>
    <slot></slot>
  </button>
</template>

<script>
const prefixCls = "nr-button";

export default {
  name: "NrButton",
  props: {
    // 一级、二级、三级
    level: {
      type: Number,
      default: 1
    },
    // 类型
    // default, primary, back
    type: {
      type: String,
      default: "default"
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    // 背景色
    bgColor: {
      type: String
    },
    // 字体颜色
    fontColor: {
      type: String
    }
  },
  computed: {
    buttonClass() {
      const { level, type, disabled, loading } = this;
      return [
        `${prefixCls}`,
        `${prefixCls}-${level}`,
        `${prefixCls}-${type}`,
        disabled && "disabled",
        loading && "loading"
      ];
    },
    buttonStyle() {
      const { bgColor, fontColor } = this;
      const style = {};
      if (bgColor) {
        style.backgroundColor = bgColor;
        style.borderColor = bgColor;
      }
      if (fontColor) {
        style.color = fontColor;
      }
      return style;
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      // 返回 event 参数支持 @click.stop.prevent 写法
      this.$emit("click", event);
    }
  }
};
</script>

<style scoped lang="scss">
// 默认
$default-bg-color: #1890ff;
$default-font-color: #ffffff;

// 镂空效果
$primary-bg-color: #ffffff;
$primary-font-color: #1890ff;

// 退出(返回)按钮
$back-bg-color: #343c4c;
$back-font-color: #ffffff;

.nr-button {
  display: inline-block;
  text-align: center;
  touch-action: manipulation;
  line-height: 1;
  outline: 0;
  cursor: pointer;
  user-select: none;
  border-radius: 0.21rem;
  border: 1px solid transparent;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  .icon-loading {
    margin-right: 4px;
    vertical-align: inherit;
  }
  &-1 {
    font-size: 0.83rem;
    padding: 0.66em 0.875em;
    .icon {
      font-size: 0.83rem;
    }
  }
  &-2 {
    font-size: 0.73rem;
    padding: 0.5em 1em;
    .icon {
      font-size: 0.73rem;
    }
  }
  &-3 {
    font-size: 0.73rem;
    padding: 0.3em 1em;
    .icon {
      font-size: 0.73rem;
    }
  }
  &-default {
    background-color: $default-bg-color;
    border-color: $default-bg-color;
    color: $default-font-color;
  }
  &-primary {
    background-color: $primary-bg-color;
    border-color: $primary-font-color;
    color: $primary-font-color;
    &:hover:not(.disabled) {
      color: #ffffff;
      border-color: #1890ff;
      background-color: #1890ff;
    }
  }
  &-back {
    background-color: $back-bg-color;
    border-color: $back-bg-color;
    color: $back-font-color;
  }
  &:hover:not(.nr-button-primary) {
    opacity: 0.8;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  &.loading {
    opacity: 0.8;
    pointer-events: none;
  }
}
</style>
