import java.util.LinkedList;

public class Concating {
	 public static void main(String args[]) {
		  
	     
	      LinkedList<String> ref = new LinkedList<String>();
	  
	     
	      ref.add("walter");
	      ref.add("jesse");
	      ref.add("gus");
	      ref.add("mike");
	      
	      System.out.println(ref);
	      
	      LinkedList<String> ref1 = new LinkedList<String>();
		  
		     
	      ref1.add("bjorn");
	      ref1.add("ragnar");
	      ref1.add("floki");
	      ref1.add("ubbe");
	     
	      
	      System.out.println(ref1);
	  
	      LinkedList<String> newlist = new LinkedList<String>();
	      newlist.addAll(ref);
	      newlist.addAll(ref1);
	      
	      System.out.println("final array="+newlist);
	      
	      
	      
}
}