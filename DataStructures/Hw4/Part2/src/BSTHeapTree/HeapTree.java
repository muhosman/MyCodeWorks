package BSTHeapTree;

public class HeapTree<E extends Comparable<E>> {
	
	private class Node<E>
    {
        private Heap<? super E> parent;
        private Node<E> left, right;
        
        /*
         * Constructor of Node
         * @parameter item It is a new Heap item.
         */
        public Node(Heap<? super E> item)
        {
            parent = item;
            left = null; 
            right = null;
        }
    }
	
	private Node<E> root;
	private int numberOfOcurrence;
	private E mod;
	
	/*
	 * Getters of mod
	 * @return mod
	 */
	public E getMod() {
		return mod;
	}
	/*
	 * Setters of mod
	 * @parameter mod 
	 */
	public void setMod(E mod) {
		this.mod = mod;
	}
	/*
	 * Getters of NumberOfOcurrences
	 * @return numberOfOcurrences
	 */
	public int getNumberOfOcurrences() {
		return numberOfOcurrence;
	}
	/*
	 * Setters of NumberOfOcurrences
	 * @parameter numberOfOcurrences New numbers of value
	 */
	public void setNumberOfOcurrences(int numberOfOcurrence) {
		this.numberOfOcurrence = numberOfOcurrence;
	}
	
	/*
	 * Constructor
	 */
	public HeapTree()
	{
		root = null;
	}
	
	/*
	 * It will find mod in the tree so it calls to travel find mod.
	 * @return It will return the mod element
	 */
	public E find_mod()
	{
		int temp = root.parent.getModNumberOfOcurrence();
		E tempp;
		
		mod = (E) root.parent.find_mod();
	
		return travelFindMod(root,temp);
	}
	
	/*
	 * This function travels in tree for find the mod number.
	 * @return root
	 * @return tempNumberOfOcurrence It takes first mod number of numberOfOcurence
	 */
    private E travelFindMod(Node<E> root,int tempNumberOfOcurrence)
    {
    	E temp;
    	
        if (root != null) {
            travelFindMod(root.left,tempNumberOfOcurrence);
            
    		temp = (E) root.parent.find_mod();
    		
    		if(root.parent.getModNumberOfOcurrence() > tempNumberOfOcurrence)
    		{
    			tempNumberOfOcurrence = root.parent.getModNumberOfOcurrence();
    			mod = temp;
    		}
            
            travelFindMod(root.right,tempNumberOfOcurrence);
            
            return getMod();
        }
        return getMod();
    }
	
    
	/*
	 * It will remove specific element from tree
	 * @parameter element The element is value that will add
	 * @return numberOfOcurence It will return numberOfOcurrences for added item
	 */
	public int remove(E element)
    {
         root = removeRecursive(root, element);
         return getNumberOfOcurrences();
    }


	/*
	 * It will recursively travel this tree until to add this newValue
	 * @parameter root Root node
	 * @parameter newValue The newValue is value that will add
	 * @return root It will return this root that is in already there.
	 */
	private Node<E> removeRecursive(Node<E> root,E newValue)
    {
		int flag = 0;
    	int temp = root.parent.remove(newValue);
		setNumberOfOcurrences(temp);

		if(temp != -1)
		{
			if(temp == 0)
			{
				if(root.parent.getSize() == 0)
				{
					root = null;
					root = sortTree(root);
				}
				else
				{
					if(root.left != null)
						if(root.parent.getElement(0).compareTo((E)root.left.parent.getElement(0)) < 0 )
						{
							flag = 1;
							root = sortTree(root);
						}
					if(root.right != null && flag != 1)
						if(root.parent.getElement(0).compareTo((E)root.right.parent.getElement(0)) > 0)
						{
							flag = 1;
							root = sortTree(root);
						}
					if(flag != 1)
						return root;
				}
			}
			else 
				return root;
		}
		else if( root == null)
    	{
    		return root;
    	}
		else if ( root.parent.getElement(0).compareTo(newValue) > 0 && root.left != null)
        {
            root.left = removeRecursive(root.left, newValue);
        }
        else if (root.parent.getElement(0).compareTo(newValue) < 0 && root.right != null)
        {	
            root.right = removeRecursive(root.right, newValue);
        }
        
        return root;
    }
	
	/*
	 * It will sort tree like BST implementation
	 * @parameter root 
	 * @return root
	 */
	private Node<E> sortTree(Node<E> root)
	{
		if(root.left != null)
			if(root.parent.getElement(0).compareTo((E)root.left.parent.getElement(0)) < 0 )
			{
				Heap<? super E> temp = root.parent;
				root.parent = root.left.parent;
				root.left.parent = temp;
				sortTree(root.left);
				return root;
			}
		if(root.right != null)
			if(root.parent.getElement(0).compareTo((E)root.right.parent.getElement(0)) > 0)
			{
				Heap<? super E> temp = root.parent;
				root.parent = root.right.parent;
				root.right.parent = temp;
				sortTree(root.right);
				return root;
			}
		return root;
		
	}

	/*
	 * It will add newValue in tree
	 * @parameter newValue The newValue is value that will add
	 * @return numberOfOcurence It will return numberOfOcurrences for added item
	 */
	public int add(E newValue)
    {	


        root = addRecursive(root, newValue);
         
 		if(root!= null)
			System.out.println("Root-"+root.parent.getElement(0));
         return getNumberOfOcurrences();
    }
	
	/*
	 * It will recursively travel this tree until to add this newValue
	 * @parameter root Root node
	 * @parameter newValue The newValue is value that will add
	 * @return root It will return this root that is in already there.
	 */
	private Node<E> addRecursive(Node<E> root,E newValue)
    {
 
        /* 
         * If the tree is empty, we will add new Heap with newValue and return this node. 
         */
        if (root == null)
        {
        	Heap<E> newH = new Heap<E>();
        	newH.add(newValue);
            root = new Node<E>(newH);
    		setNumberOfOcurrences(0);
            return root;
        }
 
        /* 
         * If the value can add this root, it will add to this root otherwhise it will go down.
         */
        if((Integer)newValue == 5000)
        {
        	System.out.println("Burda--"+root.parent.getElement(0));
        }
    	int temp = root.parent.add(newValue);
        if((Integer)newValue == 5000)
        {
        	System.out.println("Burda--"+temp);
        }
		setNumberOfOcurrences(temp);

    	if( temp != -1)
    	{
    		return root;
    	}
        else if ( root.parent.getElement(0).compareTo(newValue) > 0)
        {
            root.left = addRecursive(root.left, newValue);
        }
        else if (root.parent.getElement(0).compareTo(newValue) < 0)
        {	
            root.right = addRecursive(root.right, newValue);
        }
 
        return root;
    }
	
	/*
	 * It will find the biggest element in tree
	 * @parameter element Element is the variable that we will search for finding the biggest variable
	 * @return It will return 
	 */
    public int find(E element)
    {
    	int temp = travelfind(root,element);
        return root.parent.getNumberOfOcurrences(temp);
    }

    private int travelfind(Node<E> root,E element)
    {
    	int temp = root.parent.Search(element);
    	
        if (root != null && temp == -1) {
            temp = travelfind(root.left,element);
            if(temp != -1)
            	return temp;
            temp = travelfind(root.right,element);
            if(temp != -1)
            	return temp;
        }
        else if(temp == -1)
        {
        	return -1;
        }
        
        return temp;
    }
	
	 /*
	  * Print function.
	  */
    public void travelPrint()
    {
         travel(root);
    }
 
    // A utility function to
    // do inorder traversal of BST
    private void travel(Node<E> root)
    {
        if (root != null) {
            root.parent.printList();
            System.out.println();
            travel(root.left);
            travel(root.right);
        }
    }
	
	
}
