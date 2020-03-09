package com.uploadHTML.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import com.DataSource.DBCPMethod;
import com.Jumpindex.Package.DivNews;

public class uploadDao
{
	private static int lookHTMLSub()
	{
		String sql = "select index_id from tab_index_main order by index_id desc";
		try
		{
			Statement state = DBCPMethod.getConnection().createStatement();
			ResultSet re = state.executeQuery(sql);
			if( re.next() )
				return re.getInt(1);
			
		} catch (SQLException e)
		{
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return -1;
	}
	
	public static void KeepJump(List<DivNews> divnews)
	{
		String sql = "insert into jumpcontent value(?, ?, ?, ?)";
		try
		{
			int count = lookHTMLSub();
			PreparedStatement prepar = DBCPMethod.getConnection().prepareStatement(sql);
			for( DivNews news : divnews )
			{
				prepar.setInt(1, count);
				prepar.setInt(2, news.getJumpnews_id());
				prepar.setString(3, news.getJumpcontent());
				prepar.setInt(4, news.getJumpcontent_id());
				prepar.executeUpdate();
			}
		} catch (SQLException e)
		{
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}
	
	public static void keepMain(String main_subject, String subjectBox)
	{
		String sql = "insert into tab_index_main(index_id,index_smallSubject, index_subject, index_content, index_Time, index_createname) values(?, '感慨', ?, ?, '2017-7-20', '六边形战士')";
		try
		{
			PreparedStatement prepar = DBCPMethod.getConnection().prepareStatement(sql);
			prepar.setInt(1, lookHTMLSub()+1);
			prepar.setString(2, main_subject);
			prepar.setString(3, subjectBox);
			prepar.executeUpdate();
		} catch (SQLException e)
		{
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}
	
	public static void keepSubjectContent(String subjectBox)
	{
		String sql = "insert into jump_subjectbox(index_id, subjectBox) value(?, ?)";
		try
		{
			PreparedStatement prepar = DBCPMethod.getConnection().prepareStatement(sql);
			prepar.setInt(1, lookHTMLSub());
			prepar.setString(2, subjectBox);
			prepar.executeUpdate();
		} catch (SQLException e)
		{
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}
}
