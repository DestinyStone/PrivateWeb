function contextDisplayCradBackgroundFunc()
{
	var aMain_image = document.getElementsByClassName("Main_image");
	var flag = -1;
	var isFlag = -1;
	for( var i = 0; i<aMain_image.length; i++ )
	{
		var aImage = aMain_image[i].getElementsByTagName("img")[0];
		while( flag == isFlag )
			flag = Math.ceil(Math.random()*19 + 1); 
		isFlag = flag; 
		console.log(flag);
		aImage.src = "index/Image/thumb_" + flag + ".jpg";
	}
}