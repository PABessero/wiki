__NUXT_JSONP__("/features/keybinds", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj){return {data:[{article:{slug:"keybinds",title:"Keybinds",tags:["feature"],toc:[{id:F,depth:l,text:G},{id:H,depth:l,text:I},{id:J,depth:l,text:K}],body:{type:t,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Modifying your binds can be really useful, especially if you are playing with glitches which are often requiring pressing multiple buttons at the same time or in quick succession. This page will go through multiple options for rebinding such as the feature accessible from the settings' tab of the "},{type:b,tag:k,props:{to:w},children:[{type:a,value:z}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Though they are not directly related to the randomizer, the Ori speedrun community do have some rules regarding bind. If you are playing by yourself you can ignore them but when playing races, some organizator might want you to follow variants of these rules:"}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"You can use third party software."}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"You can have a bind on every button, except for the scroll wheel."}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Multibinds are allowed but macros are not (having multiple actions on the same button is allowed but every action has to resolve on the same frame)."}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"You can’t bind the same action (dash, jump…) to more than 4 buttons (because the ingame rebinding tool doesn’t allow it either)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:F},children:[{type:b,tag:e,props:{href:"#controllers",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the vanilla game, there isn't any option to rebind your controls on controller. But rest assured, the randomizer does add a simple way to rebind your inputs!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To do so, go to the Settings tab of the "},{type:b,tag:k,props:{to:w},children:[{type:a,value:z}]},{type:a,value:" and then click on the Controller tab. From here, connect a controller and press any input.\nYou'll see a list of every possible actions. The one with a chain symbol are the one which already have a bind assigned to them and the one without this symbol are missing a bind."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can click on \"Add bind\" for any action and press a button on your controller to bind that action to this button. You can also click on the X button near a bind in order to remove this bind from an action. For randomizer-only actions, it's also possible to hold your button while adding a bind in order to add a combination of buttons for this action."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Any changes to binds are automatically saved. You can return to the default keybinds by clicking on the Reset All To Default button, at the end of the page."}]},{type:a,value:c},{type:b,tag:m,props:{id:H},children:[{type:b,tag:e,props:{href:"#keyboard",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Like for Controllers, the randomizer add a way to rebind your inputs but, since it's already possible to rebind your controls in-game, the tool available in the Settings tab of the "},{type:b,tag:k,props:{to:w},children:[{type:a,value:z}]},{type:a,value:" only let you rebind randomizer-only actions."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To use this tool, once in the Settings tab of the randomizer, go to the keyboard tab. From here, you'll see a list of every randomizer-only action. The one with a chain symbol are the one which already have a bind assigned to them and the one without this symbol are missing a bind."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can click on \"Add bind\" for any action and press a key on your controller to bind that action to this button and then click on the Save button. It's possible to press multiple buttons in order to bind an action to a button combination instead of a single key. You can also click on the X button near a bind in order to remove this bind from an action."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Any change to binds are automatically saved. You can return to the default keybinds by clicking on the Reset All To Default button, at the end of the page."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The in-game rebinding tool is a bit limited, especiall because it doesn't support multibind. But if you go to AppData\\Local\\Ori and the Will of The Wisps, you will find the file KeyRebindings.txt. By opening this file with a text editor like Notepad, you can change your binds.\nEach action can be bound to 4 buttons, each one for a different control scheme. The file format is:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Action: Button1, Button2, Button3, Button4"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To specify a button, you have to use their Unity Keycode, which you can find on "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.unity3d.com\u002FScriptReference\u002FKeyCode.html",rel:[f,g,h],target:i},children:[{type:a,value:M}]},{type:a,value:".\nSwitching from one control scheme to another will freeze your game a bit so you want your multibind on the same control scheme."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Don’t forget to reload your game after modifying this file. Avoid using the in-game binding tool if you have edited this file by yourself since the in-game tool might delete some of your binds if you do so."}]},{type:a,value:c},{type:b,tag:m,props:{id:J},children:[{type:b,tag:e,props:{href:"#third-party-solutions",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If the first party and randomizer rebinding features aren't enough, there is a bunch of third party software you can use to bind your actions. The most popular one being "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.autohotkey.com\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"AutoHotKey"}]},{type:a,value:" which lets you run a script in which you can specify what binds you want. AutoHotKey can also support macros. You can learn how to use this tool by reading the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.autohotkey.com\u002Fdocs\u002FAutoHotkey.htm",rel:[f,g,h],target:i},children:[{type:a,value:"documentation"}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you are playing on controller through Steam, the recommended tool is Steam Config. Caeyo has written a tutorial on how to use it, which you can found "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.speedrun.com\u002Fori_wotw\u002Fguide\u002Fqc9ed",rel:[f,g,h],target:i},children:[{type:a,value:C}]},{type:a,value:". You can also use other software like "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002FAntiMicro\u002Fantimicro\u002Freleases\u002Ftag\u002F2.23",rel:[f,g,h],target:i},children:[{type:a,value:"antimicro"}]},{type:a,value:" if you can’t use Steam Config."}]}]},dir:D,path:"\u002Ffeatures\u002Fkeybinds",extension:u,createdAt:j,updatedAt:j},sidebarArticles:[{slug:B,title:"Ori WotW Randomizer wiki",sidebarTitle:"Home",toc:[],body:{type:t,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Welcome to the Ori and the Will of the Wisps randomizer wiki!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is a mod for the PC version of Ori and the Will of the Wisps which changes the contents of pickups. So when playing\nthe randomizer you will probably find skills when picking up a spirit light container!\nThis mod greatly improves the replayability of the game and is playable by anyone who already finished the game once.\nFor more advanced players, harder difficulties will ask you to progress by using more advanced movement options or\nglitches."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This wiki includes lots of information to help install this mod, understand the options for seed generation, and learn\nabout all the new things included in this mod."}]}]},dir:x,path:x,extension:u,createdAt:j,updatedAt:j},{slug:B,title:"Features",toc:[],body:{type:t,children:[{type:b,tag:d,props:{},children:[{type:a,value:"The main function of this randomizer is shuffling all the item locations.\nThat means it’s completely possible to collect a spirit light container but get the double jump skill instead.\nLikewise, Skill Trees don’t always give you a skill, so you might find a Gorlek Ore when activating the Bash Skill Tree."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The item placement however is not completely random: there is an algorithm or logic to the chaos.\nThis ensures that every playthrough is beatable by placing each progression item at a location you will be able to reach.\nFor more information, you can read the "},{type:b,tag:k,props:{to:N},children:[{type:a,value:"paths sections of the seed generation"}]},{type:a,value:".\nThis mod also adds other functionality to the game. Click on the links below to learn more about them."}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":D,deep:y},children:[{type:a,value:c}]}]},dir:D,path:"\u002Ffeatures\u002F",extension:u,createdAt:j,updatedAt:j},{slug:"installation",title:"Installation",toc:[{id:O,depth:l,text:P},{id:Q,depth:l,text:R},{id:S,depth:l,text:T},{id:U,depth:l,text:V},{id:W,depth:l,text:X}],body:{type:t,children:[{type:b,tag:m,props:{id:O},children:[{type:b,tag:e,props:{href:"#prerequisites",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Ori and the Will of the Wisps Randomizer requires the latest version of the game on PC (either Windows Store or Steam is fine)."}]},{type:a,value:c},{type:b,tag:m,props:{id:Q},children:[{type:b,tag:e,props:{href:"#download",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Download the lastest WotwRandoSetup.exe from "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fori-rando\u002Fbuild\u002Freleases",rel:[f,g,h],target:i},children:[{type:a,value:M}]},{type:a,value:". Launch this file to install the randomizer. Remember where you installed it, since you will be launching the mod from this folder."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Because the randomizer is working by injecting its own functionalities into the base game, anti-virus programs tend to view it as a malware. You will most likely need to whitelist the folder in which you installed the randomizer so your anti-virus is not preventing it from launching and installing."}]},{type:a,value:c},{type:b,tag:m,props:{id:S},children:[{type:b,tag:e,props:{href:"#steam",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since the randomizer needs to launch Ori and the Will of the Wisps, it needs to know where your Steam installation folder is. If you installed Steam in a non-default location, the randomizer installer will ask you for this path. You can change the Steam path later in your "},{type:b,tag:k,props:{to:Y},children:[{type:a,value:"settings"}]},{type:a,value:" if needed."}]},{type:a,value:c},{type:b,tag:m,props:{id:U},children:[{type:b,tag:e,props:{href:"#windows-store",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The randomizer should automatically detect that you have the Windows Store version of the game and prompt you to install the randomizer for it. If it does not, after installing, you can open "},{type:b,tag:k,props:{to:Y},children:[{type:a,value:"the settings"}]},{type:a,value:" and activate the Use Windows Store option."}]},{type:a,value:c},{type:b,tag:m,props:{id:W},children:[{type:b,tag:e,props:{href:"#after-installation",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check out the "},{type:b,tag:k,props:{to:Z},children:[{type:a,value:_}]},{type:a,value:" page for suggestions on how to generate and start your first seed!"}]}]},dir:x,path:$,extension:u,createdAt:j,updatedAt:j},{slug:"how-to-start",title:_,toc:[],body:{type:t,children:[{type:b,tag:d,props:{},children:[{type:a,value:"After "},{type:b,tag:k,props:{to:$},children:[{type:a,value:"installing the randomizer"}]},{type:a,value:", you can start Ori and the Will of the Wisps Randomizer.exe which will open a "},{type:b,tag:k,props:{to:w},children:[{type:a,value:z}]},{type:a,value:" from where you will be able to do everything you need in order to play the randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Firstly, you need to generate a seed. A seed contain the necessary information for your randomized playthrough, like the content of each item. You can generate them yourself by using the seed generator integrated into the launcher. You can find instructions on how to use the seed generator "},{type:b,tag:e,props:{href:aa,rel:[f,g,h],target:i},children:[{type:a,value:C}]},{type:a,value:". For beginners, we recommend to play with the Moki "},{type:b,tag:k,props:{to:"\u002Fseedgen\u002Fpresets"},children:[{type:a,value:"preset"}]},{type:a,value:" and the All Wisps "},{type:b,tag:k,props:{to:"\u002Fseedgen\u002Fgoals"},children:[{type:a,value:"goal"}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After generating your seed, the game should be launching. When you reach the main menu, you can try to press "},{type:b,tag:k,props:{to:"\u002Ffeatures\u002Fspecial-commands"},children:[{type:a,value:"Alt+L"}]},{type:a,value:" which should display a textbox with some information about the seed. If nothing appeared, the randomizer failed to inject itself into the game. It can happen if your game take too long to launch (in that case, the launcher should warn you about that issue), if your anti-virus is blocking the code injection process or if it deleted the Injector.exe file located in the randomizer installation folder (which you can open directly by clicking on the right icon on the Home tab). If Injector.exe is missing you need to reinstall the randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Instead of generating a seed yourself, you might have downloaded a .wotwr file from someone else, in which case you want to double click on it. It should ask you which program you want to use in order to open this type of file. Choose to browse for more apps on your computer and search the Ori and the Will of the Wisps Randomizer.exe which is located where you installed the randomizer. Once you have associated .wotwr files with the randomizer launcher, you should not have to do this again and simply double clicking on a .wotwr file will launch the randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once the randomizer launches successfully, you simply need to start playing! It is recommended to play on a new save file because the randomizer will also affect save files made with the base game. If you ever feel lost when playing a seed, you can open your map and use the "},{type:b,tag:k,props:{to:"\u002Ffeatures\u002Flogic-helper"},children:[{type:a,value:"In Logic filter"}]},{type:a,value:" which will show you every item you can collect with the skills you have. You can also read the "},{type:b,tag:k,props:{to:N},children:[{type:a,value:"paths section of the seed generation"}]},{type:a,value:" to learn more about what the randomizer might want you to do. The community is also able to help so don’t hesitate to join the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdiscord.com\u002Finvite\u002FaSz79M4",rel:[f,g,h],target:i},children:[{type:a,value:"Ori speedrunning Discord"}]},{type:a,value:" or the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdiscord.gg\u002FsfUr8ra5P7",rel:[f,g,h],target:i},children:[{type:a,value:"randomizer development Discord"}]},{type:a,value:" if you need help with something!"}]}]},dir:x,path:Z,extension:u,createdAt:j,updatedAt:j},{slug:B,title:"Seed Genenation",toc:[],body:{type:t,children:[{type:b,tag:d,props:{},children:[{type:a,value:"A seed is one particular placement of items in the game. For Will of the Wisps, that information is stored in a .wotwr file which you can generate using the seed generator. You can access it either though the "},{type:b,tag:k,props:{to:w},children:[{type:a,value:"randomizer Launcher"}]},{type:a,value:" or on the Internet "},{type:b,tag:e,props:{href:aa,rel:[f,g,h],target:i},children:[{type:a,value:C}]},{type:a,value:". There is a bunch of options but don't worry, this page will go through each of them."}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":ab},children:[{type:a,value:c}]}]},dir:ab,path:"\u002Fseedgen\u002F",extension:u,createdAt:j,updatedAt:j},{slug:B,title:"Tutorials",toc:[{id:ac,depth:l,text:ad},{id:ae,depth:l,text:af},{id:ag,depth:l,text:ah},{id:ai,depth:l,text:aj}],body:{type:t,children:[{type:b,tag:m,props:{id:ac},children:[{type:b,tag:e,props:{ariaHidden:n,href:"#sequence-breaks",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are quite a few ways to access specific areas sooner than intended. The following section goes over what you can do to skip location requirements."}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":"\u002Ftutorials\u002Fsequence-breaks",deep:y},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:ae},children:[{type:b,tag:e,props:{ariaHidden:n,href:"#movement",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:af}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Movement in Ori and the Will of the Wisps is quite deep. There are a bunch of advanced movement options that will let you access pickups with fewer skills or simply let you go faster."}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":"\u002Ftutorials\u002Fmovement",deep:y},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:ag},children:[{type:b,tag:e,props:{ariaHidden:n,href:"#area-specific-knowledge",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:ah}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Some areas in the game have a gimmick and by using some game knowledge you can interact with that game mechanic in unique ways."}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":"\u002Ftutorials\u002Farea-specific",deep:y},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:ai},children:[{type:b,tag:e,props:{ariaHidden:n,href:"#miscellaneous",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Other game knowledge you could use but that doesn't quite fit the other categories"}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":"\u002Ftutorials\u002Fmisc",deep:y},children:[{type:a,value:c}]}]},dir:"\u002Ftutorials",path:"\u002Ftutorials\u002F",extension:u,createdAt:j,updatedAt:j},{slug:"plando",title:"Plandomizer",toc:[],body:{type:t,children:[{type:b,tag:d,props:{},children:[{type:a,value:"A plandomizer (often shortened as plando) is a special kind of seed where another person already placed every items manually. These seeds can be anything from showcase of what the header's language can let you do or custom challenges."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You need to launch them through the randomizer in order to play them. Plandos are created by using a custom programming language which you can learn by reading through the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.google.com\u002Fdocument\u002Fd\u002F1IR1DHnbtO8rydCLEgFh-yp3iRkzZbFAG-EmR5hxrfmU\u002Fedit",rel:[f,g,h],target:i},children:[{type:a,value:"Header Documentation"}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is a list of every available Plando. You can contact the plando's creator if there is no direct link to them and you want to play them :"}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fdl.dropboxusercontent.com\u002Fs\u002Fis8324jbdkwk6fk\u002FItsDangerousToGoAlone.zip",rel:[f,g,h],target:i},children:[{type:a,value:"It's Dangerous To Go Alone"}]},{type:a,value:" by Sirius, a high difficulty challenge"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Chaos by CosmicAngel, completely randomizes your skills every time you collect a new pickup"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbluespheres.weebly.com\u002Ffireball.html",rel:[f,g,h],target:i},children:[{type:a,value:"Fireball"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbluespheres.weebly.com\u002Fkaizo.html",rel:[f,g,h],target:i},children:[{type:a,value:"Kaizo"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbluespheres.weebly.com\u002Ftime-act-1.html",rel:[f,g,h],target:i},children:[{type:a,value:"Time (Act 1)"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fdrive.google.com\u002Fdrive\u002Ffolders\u002F15rSX6TqJcJsQWFTIC67sygK_I_Dkm34k?usp=sharing",rel:[f,g,h],target:i},children:[{type:a,value:"Milktown"}]},{type:a,value:" by Justepic"}]},{type:a,value:c}]}]},dir:x,path:"\u002Fplando",extension:u,createdAt:j,updatedAt:j}]}],fetch:{},mutations:void 0}}("text","element","\n","p","a","nofollow","noopener","noreferrer","_blank","2022-02-14T14:47:22.876Z","nuxt-link",2,"h2","true",-1,"span","icon","icon-link","li","root",".md","page-list","\u002Ffeatures\u002Flauncher","\u002F","","Launcher",".","_index","here","\u002Ffeatures"," by CosmicAngel","controllers","Controllers","keyboard","Keyboard","third-party-solutions","Third party solutions","ul","this page","\u002Fseedgen\u002Fpaths","prerequisites","Prerequisites","download","Download","steam","Steam","windows-store","Windows Store","after-installation","After installation","\u002Ffeatures\u002Fsettings","\u002Fhow-to-start","How to start","\u002Finstallation","https:\u002F\u002Fwotw.orirando.com\u002Fseedgen","\u002Fseedgen","sequence-breaks","Sequence Breaks","movement","Movement","area-specific-knowledge","Area specific knowledge","miscellaneous","Miscellaneous")));