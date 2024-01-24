<template>
  <label class="theme-switch" for="checkbox">
    <input @change="toggleTheme" type="checkbox" id="checkbox" />
    <div class="slider round"></div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      theme: "light",
      switch: null,
      classInput: '.theme-switch input[type="checkbox"]',
    };
  },
  mounted: function () {
    this.switch = document.querySelector(this.classInput);
    this.theme = localStorage.getItem("theme");
    this.setTheme();
  },
  methods: {
    setTheme: function (e) {
      if (this.theme) {
        document.documentElement.setAttribute("data-theme", this.theme);
        if (this.theme === "dark") {
          this.switch.checked = true;
        }
      }
    },
    toggleTheme: function () {
      console.log(this.switch.checked);
      if (this.switch.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-switch-wrapper {
  display: flex;
  align-items: center;
  & em {
    margin-left: 10px;
    font-size: 1rem;
  }
}

.theme-switch {
  display: inline-block;
  height: 1.2rem;
  position: relative;
  width: 2.5rem;
  margin-left: 1rem;
  transform: translateY(0.3rem);

  & input {
    display: none;
  }
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &:before {
    background-color: #fff;
    bottom: 0.1rem;
    content: "";
    height: 1rem;
    left: 0.1rem;
    position: absolute;
    transition: 0.4s;
    width: 1.2rem;
  }
}

input:checked + .slider {
  background-color: var(--color-green);
}

input:checked + .slider:before {
  transform: translateX(1rem);
}

.slider.round {
  border-radius: 34px;

  &:before {
    border-radius: 50%;
  }
}
</style>
