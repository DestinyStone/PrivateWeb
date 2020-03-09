package com.index.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.DataSource.DBCPMethod;
import com.index.Package.Index_mainPackage;

public class IndexDao
{
	//查询index_main页面的信息
	public static List<Index_mainPackage> selectIndexMain(int count) 
	{
		String sql = "select index_smallSubject, index_subject, index_content, index_Time, index_userNewsCount, index_readcount, idnex_praiseCount, index_createname, index_id from tab_index_main order by index_id desc limit ?";
		try
		{
			PreparedStatement prepar = DBCPMethod.getConnection().prepareStatement(sql);
			prepar.setInt(1, count);
			ResultSet re = prepar.executeQuery();
			
			List<Index_mainPackage> Index_mainPackages = new ArrayList<Index_mainPackage>();
		
			for( int i = 0; i<count; i++ )
			{
				if( re.next() )
				{
					Index_mainPackage Index_mainPackage = new Index_mainPackage();
					Index_mainPackage.setIndex_smallSubject(re.getString(1));
					Index_mainPackage.setIndex_subject(re.getString(2));
					Index_mainPackage.setIndex_content(re.getString(3));
					Index_mainPackage.setIndex_Time(re.getString(4));
					Index_mainPackage.setIndex_userNewsCount(re.getInt(5));
					Index_mainPackage.setIndex_readcount(re.getInt(6));
					Index_mainPackage.setIdnex_praiseCount(re.getInt(7));
					Index_mainPackage.setIndex_createname(re.getString(8));
					Index_mainPackage.setIndex_id(re.getInt(9));
					
					String[] str = Index_mainPackage.getIndex_Time().split("-| ");
					Index_mainPackage.setIndex_Time(str[0] + "年" +str[1] + "月" + str[2] + "日");
					
					Index_mainPackages.add(Index_mainPackage);
					
				}
				else
				{
					break;
				}
			}
			
			return Index_mainPackages;
			
		} 
		catch (SQLException e)
		{
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return null;
	}
}
