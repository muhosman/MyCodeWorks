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
	
	public int add(E newValue)
    {
         root = addRecursive(root, newValue);
         return getNumberOfOcurrences();
    }
	
	/*
	 * It will recursively travel this tree until to add this newValue
	 * @parameter root Root node
	 * @parameter newValue The newValue is value that will add
	 * @return root It will return this root that is in already there.
	 */
	public Node<E> addRecursive(Node<E> root,E newValue)
    {
 
        /* 
         * If the tree is empty, we will add new Heap with newValue and return this node. 
         */
        if (root == null)
        {
        	Heap<E> newH = new Heap<E>();
        	newH.add(newValue);
            root = new Node<E>(newH);
            return root;
        }
 
        /* 
         * If the value can add this root, it will add to this root otherwhise it will go down.
         */
    	int temp = root.parent.add(newValue);
    	
    	if( temp != -1)
    	{
    		setNumberOfOcurrences(temp);
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
	  * Print function.
	  */
    void travelPrint()
    {
         travel(root);
    }
 
    // A utility function to
    // do inorder traversal of BST
    void travel(Node<E> root)
    {
        if (root != null) {
            travel(root.left);
            root.parent.printList();
            System.out.println();
            travel(root.right);
        }
    }
	
	
}
