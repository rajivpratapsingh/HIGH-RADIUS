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
 * Servlet implementation class updateInvoice
 */
@WebServlet("/updateInvoice")
public class updateInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public updateInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		try {
			System.out.println("2");

			HashMap<Object ,Object> Response = new HashMap<Object,Object>();
			System.out.println("before");
			
			int sl_no =  Integer.parseInt(request.getParameter("sl_no"));
			
//			System.out.println("after");
			String invoice_currency =  request.getParameter("invoice_currency");
			String cust_payment_terms =  request.getParameter("cust_payment_terms");
//			System.out.println("3");  

			//registering the jdbc driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/hrc_training", "root", "root");		
//			String sql = ;
//			System.out.println("4");

			PreparedStatement ps = connection.prepareStatement("UPDATE winter_internship set invoice_currency=? , cust_payment_terms=? where sl_no=?");
			
			
			ps.setString(1,invoice_currency);
			ps.setString(2,cust_payment_terms);
			ps.setInt(3,sl_no );
//			System.out.println("5");

			if(ps.executeUpdate() >0) {
				Response.put("update",true);
//				System.out.println("6");

			}else {
				Response.put("update",false);
//				System.out.println("7");

			}   
			System.out.println("8");

			Gson gson= new Gson();
			String jsonResponse = gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().append(jsonResponse);
//			System.out.println("9");

		} catch(Exception e) {
			System.out.println(e);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
