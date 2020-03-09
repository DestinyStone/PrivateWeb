package com.uploadHTML.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Jumpindex.Package.DivNews;
import com.uploaadHTML.Package.NewsPackage;
import com.uploadHTML.server.UploadServer;

@WebServlet("/UploadHTMLServlet")
public class UploadHTMLServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String main_subject = request.getParameter("main_subject");
		String subjectBox = request.getParameter("subjectBox");
		String[] TextBoxs = request.getParameterValues("TextBox[]");
		String[] TextContents = request.getParameterValues("TextContent[]");
		String[] SmallerTextContents = request.getParameterValues("SmallerTextContent[]");
		String[] CodeBoxs = request.getParameterValues("CodeBox[]");
		
		List<DivNews> divnews = new ArrayList<DivNews>();
		NewsPackage.newspack(divnews, TextBoxs[0], 1);
		NewsPackage.newspack(divnews, TextContents[0], 2);
		NewsPackage.newspack(divnews, SmallerTextContents[0], 3);
		NewsPackage.newspack(divnews, CodeBoxs[0], 4);
		
		UploadServer.keepText(main_subject, subjectBox, divnews);
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
