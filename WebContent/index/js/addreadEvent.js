//当点击阅读时 ul消失 替换为div
function addreadEventFunc()
{
	var aotherordiv = document.getElementsByClassName("otherordiv");
	var omainBackground_left = document.getElementById("mainBackground_left");
	var omainBackgroundUL = omainBackground_left.getElementsByTagName("ul")[0];
	var oJumpButBox = document.getElementById("JumpButBox");
	var aMainSubject_context = document.getElementsByClassName("MainSubject_context");

	var flag = true;
	var Timer = null;
	for( var i = 0; i<aotherordiv.length; i++ )
	{
		aMainSubject_context[i].index = i;
		aotherordiv[i].index = i;
		aMainSubject_context[i].onclick = function()
		{
			if( flag == true )
			{
				flag = false;
				Timer = setInterval(setOpacity(1, 0, this.index, aMainSubject_context[this.index].index_id), 100);
				$('html,body').animate({scrollTop:"285px"},500);
			}
		}

		aotherordiv[i].onclick = function()
		{
			if( flag == true )
			{
				flag = false;
				Timer = setInterval(setOpacity(1, 0, this.index, aMainSubject_context[this.index].index_id), 100);
				$('html,body').animate({scrollTop:"285px"},500);
			}
			// omainBackgroundUL.style.opacity = "0.3";
			// omainBackgroundUL.style.display = "none";
			// oJumpButBox.style.display = "none";
		}
	}
	
	function setOpacity(start, end, sum, index_id)
	{
		return function()
		{
			if( start <= end )
			{
				flag = true;
				clearInterval(Timer);
				omainBackgroundUL.style.display = "none";
				oJumpButBox.style.display = "none";
				ChangeJumpHeight();
				insetDiv(sum, index_id);
			}
			else
			{
				start -= 0.1;
				omainBackgroundUL.style.opacity = start + "";
			}
		}
	}

	var DIvTimer = null;
	var amain_left_contentpackage = document.getElementById("main_left_contentpackage");
	function insetDiv(sum, index_id)
	{
		amain_left_contentpackage.style.opacity = "0";
		amain_left_contentpackage.style.display = "block";
	
		$("#main_subject").html($(".MainSubject_context").eq(sum).find("a").html());
		$("#main_other li").eq(0).html($(".Main_newsPackage").eq(sum).find("li").eq(0).find("a").html());
		$("#main_other li").eq(1).html($(".Main_newsPackage").eq(sum).find("li").eq(1).find("a").html());
		$("#main_other li").eq(2).html($(".Main_newsPackage").eq(sum).find("li").eq(2).find("a").html());
		$("#main_other li").eq(3).html($(".Main_newsPackage").eq(sum).find("li").eq(3).find("a").html());
		$("#main_other li").eq(4).html($(".Main_newsPackage").eq(sum).find("li").eq(4).find("a").html());
		
		var oDiv = "";
		$.getJSON
		(
			"JumpindexServlet",
			"sumb=" + index_id,
			function(result)
			{
				var data1 = eval(result.data1);
				$("#subjectBox").html(data1.str);
				
				var data = eval(result.data);
				for( var i = 0; i<data.length; i++ )
				{
					var str = "<div class=\""+ data[i].jumpnews_classname + "\">" + data[i].jumpcontent + "</div>";
					$("#maincontent").html($("#maincontent").html() + str);
				}
			}
		);
		
		DIvTimer = setInterval(setOpacity1(0, 1), 100);
	}

	function setOpacity1(start, end)
	{
		return function()
		{
			if( start >= end )
			{
				flag = true;
				clearInterval(DIvTimer);
			}
			else
			{
				start += 0.1;
				amain_left_contentpackage.style.opacity = start + "";
			}
		}
	}
}