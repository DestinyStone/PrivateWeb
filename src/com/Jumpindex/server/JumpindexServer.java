package com.Jumpindex.server;

import java.util.List;

import com.Jumpindex.Package.DivNews;
import com.Jumpindex.Package.Subjectbox;
import com.Jumpindex.dao.JumpindexDao;
import com.Jumpindex.news.JumpFeedNews;

public class JumpindexServer
{
	public static JumpFeedNews getDivNews(int sumb)
	{
		JumpFeedNews feednews = new JumpFeedNews();
		List<DivNews> divnews = JumpindexDao.getDivnews(sumb);
		if( divnews != null )
		{
			feednews.setFlag(true);
			feednews.setError("正确");
			feednews.setDivnews(divnews);
		}
		else
		{
			feednews.setError("网页不存在");
			feednews.setDivnews(null);
			return null;
		}
		
		Subjectbox box = JumpindexDao.getSubjectBox(sumb);
		if( divnews != null )
		{
			feednews.setFlag(true);
			feednews.setError("正确");
			feednews.setSubjectobx(box);;
		}
		else
		{
			feednews.setError("网页不存在");
			feednews.setDivnews(null);
			return null;
		}
		
		return feednews;
	}
}
