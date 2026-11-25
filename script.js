/* Form hookup — see README.
   Replace the form action with a real Formspree URL, and/or set
   data-mailto on the form to a studio inbox. Leave both blank of
   real values and the button explains that contact is coming soon.
   Do not put a personal address here. */
(function () {
  const form = document.getElementById("project-request");
  if (!form) return;

  const status = document.getElementById("form-status");
  const submit = form.querySelector("[type=submit]");
  const messages = {
    name: "Enter your name.",
    email: "Enter an email address like you@example.com.",
    business: "Enter the business name.",
    project: "Enter a website or the kind of project.",
    message: "Tell us a little about the place.",
  };

  const fields = ["name", "email", "business", "project", "message"].map((id) =>
    document.getElementById(id)
  );

  function showError(field) {
    const error = document.getElementById(field.id + "-error");
    field.setAttribute("aria-invalid", "true");
    if (error) {
      error.hidden = false;
      field.setAttribute("aria-describedby", error.id);
    }
  }

  function clearError(field) {
    const error = document.getElementById(field.id + "-error");
    field.removeAttribute("aria-invalid");
    if (error) error.hidden = true;
  }

  function armMessage(field) {
    const missing = field.validity.valueMissing;
    const badType = field.validity.typeMismatch;
    field.setCustomValidity(missing || badType ? messages[field.id] : "");
  }

  fields.forEach((field) => {
    field.addEventListener("invalid", () => showError(field));
    field.addEventListener("input", () => {
      field.setCustomValidity("");
      if (field.validity.valid) clearError(field);
    });
  });

  submit.addEventListener("click", () => {
    fields.forEach(armMessage);
  });

  function say(text) {
    status.textContent = text;
    status.focus();
  }

  function endpoint() {
    const action = form.getAttribute("action") || "";
    if (/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/i.test(action)) return action;
    return "";
  }

  function inbox() {
    const mail = (form.dataset.mailto || "").trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) return mail;
    return "";
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const trap = form.elements._gotcha;
    if (trap && trap.value) {
      say("Contact coming soon. Nothing was sent.");
      return;
    }

    const url = endpoint();
    const mail = inbox();

    if (url) {
      submit.disabled = true;
      const previous = submit.textContent;
      submit.textContent = "Sending…";
      try {
        const response = await fetch(url, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error(String(response.status));
        form.reset();
        fields.forEach(clearError);
        submit.textContent = "Sent";
        say("Sent. Your request is in.");
      } catch (err) {
        submit.disabled = false;
        submit.textContent = previous;
        say("The form didn’t send. Try again in a moment.");
      }
      return;
    }

    if (mail) {
      const lines = [];
      const data = new FormData(form);
      data.delete("_gotcha");
      data.delete("_subject");
      for (const [key, value] of data) lines.push(key + ": " + value);
      const href =
        "mailto:" +
        mail +
        "?subject=" +
        encodeURIComponent("Two Keys project request") +
        "&body=" +
        encodeURIComponent(lines.join("\n\n"));
      window.location.href = href;
      say("Your email app should open with this request.");
      return;
    }

    say("Contact coming soon. Nothing was sent.");
  });
})();
