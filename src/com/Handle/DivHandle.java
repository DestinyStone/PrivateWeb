package com.Handle;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.Jumpindex.Package.DivNews;

public class DivHandle
{
	public static String divChangeString()
	{
		Scanner sc = new Scanner(System.in);
		String str = "";
		String pressStr = "";
		while( !str.equals("-1") )
		{
			str = sc.nextLine();
			
			if( !str.contains("\r") && !str.contains("\n") && !str.contains("-1") )
			{
				if( str.contains("\t") )
				{
					String var[] = str.split("\t");
					str = "";
					for( int i = 0; i<var.length; i++ )
					{
						if( !var[i].contains("\t") )
							str += var[i];
					}
				}
				
				pressStr += str;
			//	System.out.println(pressStr);
			}			
		}

		String[] Newstr = pressStr.split("\"");
		pressStr = "";
		for( int i = 0; i<Newstr.length; i++ )
		{
			if( i == Newstr.length - 1 )
				pressStr += Newstr[i];
			else
				pressStr += Newstr[i] + "\\\"";
		}
		return pressStr;
	}
	
	public static void ParseStringContent(List<DivNews> news, String divString)
	{	
		String[] divs = divString.split("</div>");
		for( int i = 0; i<divs.length; i++ )
		{	
			System.out.println(divs[i]);
		}
	}
	
	public static void ParseStringClass(List<DivNews> news, String divString)
	{
		String[] str0 = divString.split("</div>");
		for( int i = 0; i<str0.length; i++ )
		{
			String[] str1 = str0[i].split("\"");
			char[] chars = str1[1].toCharArray();
			String newStr = "";
			
			for( int j = 0; j<chars.length; j++ )
			{
				if( chars[j] != '\\' && chars[j] != '\r' && chars[j] != '\n' && chars[j] != ' ')
				{
					newStr += chars[j];
				}
			
			}
			news.get(i).setJumpnews_classname(newStr);
		}
	}
}
