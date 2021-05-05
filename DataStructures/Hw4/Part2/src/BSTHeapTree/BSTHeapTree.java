package BSTHeapTree;
import java.util.Random;

public class BSTHeapTree {
		
	public static void driverFunction()
	{


	    Random rand = new Random();

		HeapTree<Integer> NewSecondTree = new HeapTree<Integer>();
		HeapTree<Integer> NewTree = new HeapTree<Integer>();

		/*
		for(int i=0; i<3000 ; i++)
		{
	        int randN = rand.nextInt(100);
			NewSecondTree.add(randN);
		}
		
		System.out.println(NewSecondTree.find_mod()+"  "+NewSecondTree.getNumberOfOcurrences() );
		*/
		
		NewTree.add(16);
		NewTree.add(17);
		NewTree.add(125);
		NewTree.add(122);
		NewTree.add(1000);
		NewTree.add(102);
		NewTree.add(109);
		NewTree.add(11);
		NewTree.add(1);
		NewTree.add(5);
		NewTree.add(102);
		NewTree.add(109);
		NewTree.add(11);
		NewTree.add(1000);
		
		NewTree.add(1100);
		NewTree.add(1200);
		NewTree.add(500);
		NewTree.add(105);
		NewTree.add(107);
		NewTree.add(1100);
		NewTree.add(1040);

		NewTree.add(122);
		NewTree.add(122);
		NewTree.add(122);

		NewTree.add(10);

		NewTree.add(1);
		NewTree.add(5);

		NewTree.remove(500);
		NewTree.remove(125);
		NewTree.remove(1000);
		NewTree.remove(1000);

		NewTree.add(5000);

		System.out.println(NewTree.find_mod());
		System.out.println(NewTree.find(10));

		NewTree.travelPrint();

	}
	
	public static void main(String[] args)
	{
		driverFunction();

	}
}
