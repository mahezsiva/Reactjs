import java.util.LinkedList;

public class Contains {
	
		   public static void main(String args[]) {
		  
		     
		      LinkedList<Integer> ref = new LinkedList<Integer>();
		 
		      ref.add(10);
		      ref.add(20);
		      ref.add(30);
		      ref.add(40);
		      ref.add(50);
		      System.out.println("Elements:" + ref);
		      System.out.println(ref.contains(100));
		      System.out.println(ref.contains(20));
		      System.out.println(ref.contains(10));
		   }
}