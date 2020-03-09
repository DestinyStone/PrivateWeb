function clickReturn()
{
	var oreturnIndex = document.getElementById("returnIndex");
	var amain_left_contentpackage = document.getElementById("main_left_contentpackage");
	var omainBackground_left = document.getElementById("mainBackground_left");
	var omainBackgroundUL = omainBackground_left.getElementsByTagName("ul")[0];
	var oJumpButBox = document.getElementById("JumpButBox");
	var Timer = null;
	var IndexTimer = null;
	
	oreturnIndex.flag = true;
	oreturnIndex.onclick = function()
	{
		if( oreturnIndex.flag == true )
		{
			oreturnIndex.flag = false;
			Timer = setInterval(setOpacity(1, 0), 100);
			$('html,body').animate({scrollTop:"285px"},500);
		}
	}
	function setOpacity(start, end, sum, index_id)
	{
		return function()
		{
			if( start <= end)
			{
				oreturnIndex.flag = true;
				amain_left_contentpackage.style.display = "none";
				ChangeJumpHeight();
				omainBackgroundUL.style.display = "block";
				oJumpButBox.style.display = "block";
				IndexTimer = setInterval(setOpacity1(0, 1), 100);
				clearInterval(Timer);
			}
			else
			{
				start -= 0.1;
				amain_left_contentpackage.style.opacity = start + "";
			}
		}
	}
	function setOpacity1(start, end)
	{
		return function()
		{
			if( start >= end)
			{
				clearInterval(IndexTimer);
			}
			else
			{
				start += 0.1;
				omainBackgroundUL.style.opacity = start + "";
				omainBackgroundUL.style.display = "block";
				oJumpButBox.style.display = "block";
			}
		}
	}
}