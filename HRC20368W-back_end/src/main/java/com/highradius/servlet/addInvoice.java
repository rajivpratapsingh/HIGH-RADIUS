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
 * Servlet implementation class addInvoice
 */
@WebServlet("/addInvoice")
public class addInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public addInvoice() {
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

			String business_code = request.getParameter("business_code");
			String clear_date = request.getParameter("clear_date");
			int buisness_year =  Integer.parseInt(request.getParameter("buisness_year"));


			//registering the jdbc driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection = DriverManager.getConnection( "jdbc:mysql://localhost:3306/hrc_training", "root", "root");		

			PreparedStatement ps = connection.prepareStatement("INSERT INTO winter_internship (business_code,clear_date,buisness_year) VALUES (? , ? , ?)");
			
			ps.setString(1,business_code);
			ps.setString(2,clear_date);
			ps.setInt(3,buisness_year);

			if(ps.executeUpdate() >0) {
				Response.put("insert",true);

			}else {
				Response.put("insert",false);

			}

			Gson gson= new Gson();
			String jsonResponse = gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().append(jsonResponse);

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
