package com.Osman;

public class HeapOperation 
{
	public static void main(String[] args) 
	{
		Heap<Integer> NewHeap = new Heap<Integer>();
		Heap<Integer> NewHeapp = new Heap<Integer>();

		NewHeapp.insertNode(10);
		NewHeapp.insertNode(11);
		NewHeapp.insertNode(12);
		NewHeapp.insertNode(13);
		
		NewHeapp.printList();
		
		System.out.println();
		
		NewHeap.insertNode(14);
		NewHeap.insertNode(15);
		NewHeap.insertNode(16);
		NewHeap.insertNode(17);
		
		NewHeap.printList();

		System.out.println();

		
		NewHeap.mergeHeap(NewHeapp);
		
		NewHeap.deleteRoot();
		
		
		
		NewHeap.printList();
	}

}
