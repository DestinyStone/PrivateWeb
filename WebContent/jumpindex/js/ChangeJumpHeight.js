function ChangeJumpHeight()
{
	var omainBackground_left = document.getElementById("mainBackground_left");
	var omainBackground = document.getElementById("mainBackground");
	var omainBackgroundBox = document.getElementById("mainBackgroundBox");
	var amain_left_contentpackage = document.getElementById("main_left_contentpackage");
	var amain_left_content = document.getElementById("main_left_content");
	var omainBackgroundUL = omainBackground_left.getElementsByTagName("ul")[0];
	var oJumpButBox = document.getElementById("JumpButBox");
	var Timercontentpackage = null;
	Timercontentpackage = setInterval(ChangeJumpEvent(amain_left_contentpackage, omainBackgroundUL), 1000);
	
	function ChangeJumpEvent(obj, objUL)
	{
		return function()
		{
			if( obj.style.display == "block" )
			{
				var amaincontent = document.getElementById("maincontent");
				if( amaincontent.offsetHeight < 1500 )
				{
					amaincontent.style.height = 1500 + "px";
				}
				omainBackground_left.style.height = 1180 + amaincontent.offsetHeight + "px";
				omainBackground.style.height = 1180 + amaincontent.offsetHeight + "px";
				omainBackgroundBox.style.height = 1180 + amaincontent.offsetHeight + "px";
				clearInterval(Timercontentpackage);
			}
			if( objUL.style.display == "block" )
			{
				//alert("1");
				//omainBackground_left.style.height = 5700 + "px";
				omainBackground.style.height = 5700 + "px";
				omainBackgroundBox.style.height = 5700 + "px";
				clearInterval(Timercontentpackage);
			}
		}
	}
}