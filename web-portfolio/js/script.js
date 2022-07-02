const { createApp, onMounted } = Vue;
const App = {
  el: "#app",
  data() {
    return {
      openAbout: false,
      activeSection: "home",
    };
  },
  watch: {
    activeSection(newActiveSection) {
      this.activeSection = newActiveSection;
    },
  },
};

createApp(App).mount("#app");
