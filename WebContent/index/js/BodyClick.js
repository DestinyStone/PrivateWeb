function addBodyClick()
{
	var movex = 0;
	var movey = 1;
	var className;
	var Timer = [];
	var Timerindex = 0;
	var NewoffsetTop = [];
	$("body").click(function(){
       var e = e || window.event;
		if(e.pageX || e.pageY) {
			movex = e.pageX;
			movey = e.pageY
		}

		createDiv();
    });
	function createDiv()
	{
		var odiv = document.createElement("div");
		className = "top" + Timerindex;

		odiv.className=className;
		odiv.style.position = "absolute";
		// odiv.style.width = "800px";
		odiv.style.height = "30px";
		odiv.style.left = movex + "px";
		odiv.style.top = movey - 20 + "px";
		odiv.style.color = "rgba(255,192,203,1)";
		odiv.innerHTML = createFont();
		odiv.style.zIndex = "500";
		odiv.style.fontSize = "18px";
		odiv.style.fontWeight = "600";
		odiv.style.userSelect = "none";
		NewoffsetTop[Timerindex] = movey - 20;
		document.body.appendChild(odiv);

		var oClassName = document.getElementsByClassName(className)[0];
		oClassName.index = Timerindex;
		// alert(movey)
		Timer[Timerindex] = setInterval(chanDiv(oClassName, movey - 20, movey - 20 - 50, 1, 0, 0.1), 10);
		Timerindex++;
	}
	function chanDiv(obj, Movestart, Moveend, ColorStart, end, sleep)
	{
		return function()
		{
			if( ColorStart <= end )
			{
			 	document.body.removeChild(obj);
				clearInterval(Timer[obj.index]);
			}
			else
			{
				ColorStart = ColorStart - 0.005;
				obj.style.color = "rgba(255,192,203," + ColorStart + ")";

				obj.style.top = NewoffsetTop[obj.index] - sleep + "px";
				NewoffsetTop[obj.index] -= sleep;
				sleep += (Movestart - NewoffsetTop[obj.index]) / 1000;
			}
		}
	}

	function createFont()
	{
		var Font = [
		"(～o￣▽￣)～o 。。。滚来滚去……o～(＿△＿o～) ~。。。", 
		"ˋ( ° ▽、° ) (o(￣▽￣///(斩!!)", 
		"ヽ(ヽ `д′)ヽ`д′)ヽ`д′)┌┛┌┛┌┛★)`з゜)y", 
		"抽!!(￣ε(#￣)☆╰╮(￣▽￣///)", 
		"ヽ(゜▽゜　)－C<(/;◇;)/~", 
		"( *・ω・)✄╰ひ╯", 
		"Hi~ o(*￣▽￣*)ブ", 
		"お(ノ￣0￣)ノや（o￣ ・￣）oす(。＿　＿)。みZZzzzz…", 
		"(￣▽￣)～■干杯□～(￣▽￣)", 
		"ZZzz…(。-ω-)..ooO((【•:*:~夢~:*:•】))"
		];
		
		var i = Math.floor(Math.random() * Font.length );
		return Font[i];
	}
}