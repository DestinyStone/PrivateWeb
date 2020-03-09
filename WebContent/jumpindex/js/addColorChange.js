function ColorChange()
{
	var oreawarLi0 = document.getElementById("reawarLi0");
	var oreawarLi1 = document.getElementById("reawarLi1");
	var oreawarLi2 = document.getElementById("reawarLi2");
	oreawarLi0.index = 0;
	oreawarLi1.index = 1;
	oreawarLi2.index = 2;
	var TrimerOver = [];
	var TrimerOut = [];
	var StartR = [255, 255, 255];
	var StartG = [255, 255, 255];
	var StartB = [255, 255, 255];
	var EndR = [92, 238, 67];
	var EndG = [172, 122, 205];
	var EndB = [238, 233, 128];
	var StartTran = [0, 0, 0];


	oreawarLi0.onmouseenter = function()
	{
		clearInterval(TrimerOut[this.index]);
		TrimerOver[this.index] = setInterval(ColorFunc(StartR[this.index], StartG[this.index], StartB[this.index], EndR[this.index], EndG[this.index], EndB[this.index], StartTran[this.index], 1, this, TrimerOver), 5);
	}
	oreawarLi0.onmouseleave = function()
	{
		clearInterval(TrimerOver[this.index]);
		TrimerOut[this.index] = setInterval(ColorFunc(StartR[this.index], StartG[this.index], StartB[this.index], 255, 255, 255, StartTran[this.index], 0, this, TrimerOut), 5);
	}
	oreawarLi1.onmouseenter = function()
	{
		clearInterval(TrimerOut[this.index]);
		TrimerOver[this.index] = setInterval(ColorFunc(StartR[this.index], StartG[this.index], StartB[this.index], EndR[this.index], EndG[this.index], EndB[this.index], StartTran[this.index], 1, this, TrimerOver), 5);
	}
	oreawarLi1.onmouseleave = function()
	{
		clearInterval(TrimerOver[this.index]);
		TrimerOut[this.index] = setInterval(ColorFunc(StartR[this.index], StartG[this.index], StartB[this.index], 255, 255, 255, StartTran[this.index], 0, this, TrimerOut), 5);
	}
	oreawarLi2.onmouseenter = function()
	{
		clearInterval(TrimerOut[this.index]);
		TrimerOver[this.index] = setInterval(ColorFunc(StartR[this.index], StartG[this.index], StartB[this.index], EndR[this.index], EndG[this.index], EndB[this.index], StartTran[this.index], 1, this, TrimerOver), 5);
	}
	oreawarLi2.onmouseleave = function()
	{
		clearInterval(TrimerOver[this.index]);
		TrimerOut[this.index] = setInterval(ColorFunc(StartR[this.index], StartG[this.index], StartB[this.index], 255, 255, 255, StartTran[this.index], 0, this, TrimerOut), 5);
	}

	function ColorFunc(startR, startG, startB, endR, endG, endB, startTran, endTran, obj, Timer)
	{
		return function()
		{
			if( startR == endR && startG == endG && startB == endB )
			{
				clearInterval(Timer[obj.index]);
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
				if( startTran > endTran )
					startTran -= 0.01;
				else
					startTran += 0.01;
				obj.style.backgroundColor = "rgba(" + startR + "," + startG +"," + startB + "," + startTran + ")";
				if( startR > endR || startG > endG || startB > endB )
				{
					obj.style.color = "rgb(" + ( 255 - (startR - endR) ) + "," + ( 255 - (startG - endG) ) +"," + ( 255 - (startB - endB) ) + ")";
				}
				else if( startR < endR || startG < endG || startB < endB )
				{
					obj.style.color = "rgb(" + ( endR - startR + EndR[obj.index]) + "," + ( endG - startG + EndG[obj.index]) +"," + (endB - startB + EndB[obj.index]) + ")";
				}
				StartR[obj.index] = startR ;
				StartG[obj.index] = startG;
				StartB[obj.index] = startB;
				StartTran[obj.index] = startTran;
				// alert(StartR[obj.index]);
			}
		}
	}
}