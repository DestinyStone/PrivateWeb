
window.onload = function()
{
	//changwidth();
	getDataIndexMain();
	//初始化 //移除第二部分的模板
	removeTwoTemplate();
	//body添加单击事件
	addBodyClick();
	//添加头部选项卡
	addHeadTagFunc();
	//内容展示卡
	contextDisplayCradFunc();
	//替换背景图片
	contextDisplayCradBackgroundFunc();
	//浏览器上移动时 div保持不变 下移动 div向下
	MonitorDivandBroFunc();
	// //点击主页页面下滑
	clickbutButtonMove();
	//当点击阅读时 ul消失 替换为div
	addreadEventFunc();
	//阅读按钮变色
	chanNewsBut();
	
	ColorChange();
	
	changeTitleFunc();

	ChangeSmallColorFunc();
	
	clickReturn();
}
