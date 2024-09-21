function copyCode(button) {
    const codeBlock = button
      .closest(".syntax-box")
      .querySelector("code").innerText;
    navigator.clipboard
      .writeText(codeBlock)
      .then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  const toggleSwitch = document.getElementById("themeToggle");

  document.addEventListener("DOMContentLoaded", (event) => {
    const darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "enabled") {
      document.body.classList.add("dark-mode");
      toggleSwitch.checked = true;
    } else {
      document.body.classList.remove("dark-mode");
    }
  });

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    }
  });