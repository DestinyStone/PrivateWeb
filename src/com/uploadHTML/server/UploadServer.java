package com.uploadHTML.server;

import java.util.List;

import com.Jumpindex.Package.DivNews;
import com.uploadHTML.dao.uploadDao;

public class UploadServer
{
	public static void keepText(String main_subject, String subjectBox, List<DivNews> divnews)
	{
		uploadDao.keepMain(main_subject, subjectBox);
		uploadDao.keepSubjectContent(subjectBox);
		uploadDao.KeepJump(divnews);
	}
}
