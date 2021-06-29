package dayseven;

import java.io.*;  
import java.util.*; 

public class Copy {
 
	 public static void main(String arg[]) throws Exception {  
	  Scanner sc = new Scanner(System.in);  
	  System.out.print("Provide source file :");  
	  String sfile = sc.next();  
	  System.out.print("Provide destination file :");  
	  String dfile = sc.next();  
	  FileReader in = new FileReader(sfile);  
	  FileWriter out = new FileWriter(dfile);  
	  int c;  
	  while ((c = in.read()) != -1) {  
		 
	   out.write(c);  
	  }  
	  System.out.println("Copy finish...");  
	  in.close();  
	  out.close();  
	 }  
	}