function submitHTMLFunc()
{	
	var oSubmit = document.getElementById("submit");
	oSubmit.onclick = function()
	{
		var amain_subject = document.getElementById("main_subject");
		
		var asubjectBox = document.getElementById("subjectBox");
		
		var amaincontent = document.getElementById("maincontent");
		var aDiv = amaincontent.getElementsByTagName("div");
		
		var IDandContent = [];
		
		var maincontentSubject = [];
		var TextBox = [];
		var TextContent = [];
		var SmallerTextContent = [];
		var CodeBox = []
		
		for( var i = 0; i<aDiv.length; i++ )
		{
			IDandContent = [i, aDiv[i].innerHTML];
			if( aDiv[i].className == "TextBox" )
				TextBox.push(IDandContent);
			else if( aDiv[i].className == "TextContent" )
				TextContent.push(IDandContent);
			else if( aDiv[i].className == "SmallerTextContent" )
				SmallerTextContent.push(IDandContent);
			else if( aDiv[i].className == "CodeBox" )
				CodeBox.push(IDandContent);
		}

		$.getJSON
		(
			"UploadHTMLServlet",
			{main_subject:amain_subject.innerHTML, subjectBox:subjectBox.innerHTML, TextBox:[JSON.stringify(TextBox)], TextContent:[JSON.stringify(TextContent)], SmallerTextContent:[JSON.stringify(SmallerTextContent)], CodeBox:[JSON.stringify(CodeBox)]},
			function(result)
			{
				
			}
		)
	}
}