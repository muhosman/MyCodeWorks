package com.part1;

import java.util.HashMap;

public class MapIterator<K, V>
{
	K Keys[];
	int index;
	K prev;
	
	/**Default constructor
	 * 
	 */
	public MapIterator() 
	{
		index = 0;
	}
	
	/**Constructor,The iterator should start from the given key and still iterate though all the keys in the Map. 
	 The iterator starts from any key in the Map when the starting key is not in the Map or not specified (zero parameter constructor).
	 * 
	 * @param key It is the start index.
	 */
	public MapIterator (K key){
		index = key.hashCode();
		prev = null;
	}
	
	/**It takes the hashmap keyset and assign to the Keys array.
	 * 
	 * @param map 
	 */
	public void SetMap(HashMap<K,V> map)
	{
		Keys =(K[]) map.keySet().toArray();
	}
	
	/**The function returns the next key in the Map. It returns the first key when there is no not-iterated key in the Map.
	 * 
	 * @return K It returns the generic type of Key.
	 */
	public K next()
	{	
		if(index > Keys.length)
		{
			index = index % Keys.length;
		}
		if(index < 0)
		{
			while(index < 0)
			{
				index += Keys.length;
			}
		}

		if(!hasNext())
		{
			return Keys[index];
		}
		else
		{
			index++;
			return Keys[index];
		}
	}
	/**	The iterator points to the previous key in the Map. It returns the last key when the iterator is at the first key.
	 * 
	 * @return
	 */
	public K prev()
	{
		if(index == 0)
			return Keys[Keys.length-1];
		else
			return Keys[index-1];
	}
	/**The method returns True if there are still not-iterated key/s in the Map, otherwise returns False.
	 * 
	 * @return Boolean It returns boolean.
	 */
	public boolean hasNext()
	{
		if(index+1 == Keys.length)
			return false;
		else
			return true;
	}
}