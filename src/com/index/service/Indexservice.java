package com.index.service;

import java.util.List;

import com.index.Package.Index_mainPackage;
import com.index.dao.IndexDao;
import com.index.news.FeedBackNews;

public class Indexservice
{
	public static List<Index_mainPackage> getData(FeedBackNews feed)
	{
		List<Index_mainPackage> index = IndexDao.selectIndexMain(15);
		if( index != null )
		{
			feed.setFlag(true);
			feed.setError("Çë¼ì²éÍøÂç");
		}
		return index;
	}
}
