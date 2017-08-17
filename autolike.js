/**
 * Created by Profesor08 on 12.10.2015.
 */


 (function()
 {

 	var ScriptForHost = function()
 	{

 		var data = [];

 		this.push = function(hostName, action)
 		{
 			data.push({
 				name: hostName,
 				action: action
 			});
 		};

 		this.run = function(hostName)
 		{
 			data.forEach(function(host)
 			{
 				if (hostName = host.name)
 				{
 					host.action();
 				}
 			});
 		};

 	};

 	var sfh = new ScriptForHost();


 	sfh.push("youtube.com", function()
 	{

 		var isNew = false;

 		function getLikeButton()
 		{
 			var btn = document.querySelector(".like-button-renderer-like-button-unclicked");


 			if (!btn)
 			{
 				btn = document.querySelector("#top-level-buttons ytd-toggle-button-renderer:first-of-type");

 				if (btn)
 				{
 					isNew = true;
 				}
 			}

 			return btn;
 		}

 		function getDislikeButton()
 		{
 			var btn = document.querySelector(".like-button-renderer-dislike-button-unclicked");


 			if (!btn)
 			{
 				btn = document.querySelector("#top-level-buttons ytd-toggle-button-renderer:last-of-type");

 				if (btn)
 				{
 					isNew = true;
 				}
 			}

 			return btn;
 		}


 		function isActive(btn)
 		{
 			if (btn)
 			{
 				if (isNew)
 				{
 					return btn.classList.contains("style-default-active");
 				}
 				else 
 				{
 					return btn.classList.contains("hid");
 				}
 			}

 			return false;
 		}

 		var inter = setInterval(function()
 		{
 			if (!isActive(getDislikeButton()))
 			{
 				var btn = getLikeButton();

 				if (!isActive(btn))
 				{
 					btn.click();
 				}
 			}

 		}, 5000);

 	});

 	sfh.run(window.location.hostname);
 })();
