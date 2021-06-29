package dayseven;

import java.io.*;
import java.util.*;


public class Main {
    public static void main(String[] args) {

        File f1 = new File("C:\\Users\\mahez\\OneDrive\\Desktop\\programs\\d3.txt");
        System.out.println("Name of the file:"+f1.getName());
        if(f1.exists())
        System.out.println("File is existing");
        else
        System.out.println("File is not existing");

        if(f1.canRead())
        System.out.println("File readable");
        else
        System.out.println("Not readable");

        if(f1.canWrite())
        System.out.println("File Writable");
        else
        System.out.println("Not writable");

        if(f1.isFile())
        System.out.println("It is a TXT file");
        else
        System.out.println("It is not a TXT file");
        System.out.println("Length of the file:"+f1.length());

    }
 
}