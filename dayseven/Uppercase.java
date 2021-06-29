package dayseven;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.*;
import javax.swing.*;

class Uppercase{

    public static void main (String[] args) {
        try
        {
            FileReader fr = new FileReader("C:\\Users\\mahez\\OneDrive\\Desktop\\programs\\d3.txt");
            BufferedReader br = new BufferedReader(fr);
           PrintWriter out = (new PrintWriter(new FileWriter("C:\\Users\\mahez\\OneDrive\\Desktop\\programs\\d4.txt")));
            String s="";
            while((s = br.readLine()) != null)
            {
                out.write(s.toUpperCase()+"\n");
            }
            out.close();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }

}