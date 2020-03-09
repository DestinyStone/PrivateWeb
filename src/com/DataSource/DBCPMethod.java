package com.DataSource;

import java.sql.Connection;
import java.sql.SQLException;

import org.apache.commons.dbcp.BasicDataSource;

public class DBCPMethod
{
	private static Connection con = null;
	
	private DBCPMethod()
	{
		
	}
	
	public static Connection getConnection()
	{
		if( con == null )
		{
			BasicDataSource data = new BasicDataSource();
			data.setDriverClassName(DBNews.DriverClass);
			data.setUrl(DBNews.url);
			data.setUsername(DBNews.user);
			data.setPassword(DBNews.password);
			try
			{
				con = data.getConnection();
			} catch (SQLException e)
			{
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
		}		
		return con;
	}
}
