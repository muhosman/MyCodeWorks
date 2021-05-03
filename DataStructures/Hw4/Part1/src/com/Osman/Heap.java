package com.Osman;

import java.util.ArrayList;
import java.util.Iterator;

public class Heap<E extends Comparable<E>> implements Iterator {
	
	private ArrayList<E> Nodes = new ArrayList<E>();
	
	public E getElement(int i)
	{
		return Nodes.get(i);
	}
	public int getSize()
	{
		return Nodes.size(); 
	}
	
	
    public int deleteRoot()
    {  
    	Nodes.set(0, Nodes.get(Nodes.size()-1));
        Nodes.remove(Nodes.size()-1);
  
        heapDeleteSort(0);
        
        return 0;
    }
	
    public void heapDeleteSort(int parent)
    {
        int largest = parent;
        int left = 2 * parent + 1;
        int right = 2 * parent + 2; 
  
        if (left < Nodes.size() && Nodes.get(left).compareTo(Nodes.get(largest)) > 0 )
            largest = left;
  
        if (right < Nodes.size() && Nodes.get(right).compareTo(Nodes.get(largest)) > 0 )
            largest = right;
  
        if (largest != parent) {
        	E temp = Nodes.get(parent);
            Nodes.set(parent, Nodes.get(largest));
            Nodes.set(largest, temp);
  
            heapDeleteSort(largest);
        }
    }
  

	 public void insertNode(E i)
	 {
	  	Nodes.add(i);
	  	heapInsertSort(Nodes.size()-1);
	 }
	 
    

	 public void heapInsertSort(int i)
	 {
	     int parent = (i - 1) / 2;
	   

	     if (Nodes.get(i).compareTo(Nodes.get(parent)) > 0) {
	    	 E temp = Nodes.get(i);
	         Nodes.set(i, Nodes.get(parent));
	         Nodes.set(parent, temp);
	             
	         heapInsertSort(parent);
	     }
	 }
	   

    private boolean SearchElement(E element)
    {
    	
    	for(int i=0 ; i<Nodes.size(); i++)
    	{
    		if(Nodes.get(i) == element) {
    			return true;
    		}
    	}
    	
    	return false;
    }
    
    
    public void Search(E element)
    {
    	if(SearchElement(element))
    		System.out.println("Element is founded.");
    	else
    		System.out.println("Element is not founded.");

    }
    
    
    public void mergeHeap(Heap<E> New)
    {
    	for(int i=0 ; i < New.getSize() ; i++)
    	{
    		insertNode(New.getElement(i));
    	}
    }
	
    
    public void printList() 
    {
    	for(int i=0; i < Nodes.size() ; i++)
    	{
    		System.out.println(Nodes.get(i));
    	}
    }
   
    
    @Override
	public boolean hasNext() {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public Object next() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
