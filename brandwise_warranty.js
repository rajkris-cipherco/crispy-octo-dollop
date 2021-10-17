const Widget = Object.create({
    create(chatId) {
        const wdg = document.createElement("div")
        wdg.classList.add("brandwise-warranty");
        wdg.innerHTML = `<button type="button" onclick="alert('Hello from Brandwise!')">Click Me!</button>`;
        // Load your chat data into UI
        return wdg;
    }
});
