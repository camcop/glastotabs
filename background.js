// Debugging
browser.browserAction.onClicked.addListener(() => {
    console.log("⭐️ button clicked!");
});

// Listen for toolbar button click
browser.browserAction.onClicked.addListener(async () => {
    try {
        // load the saved settings (or defaults)
        let { n, url } = await browser.storage.local.get({
            n: 5,
            url: "https://glastonbury.seetickets.com"
        });
        await spawnContainers(n, url);
    }
    catch (err) {
        console.error("Error spawning containers:", err);
    }
});

/**
 * Look at all existing contexts and find the max “Container #X” index.
 * Returns the next index to use (maxFound + 1).
 */
async function getNextContainerIndex() {
    // 1) Query all containers
    let all = await browser.contextualIdentities.query({});
    // 2) Filter those whose names match “Container #<number>”
    let max = all.reduce((mx, ci) => {
        let m = ci.name.match(/^Glastotab #(\d+)$/);
        return m ? Math.max(mx, parseInt(m[1], 10)) : mx;
    }, 0);
    return max + 1;
}

/**
 * Create N containers and open URL in each.
 */
async function spawnContainers(N, TARGET_URL) {
    let start = await getNextContainerIndex();
    console.log(`Spawning ${N} containers starting at #${start}…`);
    
    for (let i = start; i < start + N; i++) {
        try {
            // 1) create a new container
            let identity = await browser.contextualIdentities.create({
                name: `Glastotab #${i}`,
                color: "orange",
                icon: "chill"
            });
            console.log(`✅ Created`, identity);

            // 2) open a tab in that container
            let tab = await browser.tabs.create({
                url: TARGET_URL,
                cookieStoreId: identity.cookieStoreId
            });
            console.log("Opened tab in:", identity.cookieStoreId, tab.id);
        }
        catch (e) {
            console.error(`Error at iteration ${i}:`, e);
        }
    }
}