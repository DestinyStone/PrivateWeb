function clickCreateDivFunc()
{
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

	var oUl = document.getElementsByClassName("createSelect")[0];
	var aLi = oUl.getElementsByTagName("li");
	var omaincontent = document.getElementById("maincontent");

	var ClassName = ["TextBox", "TextContent", "SmallerTextContent", "CodeBox"];

	for( var i = 0; i<4; i++ )
	{
		aLi[i].index = i;
		aLi[i].onclick = function()
		{
	//		alert("1");
			var oDiv = document.createElement("div");
			oDiv.className = ClassName[this.index];
			oDiv.innerHTML = "<input type=\"text\" class=\"textContent\"/>";
			omaincontent.appendChild(oDiv);

			handleTextFunc();
			
		}
	}
	aLi[4].onclick = function()
	{
		var amaincontent = document.getElementById("maincontent");
		var aDiv = amaincontent.getElementsByTagName("div");
		if( aDiv.length > 0 )
			amaincontent.removeChild(aDiv[aDiv.length-1]);
	}


}