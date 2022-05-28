package com.highradius.servlet;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Year;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.crypto.Data;

import com.highradius.model.pojo;
import com.mysql.cj.xdevapi.Statement;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
/**
 * Servlet implementation class DataLoading
 */


@SuppressWarnings("unused")
@WebServlet("/DataLoading")
public class DataLoading extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DataLoading() {
        super();
       
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HashMap<Object ,Object> Response = new HashMap<Object,Object>();
		ArrayList<pojo> Invoices = new ArrayList<pojo>();
		
		try {
			//registering the jdbc driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection = DriverManager.getConnection( "jdbc:mysql://localhost:3306/grey_goose?zeroDateTimeBehavior=convertToNull", "root", "root");		
			PreparedStatement ps = connection.prepareStatement("SELECT * from winter_internship");
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				
	pojo invoice = new pojo(rs.getInt("sl_no"),rs.getString("business_code"),rs.getInt("cust_number"),rs.getString("clear_date"),rs.getString("buisness_year"),
			rs.getString("doc_id"),rs.getString("posting_date"),rs.getString("document_create_date"),rs.getString("document_create_date1"),
			rs.getString("due_in_date"),rs.getString("invoice_currency"),rs.getString("document_type"),rs.getInt("posting_id"),
			rs.getString("area_business"),rs.getDouble("total_open_amount"),rs.getString("baseline_create_date"),rs.getString("cust_payment_terms"),
			rs.getInt("invoice_id"),rs.getInt("isOpen"),rs.getString("aging_bucket"),rs.getInt("is_deleted"));
				Invoices.add(invoice);
			}
		
			Response.put("invoices", Invoices);
			
		} catch(Exception e) {
			System.out.println(e);
		}
		Gson gson= new Gson();
		String jsonResponse = gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.getWriter().append(jsonResponse);
		System.out.println(jsonResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
