package dayseven;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Vowels {

	public static void main(String[] args) throws IOException {
		
FileReader ref=new FileReader("C:\\Users\\mahez\\OneDrive\\Desktop\\programs\\d3.txt");
BufferedReader rf=new BufferedReader(ref);
        String s="";
        int vowels=0;
        int c=0;
        int total;
         while((s=rf.readLine())!=null){
        	 
        	 char ch[]=s.toCharArray();
        	 total=ch.length;
        	 for(int i=0;i<ch.length;i++){
        		 if(ch[i]=='A'||ch[i]=='E'||ch[i]=='I'||ch[i]=='O'||ch[i]=='U'||ch[i]=='a'||ch[i]=='e'||ch[i]=='i'||ch[i]=='o'||ch[i]=='u'){
        			 vowels++;
        		 }
        		 else{
        			 c++;
        		 }	 
        	 }
        	 System.out.println("total no of characters="+total);
         }
       System.out.println("vowels in the file="+vowels);
       System.out.println("consonents in the file="+c);
       


		
	}

}
