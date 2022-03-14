import { mount } from "@vue/test-utils";
import BaseLayout from "@/components/base/BaseLayout.vue";
import CreateBookForm from "@/components/books/CreateBookForm.vue";

describe("BaseLayout.vue", () => {
  it("Отображение заголовка в шапке", () => {
    const title = "Моя библиотека";
    const wrapper = mount(BaseLayout, {
      props: {
        title: title,
      },
    });

    console.log("Отображение заголовка в шапке", wrapper.html());

    expect(wrapper.find("ion-title").text()).toBe("Моя библиотека");
  });
});
