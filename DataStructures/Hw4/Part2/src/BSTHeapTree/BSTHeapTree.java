package BSTHeapTree;

public class BSTHeapTree {
	public static void main(String[] args)
	{
		
		Heap<Integer> NewHeap = new Heap<Integer>();
		Heap<Integer> NewHeapp = new Heap<Integer>();

		NewHeapp.add(10);
		NewHeapp.add(11);
		NewHeapp.add(11);
		NewHeapp.add(12);
		NewHeapp.add(13);
		
		NewHeapp.printList();
		
		System.out.println();
		
		NewHeap.add(14);
		NewHeap.add(13);
		NewHeap.add(12);
		NewHeap.add(11);
		NewHeap.add(11);
		NewHeap.add(11);

		NewHeap.add(10);
		NewHeap.add(15);
		NewHeap.add(16);
		NewHeap.add(17);
		
		System.out.println();

		NewHeap.printList();

		NewHeap.remove(11);
		NewHeap.remove(11);
		NewHeap.remove(11);
		
		System.out.println();

		NewHeap.printList();

		NewHeap.remove(14);


		System.out.println();

				
		
		NewHeap.printList();
	}
}
