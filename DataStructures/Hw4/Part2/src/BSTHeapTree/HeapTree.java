package BSTHeapTree;

public class HeapTree<E extends Comparable<E>> {
	
	private class Node<E>
    {
        private Heap<E> parent;
        private Node<E> left, right;
        
        /*
         * Constructor of Node
         * @parameter item It is a new Heap item.
         */
        public Node(Heap<E> item)
        {
            parent = item;
            left = null; 
            right = null;
        }
    }
	
	private Node<E> root;

	
	/*
	 * Constructor
	 */
	public HeapTree()
	{
		root = null;
	}
	
	public void add(E newValue)
    {
         root = insertRec(root, newValue);
    }
	
	public Node<E> addRecursive(Node<E> root,E newValue)
    {
 
        /* If the tree is empty,
           return a new node */
        if (root == null)
        {
        	Heap<E> newH = new Heap<E>();
        	newH.add(newValue);
            root = new Node<E>(newH);
            return root;
        }
 
        /* Otherwise, recur down the tree */
        if ( root.parent.getElement(0).compareTo(newValue) > 0)
        {
        	int temp = root.parent.add(newValue);
        	if( temp != -1)
        	{
        		return root;
        	}
        	
            root.left = addRecursive(root.left, newValue);
        }
        else if (root.parent.getElement(0).compareTo(newValue) < 0)
        {
        	int temp = root.parent.add(newValue);
        	if( temp != -1)
        	{
        		return root;
        	}
        	
            root.right = addRecursive(root.right, newValue);

        }
 
        /* return the (unchanged) node pointer */
        return root;
    }
	
	
}
