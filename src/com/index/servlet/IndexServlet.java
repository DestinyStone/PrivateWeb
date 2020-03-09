package com.index.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.index.Package.Index_mainPackage;
import com.index.news.FeedBackNews;
import com.index.service.Indexservice;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class IndexServlet
 */
@WebServlet("/IndexServlet")
public class IndexServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		FeedBackNews feedbacknews = new FeedBackNews();
		List<Index_mainPackage> index_mains = Indexservice.getData(feedbacknews);
		response.setContentType("application/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		
		if( feedbacknews.isFlag() == false )
		{
			String printJson = "{data:" + feedbacknews.getError() +"}";
			out.print(printJson);
		}
		else
		{
			
			JSONArray jsons = JSONArray.fromObject(index_mains);
			JSONObject data = new JSONObject();
			data.put("data", jsons);
			out.print(data);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		doGet(request, response);
	}

}
