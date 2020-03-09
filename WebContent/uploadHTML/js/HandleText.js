function handleTextFunc()
{
	var atextContent = document.getElementsByClassName("textContent");
	var omaincontent = document.getElementById("maincontent");
	var aDiv = omaincontent.getElementsByTagName("div");

	//表示存在文本框
	aDiv[aDiv.length-1].flag = true;
	for( var i = 0; i<atextContent.length; i++ )
	{
		atextContent[i].onblur = null;
		atextContent[i].onblur = function()
		{
			var parentnode = this.parentNode;
			var content = this.value;
			if( content != "" )
			{
				parentnode.removeChild(this);
				parentnode.innerHTML = content;
				parentnode.flag = false;
			}
			if( content == "" )
			{
				var parent = parentnode.parentNode;
				parent.removeChild(parentnode);
			}
		}

		aDiv[i].onclick = null;
		aDiv[i].onclick = function()
		{
			if(this.flag == false )
			{
				var content = this.innerHTML;
				this.innerHTML = "<input type=\"text\" class=\"textContent\" value=" + content + ">";
				this.getElementsByTagName("input")[0].focus();
				handleTextFunc();
				this.flag = true;
			}
		}
	}
}

function handleTextFunc0()
{
	var atextContent = document.getElementsByClassName("textContent0");
	for( var i = 0; i<atextContent.length; i++ )
	{
		atextContent[i].onblur = null;
		var parentnode = atextContent[i].parentNode;
		parentnode.flag = true;
		atextContent[i].onblur = function()
		{
			var content = this.value;
			if( content != "" )
			{
				parentnode.removeChild(this);
				parentnode.innerHTML = content;
				parentnode.flag = false;
			}
			if( content == "" )
			{
				parentnode.innerHTML = "<div class=\"BoxContent\">+</div>"
				var aBoxContent = document.getElementsByClassName("BoxContent");
				for( var i = 0; i<aBoxContent.length; i++ )
				{
					aBoxContent[i].onclick = function()
					{
						var parent = this.parentNode;
						parent.removeChild(this);
						parent.innerHTML = "<input type=\"text\" class=\"textContent0\"/>";
						handleTextFunc0();
					}
				}
			}
			parentnode.onclick = null;
			parentnode.onclick = function()
			{
				if(this.flag == false )
				{
					var content = this.innerHTML;
					this.innerHTML = "<input type=\"text\" class=\"textContent0\" value=" + content + ">";
					this.getElementsByTagName("input")[0].focus();
					handleTextFunc0();
					this.flag = true;
				}
			}
		}
	}
}