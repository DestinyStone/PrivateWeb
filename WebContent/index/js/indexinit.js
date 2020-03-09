//移除第二部分的模板
function removeTwoTemplate()
{
	var amain_left_contentpackage = document.getElementById("main_left_contentpackage");
	amain_left_contentpackage.style.display = "none";
}

//初始化IndexMain
function getDataIndexMain()
{
	var aMainSubject_subject = document.getElementsByClassName("MainSubject_subject");
	var aMainSubject_context = document.getElementsByClassName("MainSubject_context");
	var ainMainSubjectContext = document.getElementsByClassName("inMainSubjectContext");
	var aMain_newsPackage = document.getElementsByClassName("Main_newsPackage");
	
	var aotherordiv = document.getElementsByClassName("otherordiv");
	var aMainSubject_context = document.getElementsByClassName("MainSubject_context");
	
	$.getJSON
	(
		"IndexServlet",
		"",
		function(result)
		{
			var jsonUser = eval(result.data);
			for( var i = 0; i<jsonUser.length; i++ )
			{
				aMainSubject_subject[i].innerHTML = "<a href=\"javascript:void(0)\">"+jsonUser[i].index_smallSubject+"</a></div>";
				aMainSubject_context[i].innerHTML = "<a href=\"javascript:void(0)\">"+jsonUser[i].index_subject+"</a></div>";
				ainMainSubjectContext[i].innerHTML = jsonUser[i].index_content;

				var aLi = aMain_newsPackage[i].getElementsByTagName("li");
				for( var j = 0; j<aLi.length; j++ )
				{
					aLi[0].innerHTML = "<a href=\"javascript:void(0)\">"+jsonUser[i].index_Time+"</a></div>";
					aLi[1].innerHTML = "<a href=\"javascript:void(0)\">"+jsonUser[i].index_userNewsCount+"条评论</a></div>";
					aLi[2].innerHTML = "<a href=\"javascript:void(0)\">"+jsonUser[i].index_readcount+"次阅读</a></div>";
					aLi[3].innerHTML = "<a href=\"javascript:void(0)\">"+jsonUser[i].idnex_praiseCount+"人点赞</a></div>";
					aLi[4].innerHTML = "<a href=\"javascript:void(0)\">"+jsonUser[i].index_createname+"</a></div>";
				}
				aotherordiv[i].index_id = jsonUser[i].index_id;
				aMainSubject_context[i].index_id = jsonUser[i].index_id;
			}
		}
	)
}