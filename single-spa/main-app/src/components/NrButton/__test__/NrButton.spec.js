import { mount } from "@vue/test-utils";
import NrButton from "@/components/NrButton";
import { asyncExpect } from "@/../tests/utils";

describe("NrButton", () => {
  const wrapper = mount({
    render() {
      return <NrButton>follow</NrButton>;
    }
  }, { sync: false });
  it("正确渲染组件标签", () => {
    // expect(wrapper.html()).toContain(`<button type="button" class="nr-button nr-button-1 nr-button-default">follow</button>`);
    expect(wrapper.html()).toMatchSnapshot();
  });
  describe(":props ", () => {
    it(":levels - 创建二级按钮", () => {
      const wrapper = mount(
        {
          render() {
            return <NrButton level={2}>按钮</NrButton>;
          }
        },
        { sync: false }
      );
      expect(wrapper.contains(".nr-button-2")).toBe(true);
    });
    it(":type - 创建 primary 按钮", () => {
      const wrapper = mount({
        render() {
          return <NrButton type="primary">按钮</NrButton>;
        }
      });
      expect(wrapper.contains(".nr-button-primary")).toBe(true);
    });
    it(":disabled - 创建 disabled 按钮", () => {
      const wrapper = mount(
        {
          render() {
            return <NrButton disabled={true}>按钮</NrButton>;
          }
        },
        { sync: false }
      );
      expect(wrapper.contains(".disabled")).toBe(true);
    });
    it(":loading - 创建 loading 按钮", () => {
      const wrapper = mount(
        {
          render() {
            return <NrButton loading={true}>按钮</NrButton>;
          }
        },
        { sync: false }
      );
      expect(wrapper.contains(".icon-loading")).toBe(true);
    });
    it(":fontColor 自定义按钮样式", () => {
      const wrapper = mount(
        {
          render() {
            return (
              <NrButton bgColor="#cccccc" fontColor="#ffffff">
                按钮
              </NrButton>
            );
          }
        },
        { sync: false }
      );
      expect(wrapper.element.style.backgroundColor).toBe("rgb(204, 204, 204)");
      expect(wrapper.element.style.color).toBe("rgb(255, 255, 255)");
    });
  });
  describe("@event", () => {
    it("单击按钮触发事件，改变 loading 状态", async () => {
      const DefaulButton = {
        data() {
          return {
            loading: false
          };
        },
        methods: {
          handleClickButton() {
            this.loading = true;
          }
        },
        render() {
          return (
            <NrButton loading={this.loading} onClick={this.handleClickButton} />
          );
        }
      };
      const wrapper = mount(DefaulButton, { sync: false });
      wrapper.trigger("click");
      await asyncExpect(() => {
        expect(wrapper.find(".icon-loading").exists()).toBe(true);
      });
    });
  });
});
