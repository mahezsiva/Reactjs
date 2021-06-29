package com.day6;

import java.applet.*;
import java.awt.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Apllet extends Applet {
	public void paint(Graphics g){
	  DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");  
	   LocalDateTime now = LocalDateTime.now();  
	   g.drawString(dtf.format(now),100, 100);
	}	

}
