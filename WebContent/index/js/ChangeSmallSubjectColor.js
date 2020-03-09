function ChangeSmallColorFunc()
{
	var aMainSubject_subject = document.getElementsByClassName("MainSubject_subject");
	var Color = ["#8968CD", "#6495ED", "#00FFFF", "#FFBBFF", "#FF8C00"];
	for( var i = 0; i<aMainSubject_subject.length; i++ )
	{
		aMainSubject_subject[i].style.backgroundColor = Color[Math.floor(Math.random() * (Color.length - 1) )];
	}
}