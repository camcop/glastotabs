README.me

Glastotabs
==========

Glastotabs is a Firefox extension that lets you spawn _N_ new Container tabs at a given URL with a single click. Each time you click the toolbar button, it creates containers named `Glastotab #1`, `Glastotab #2`, … and opens a tab in each.


Installation
------------
1. Install Firefox and the [Firefox Multi-Account Containers](https://addons.mozilla.org/firefox/addon/multi-account-containers/) add-on.
2. On this Github page, click **Code** → **Download ZIP**.  
3. Extract the ZIP.  
4. In Firefox’s address bar, go to `about:debugging#/runtime/this-firefox`.  
5. Click **Load Temporary Add-on…** and select the `manifest.json` file in your extracted folder.

Usage
-----
1. (Optional) Pin the Glastotabs icon: click the toolbar’s puzzle-piece icon and pin **Glastotabs**.  
2. Click the Glastotabs icon to spawn 5 container tabs.   
3. Click as many times as you like to keep spawning tabs.

#### Tip: You can cyle through open tabs with Ctrl + PageUp/PageDown on Windows (or Ctrl+Tab/Ctrl+Shift+Tab on Mac)

Optional: Configure Options
---------------------------
By default Glastotabs uses:  
- Number of containers (N): 5  
- URL to open: https://glastonbury.seetickets.com  

To change these:  
1. Click the Glastotabs icon and choose **Options**, or go to `about:addons` → **Glastotabs** → **Options**.  
2. Enter your desired **Number of containers (N)** and **URL to open**, then click **Save**.  

Cleaning Up
-----------
To remove the containers after you're done with them:

1. Close the tabs (Ctrl+W to close a tab)
2. In Firefox's address bar, go to `about:preferences#containers`  
3. For each container named `Glastotab #…`, click Remove to delete it.

Temporary add-ons vanish when you restart Firefox. To reuse after restarting Firefox, remove and Load Temporary Add-on again.
