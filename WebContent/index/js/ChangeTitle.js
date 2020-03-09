
function changeTitleFunc()
{
	 var Timer = setInterval(function()
	 {
		 $(document).on('visibilitychange', function(e) {
	         if (e.target.visibilityState == "visible") {
	             document.title = '私人小博客';
	         } else if (e.target.visibilityState == "hidden") {
	             document.title = "要离开了吗？ (｡ﾉω＼｡)ﾟ";
	         }
	     });
	 }, 30);
}