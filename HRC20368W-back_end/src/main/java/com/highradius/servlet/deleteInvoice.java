package com.highradius.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class deleteInvoice
 */
@WebServlet("/deleteInvoice")
public class deleteInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public deleteInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		
//		
		try {
//			System.out.println("2");

			HashMap<Object ,Object> Response = new HashMap<Object,Object>();
			int sl_no =  Integer.parseInt(request.getParameter("sl_no"));
      		Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/hrc_training", "root",  "root");		
//			String sql = ;
//			System.out.println("4");

			PreparedStatement ps = connection.prepareStatement("DELETE FROM winter_internship where sl_no in (?)");
			
			
			ps.setInt(1,sl_no);
//			System.out.println("5");

			if(ps.executeUpdate() >0) {
				Response.put("update",true);
//				System.out.println("6");

			}else {
				Response.put("update",false);
//				System.out.println("7");

			}
//			System.out.println("8");

			Gson gson= new Gson();
			String jsonResponse = gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().append(jsonResponse);
//			System.out.println("9");

		} catch(Exception e) {
			System.out.println(e);
		}	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
