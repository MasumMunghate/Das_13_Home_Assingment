const monthNameEl = document.getElementById("month-name");
        const dayNameEl = document.getElementById("day-name");
        const dayNumEl = document.getElementById("day-number");
        const yearEl = document.getElementById("year");

        const date = new Date();
        const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };

        monthNameEl.textContent = date.toLocaleDateString("en", { month: "long" });
        dayNameEl.textContent = date.toLocaleDateString("en", { weekday: "long" });
        dayNumEl.textContent = date.getDate();
        yearEl.textContent = date.getFullYear();