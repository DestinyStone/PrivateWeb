//点击主页页面下滑
function  clickbutButtonMove()
{
	var oBut = document.getElementsByClassName("IndexTag")[0];
	oBut.onclick = function()
	{
		//alert("1");
		$('html,body').animate({scrollTop:"285px"},500);
	}
}
//阅读按钮变色
function chanNewsBut()
{
	var aotherordiv = document.getElementsByClassName("otherordiv");
	var Timerover = [];
	var TimerOut = []

	for( var i = 0; i<aotherordiv.length; i++ )
	{
		aotherordiv[i].index = i;
		aotherordiv[i].onmouseenter = function()
		{
			clearInterval(TimerOut[this.index]);
			var aLik = this.getElementsByTagName("a")[0];
			Timerover[this.index] = setInterval(ChanColor(this, aLik, 102, 102, 102, 64, 224, 208), 5);
		}
		aotherordiv[i].onmouseleave = function()
		{
			clearInterval(Timerover[this.index]);
			var aLik = this.getElementsByTagName("a")[0];
			TimerOut[this.index] = setInterval(ChanColor(this, aLik, 64, 224, 208, 102, 102, 102), 5);
		}
	}

	function ChanColor(obj, Chanobj, startR, startG, startB, endR, endG, endB)
	{
		return function()
		{
			if( startR == endR && startG == endG && startB == endB )
			{
				clearInterval(TimerOut[obj.index]);
				clearInterval(Timerover[obj.index]);
			}
			else
			{
				if( startR < endR )
					startR += 1;
				else if( startR > endR)
					startR -= 1;
				if( startG < endG )
					startG += 1;
				else if( startG > endG)
					startG -= 1;
				if( startB < endB )
					startB += 1;
				else if( startB > endB)
					startB -= 1;
				Chanobj.style.color = "rgb(" + startR + "," + startG +"," + startB + ")";
			}
		}
	}
}