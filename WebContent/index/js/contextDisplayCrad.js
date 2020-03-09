function contextDisplayCradFunc()
{
	var aMainSubject = document.getElementsByClassName("MainSubject");
	var aMainPackage = document.getElementsByClassName("MainPackage");
	var aMainNewPackage = document.getElementsByClassName("MainNewPackage");
	var ainMainSubjectContext = document.getElementsByClassName("inMainSubjectContext");
	var aMain_image_background = document.getElementsByClassName("Main_image_background");

	//标题 向上移动选项卡的定时器
	var SubjectTrimerTop = [];
	//标题 向下移动选项卡的定时器
	var SubjectTrimerBottom = [];
	//模拟offsetTop
	var NewoffsetTop = [];
	//模拟ainMainSubjectContext 的offsetTop
	var MainSubjectContextTop = [];

	for( var i = 0; i<aMainPackage.length; i++ )
	{
		var aMainSubject_subject = aMainPackage[i].getElementsByClassName("MainSubject_subject")[0];
		var aMainSubject_context = aMainPackage[i].getElementsByClassName("MainSubject_context")[0];
		
		aMainPackage[i].index = i;
		//剧中
		setInterval(center(aMainPackage[i], aMainNewPackage[i], aMainSubject_subject, aMainSubject_context), 100);
		//aMainPackage[i].style.width = aMainSubject_subject.offsetWidth + aMainSubject_context.offsetWidth + 30 + "px";
		//aMainNewPackage[i].style.width = aMainSubject_subject.offsetWidth + aMainSubject_context.offsetWidth + 30 + "px";
		aMainSubject_context.onmouseenter = function()
		{
			this.style.textShadow = "0px 0px 3px #00FF00";
		}	
		aMainSubject_context.onmouseleave = function()
		{
			this.style.textShadow = "0px 0px 3px #ffffff";
		}

		NewoffsetTop[i] = aMainNewPackage[i].offsetTop;
		MainSubjectContextTop[i] = ainMainSubjectContext[i].offsetTop;

		aMainPackage[i].onmouseenter = function()
		{
			clearInterval(SubjectTrimerBottom[this.index]);
			SubjectTrimerTop[this.index] = setInterval(HeadTagMove(this, 0, -2, SubjectTrimerTop[this.index]), 10);
			aMain_image_background[this.index].style.background = "rgba(0, 0, 0, 0.4)";
		}
		aMainPackage[i].onmouseleave = function()
		{
			clearInterval(SubjectTrimerTop[this.index]);
			SubjectTrimerBottom[this.index] = setInterval(HeadTagMove(this, 50, 2, SubjectTrimerBottom[this.index]), 10);
			aMain_image_background[this.index].style.background = "rgba(0, 0, 0, 0.2)";
		}
	}

	//移动头部选项卡
	function HeadTagMove(obj, end, sleep, Trimer)
	{
		return function()
		{
			if( NewoffsetTop[obj.index] == end )
			{
				clearInterval(Trimer);
			}
			else
			{
				// alert(obj.offsetTop);
				aMainNewPackage[obj.index].style.top = NewoffsetTop[obj.index] + sleep + "px";
				ainMainSubjectContext[obj.index].style.top = MainSubjectContextTop[obj.index] + sleep*2 + "px";
				// obj.style.height = obj.offsetHeight + (-sleep) + "px";
				NewoffsetTop[obj.index] = NewoffsetTop[obj.index] + sleep;
				MainSubjectContextTop[obj.index] = MainSubjectContextTop[obj.index] + sleep*2;
			}

		}
	}
}

function center(aMainPackage, aMainNewPackage, aMainSubject_subject, aMainSubject_context)
{
	return function()
	{
		aMainPackage.style.width = aMainSubject_subject.offsetWidth + aMainSubject_context.offsetWidth + 30 + "px";
		aMainNewPackage.style.width = aMainSubject_subject.offsetWidth + aMainSubject_context.offsetWidth + 30 + "px";
//		if( aMainPackage.index ==  0 )
//			alert(aMainSubject_context.offsetWidth);
	}
}