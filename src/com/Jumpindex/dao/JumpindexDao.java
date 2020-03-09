package com.Jumpindex.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.DataSource.DBCPMethod;
import com.Jumpindex.Package.DivNews;
import com.Jumpindex.Package.Jumpnews;
import com.Jumpindex.Package.Subjectbox;

public class JumpindexDao
{
	//查找网页信息
	public static List<DivNews> getDivnews(int sumb)
	{
		String sql = "select jumpnews_id, jumpcontent_id, jumpcontent from jumpcontent where index_id = ? order by jumpcontent_id";
		String jumpnews = "select * from jumpnews";
		try
		{	
			PreparedStatement preparjumpnews = DBCPMethod.getConnection().prepareStatement(jumpnews);
			ResultSet rejumpnews = preparjumpnews.executeQuery();
			
			List<Jumpnews> junews = new ArrayList<Jumpnews>();
			while( rejumpnews.next() )
			{
				Jumpnews jump = new Jumpnews();
				jump.setJumpnews_id(rejumpnews.getInt(1));
				jump.setJumpnews_classname(rejumpnews.getString(2));
				
				junews.add(jump);
			}
			
			PreparedStatement prepardivnews = DBCPMethod.getConnection().prepareStatement(sql);
			prepardivnews.setInt(1, sumb);
			ResultSet redivnews = prepardivnews.executeQuery();
			
			List<DivNews> divnews = new ArrayList<DivNews>();
			while( redivnews.next() )
			{
				DivNews news = new DivNews();
				news.setJumpnews_id(redivnews.getInt("jumpnews_id"));
				news.setJumpcontent_id(redivnews.getInt("jumpnews_id"));
				news.setJumpcontent(redivnews.getString("jumpcontent"));
				
				for( int i = 0; i<junews.size(); i++ )
				{
					if( news.getJumpnews_id() == junews.get(i).getJumpnews_id() )
						news.setJumpnews_classname(junews.get(i).getJumpnews_classname());
				}
				
				divnews.add(news);
			}
			return divnews;
		} 
		catch (SQLException e)
		{
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		
		
		return null;
	}
	
	//查找小标题
	public static Subjectbox getSubjectBox(int sumb)
	{
		String sql = "select subjectBox from jump_subjectbox where index_id = ?";
		try
		{
			PreparedStatement prepar = DBCPMethod.getConnection().prepareStatement(sql);
			prepar.setInt(1, sumb);
			ResultSet re = prepar.executeQuery();
			
			Subjectbox box = new Subjectbox();
			if( re.next() )
				box.setStr(re.getString(1));
			return box;
				
		}
		catch (SQLException e)
		{
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return null;
	}
}
