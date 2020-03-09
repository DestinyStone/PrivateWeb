package com.Jumpindex.news;

import java.util.ArrayList;
import java.util.List;

import com.Jumpindex.Package.DivNews;
import com.Jumpindex.Package.Subjectbox;

public class JumpFeedNews
{
	private boolean flag = false;
	private String error = "Î´Öª´íÎó";
	private List<DivNews> divnews = new ArrayList<DivNews>();
	private Subjectbox subjectobx = new Subjectbox();
	
	public Subjectbox getSubjectobx()
	{
		return subjectobx;
	}
	public void setSubjectobx(Subjectbox subjectobx)
	{
		this.subjectobx = subjectobx;
	}
	public boolean isFlag()
	{
		return flag;
	}
	public void setFlag(boolean flag)
	{
		this.flag = flag;
	}
	public String getError()
	{
		return error;
	}
	public void setError(String error)
	{
		this.error = error;
	}
	public List<DivNews> getDivnews()
	{
		return divnews;
	}
	public void setDivnews(List<DivNews> divnews)
	{
		this.divnews = divnews;
	}
	
	
}
