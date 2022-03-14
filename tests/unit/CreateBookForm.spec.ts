import { mount } from "@vue/test-utils";
import CreateBookForm from "@/components/books/CreateBookForm.vue";

describe("CreateBookForm.vue", () => {
  /*it("Проверка работы input", async () => {
    const wrapper = mount(CreateBookForm);

    const textInput = wrapper.find('ion-input[type="text"]');
    console.log(textInput);
    await textInput.setValue('some value');
    expect(wrapper.find('ion-input[type="text"]').text()).toBe('some value');
  });*/

  it("Порождает событие для отправки данных формы", () => {
    const wrapper = mount(CreateBookForm);

    wrapper.vm.submitForm();

    console.log(wrapper.emitted());
  });
});
