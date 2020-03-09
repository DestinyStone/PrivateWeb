function MonitorDivandBroFunc()
{
	var omainBackground_right = document.getElementById("mainBackground_right");
	var omainBackground_left = document.getElementById("mainBackground_left");
	var Leftdistance = 0;

	var Timer = null;
	Timer = setInterval(move, 0.1);

	function move()
	{
		var Monitor = omainBackground_right.getBoundingClientRect();
		if( Monitor.top <= 30 )
		{
			Leftdistance = omainBackground_right.getBoundingClientRect().left - 50;
			omainBackground_right.style.position = "fixed";
			omainBackground_right.style.left = Leftdistance + "px";
			omainBackground_right.style.top = 35 + "px";
			clearInterval(Timer);
			Timer = setInterval(MonitorMove, 0.1);
		}
	}

	function MonitorMove()
	{
		var Monitor = omainBackground_left.getBoundingClientRect();
		//alert(Monitor.top);
		if( Monitor.top > 30 )
		{
			omainBackground_right.style.position = "relative";
			omainBackground_right.style.left = 0 + "px";
			omainBackground_right.style.top = 0 + "px";
			clearInterval(Timer);
			Timer = setInterval(move, 0.1);
		}
	}
}