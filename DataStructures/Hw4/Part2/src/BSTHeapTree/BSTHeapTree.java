package BSTHeapTree;

public class BSTHeapTree {
	public static void main(String[] args)
	{
		
		Heap<Integer> NewHeap = new Heap<Integer>();
		Heap<Integer> NewHeapp = new Heap<Integer>();
		
		HeapTree<Integer> NewTree = new HeapTree<Integer>();
		
		NewTree.add(10);
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

		NewTree.add(10);

		NewTree.add(1);
		NewTree.add(5);

		NewTree.travelPrint();
		/*
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

				*/
		
		NewHeap.printList();
	}
}
