package com.Jumpindex.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Jumpindex.Package.DivNews;
import com.Jumpindex.dao.JumpindexDao;
import com.Jumpindex.news.JumpFeedNews;
import com.Jumpindex.server.JumpindexServer;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class JumpindexServlet
 */
@WebServlet("/JumpindexServlet")
public class JumpindexServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String sumb = request.getParameter("sumb");
		JumpFeedNews feednews = JumpindexServer.getDivNews(Integer.parseInt(sumb));

		if( feednews.isFlag() == true )
		{
			response.setContentType("application/json;charset=UTF-8");
			PrintWriter out = response.getWriter();
			JSONArray jsons = JSONArray.fromObject(feednews.getDivnews());
			JSONObject json = new JSONObject();
			json.put("data", jsons);
			json.put("data1", feednews.getSubjectobx());
			out.print(json);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		doGet(request, response);
	}

}
