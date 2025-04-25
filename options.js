// Default values if nothing saved yet
const DEFAULTS = {
    n: 5,
    url: "https://glastonbury.seetickets.com"
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("settings-form")
    .addEventListener("submit", saveOptions);

function restoreOptions(e) {
    browser.storage.local.get(DEFAULTS)
        .then(settings => {
            document.getElementById("inp-n").value = settings.n;
            document.getElementById("inp-url").value = settings.url;
        });
}

function saveOptions(e) {
    e.preventDefault();
    let n = parseInt(document.getElementById("inp-n").value, 10);
    let url = document.getElementById("inp-url").value.trim();

    browser.storage.local.set({ n, url })
        .then(() => {
            let status = document.getElementById("status");
            status.textContent = "Settings saved.";
            setTimeout(() => status.textContent = "", 1500);
        })
        .catch(err => console.error("Storage error:", err));
}