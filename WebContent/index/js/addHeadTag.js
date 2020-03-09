function addHeadTagFunc()
{
	//添加头部的选项卡事件定时器
	var TimeraddHeadTagTop = [];
	var TimeraddHeadTagBottom = [];
	//选项卡本身定时器 用于解决当鼠标移入选项卡但选项卡未到达底部的情况
	var TimerTagHead = [];
	//模拟 offsetTop
	var NewoffsetTop = [];

	var flag = [];

	var Temp = []
	var oDiv = document.getElementById("headIndexBox");
	var oUl0 = oDiv.getElementsByTagName("ul")[0];
	var aLink = oUl0.getElementsByClassName("IndexTag");
	var aTagUl = oDiv.getElementsByClassName("indexBoxContentUL");
	var aTagBackground = oDiv.getElementsByClassName("indexBoxContent");
	//添加头部的选项卡事件
	addHeadTagEvent();


	function addHeadTagEvent()
	{
		for( var i = 1; i<aLink.length; i++ )
		{
			aLink[i].index = i;
			aTagUl[i].index = i;
			NewoffsetTop[i] = aTagUl[i].offsetTop;
			flag[i] = false;

			aLink[i].onmouseenter = function()
			{
				aTagBackground[this.index].style.height = "240px";
				clearInterval(TimeraddHeadTagTop[this.index]);
				TimeraddHeadTagBottom[this.index] = setInterval(HeadTagMove(this, 0, 10, TimeraddHeadTagBottom[this.index]), 10);
				aLink[this.index].style.background = "rgba(0, 0, 0, 0.3)";
			}
			aLink[i].onmouseleave = function()
			{
				clearInterval(TimeraddHeadTagBottom[this.index]);
				TimeraddHeadTagTop[this.index] = setInterval(HeadTagMove(aLink[this.index], -250, -10, TimeraddHeadTagTop[this.index]), 10);
				aLink[this.index].style.backgroundColor = "transparent";
			}

			aTagUl[i].onmouseenter = function()
			{
				clearInterval(TimeraddHeadTagTop[this.index]);
				clearInterval(TimeraddHeadTagBottom[this.index]);
				TimeraddHeadTagBottom[this.index] = setInterval(HeadTagMove(this, 0, 10, TimeraddHeadTagBottom[this.index]), 10);
				aLink[this.index].style.background = "rgba(0, 0, 0, 0.3)";	
			}

			aTagUl[i].onmouseleave = function()
			{
				clearInterval(TimeraddHeadTagTop[this.index]);
				clearInterval(TimeraddHeadTagBottom[this.index]);
				TimeraddHeadTagTop[this.index] = setInterval(HeadTagMove(aLink[this.index], -250, -10, TimeraddHeadTagTop[this.index]), 10);
				aLink[this.index].style.backgroundColor = "transparent";
			}

			//添加选项卡本身的移入移除事件
			var aLi = aTagUl[i].getElementsByTagName("li");
			for( var j = 0; j<aLi.length; j++ )
			{
				aLi[j].onmouseenter = function()
				{
					this.style.background = "rgba(0, 0, 0, 0.3)";
				}

				aLi[j].onmouseleave = function()
				{
					this.style.backgroundColor = "transparent";
				}
			}


		}
	}
	//移动头部选项卡
	function HeadTagMove(obj, end, sleep, Trimer)
	{
		return function()
		{
			if( NewoffsetTop[obj.index] == end )
			{
				if( end == -250 )
					aTagBackground[obj.index].style.height = "0px";
				clearInterval(Trimer);
			}
			else
			{
				aTagUl[obj.index].style.top = NewoffsetTop[obj.index] + sleep + "px";
				NewoffsetTop[obj.index] = NewoffsetTop[obj.index] + sleep;
			}

		}
	}
}