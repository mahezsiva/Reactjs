import java.util.ArrayList;

public class Replace {

	public static void main(String[] args) {
	
		
		ArrayList<String>ref=new ArrayList<String>();
		
		ref.add("ajay");
		ref.add("vikki");
		ref.add("akash");
		System.out.println(ref);
		ref.set(1, "vignesh");
		System.out.println(ref);

	}

}
