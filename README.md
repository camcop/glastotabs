README.me

Glastotabs
==========

Glastotabs is a Firefox extension that lets you spawn _N_ new Container tabs at a given URL with a single click. Each time you click the toolbar button, it creates containers named `Glastotab #1`, `Glastotab #2`, … and opens a tab in each.


Installation
------------
1. First install Firefox and the [Firefox Multi-Account Containers](https://addons.mozilla.org/firefox/addon/multi-account-containers/) add-on.
2. On this Github page, click **Code** → **Download ZIP**.  
3. Extract the ZIP to a folder.  
4. In Firefox’s address bar, go to `about:debugging#/runtime/this-firefox`.  
5. Click **Load Temporary Add-on…** and select the `manifest.json` file in your extracted folder.

Usage
-----
1. (Optional) Pin the Glastotabs icon: click the toolbar’s puzzle-piece icon and pin **Glastotabs**.  
2. Click the Glastotabs icon to spawn container tabs.  
   - **Default settings**: creates 5 containers (`Glastotab #1`–`#5`) and opens `https://glastonbury.seetickets.com` in each.  
3. Click as many times as you like to keep spawning tabs.

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
To remove all test containers named `Glastotab #…`:

1. Click the Multi-Account Containers icon in your toolbar.  
2. Choose **Manage Containers**.  
3. For each container named `Glastotab #…`, click the trash icon to delete it.


Permissions
-----------
Glastotabs’ `manifest.json` declares:
- `"contextualIdentities"` – to create and remove Containers  
- `"tabs"` – to open tabs in those Containers  
- `"cookies"` + `"<all_urls>"` host-permission – required for opening tabs in non-default cookie stores  
- `"storage"` – to save your N and URL options