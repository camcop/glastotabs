Glastotabs
=========

Glastotabs is a Firefox extension that lets you spawn *N* new Container tabs at a given URL with a single click. Each time you click the toolbar button, it creates containers named  
`Glastotab #1`, `Glastotab #2`, … and opens a tab in each.

Folder Structure
----------------
glastotabs/  
├─ manifest.json  
├─ background.js  
├─ options.html  
└─ options.js  

Installation
------------
1. Click **Code** → **Download ZIP**.  
2. Extract the ZIP to a folder named `glastotabs`.  
3. In Firefox, install the [Firefox Multi-Account Containers add-on](https://addons.mozilla.org/en-GB/firefox/addon/multi-account-containers)
4. In Firefox, type `about:debugging#/runtime/this-firefox` into your url bar
5. Click **Load Temporary Add-on…** and select the `manifest.json` file in your `glastotabs` folder.  

Usage
-----
1. If needed, pin the Glastotabs icon: click the toolbar’s puzzle-piece icon and pin **Glastotabs**.  
2. Click the Glastotabs icon to spawn container tabs.  
   - Default settings: creates 5 containers (`Glastotab #1`–`#5`) and opens `` in each.  
3. Click again to spawn the next batch; containers will be numbered consecutively from the highest existing index + 1.  

Optional: Configure Options
---------------------------
By default Glastotabs uses:
- Number of containers (N): 5  
- URL to open: https://glastonbury.seetickets.com

To change these:
1. Click the Glastotabs icon and choose **Options**, or go to `about:addons` → **Glastotabs** → **Options**.  
2. Enter your desired **Number of containers (N)** and **URL to open**, then click **Save**.  
3. Click the toolbar icon to apply your new settings.

Cleaning Up
-----------
To remove all test Containers named `Glastotab #…`:
1. Open the Browser Console (Ctrl+Shift+J).  
2. Enter and run:
   ```js
   browser.contextualIdentities.query({}).then(list => {
     list.forEach(ci => {
       if (ci.name.startsWith("Glastotab #")) {
         browser.contextualIdentities.remove(ci.cookieStoreId);
       }
     });
   });
   ```

Permissions
-----------
Glastotab’s `manifest.json` declares:
- `"contextualIdentities"` – to create and remove Containers  
- `"tabs"` – to open tabs in those Containers  
- `"cookies"` + `"<all_urls>"` host-permission – required for opening tabs in non-default cookie stores  
- `"storage"` – to save your N and URL options  