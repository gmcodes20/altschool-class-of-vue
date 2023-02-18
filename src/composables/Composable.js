import { ref } from "vue";

export default function colorPickerComposable() {
  const colors = ["blue", "red", "green", "purple"];
  const message = ref("Select a color");

  const matchColors = (val) => {
    const randColor = Math.floor(Math.random() * colors.lenght);

    if (val === colors[randColor]) {
      message.val = `You're right, [answer is ${colors[randColor]}]`;
    } else {
      message.val = `You're wrong [answer is ${colors[randColor]}]`;
    }
  };
  return { colors, message, matchColors };
}
