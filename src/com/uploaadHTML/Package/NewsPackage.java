package com.uploaadHTML.Package;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.Jumpindex.Package.DivNews;

import net.sf.json.JSONArray;

public class NewsPackage
{
	public static void newspack(List<DivNews> divnews, String news, int category)
	{
		JSONArray totalnews = JSONArray.fromObject(news);
		Iterator it = totalnews.iterator();
		while( it.hasNext() )
		{
			JSONArray partnews = JSONArray.fromObject(it.next());
			DivNews divnew = new DivNews();
			divnew.setJumpnews_id(category);
			divnew.setJumpcontent_id((int)partnews.get(0));
			divnew.setJumpcontent((String)partnews.get(1));
			divnews.add(divnew);
		}
	}
}
