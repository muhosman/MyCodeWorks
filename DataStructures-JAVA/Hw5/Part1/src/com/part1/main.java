package com.part1;

import java.util.HashMap;

public class main {

	public static void DriverFunction()
	{

        HashMap<String, Integer> hashmap = new HashMap<String, Integer>();
  
        // Adding mappings to HashMap
        hashmap.put("Osman", 54);
        hashmap.put("Omer", 80);
        hashmap.put("Ali", 82);
        hashmap.put("Furkan", 100);
        hashmap.put("Faruk", 40);
        hashmap.put("Ferdi", 30);
        hashmap.put("Hasan", 20);
        hashmap.put("Arda", 10);
        hashmap.put("Yattara", 5);

        // Printing the HashMap
        System.out.println("Created hashmap is" +hashmap);
        
        MapIterator<String,Integer> hmIterator = new MapIterator<String,Integer>("Ali");
        
        hmIterator.SetMap(hashmap);
        
        System.out.println();
        System.out.println();
        System.out.println("First Hash Map With Key Constructor:");

        while (hmIterator.hasNext()) {
            String key = hmIterator.next();
            String prevkey = hmIterator.prev();
            
            System.out.println("Next :"+hashmap.get(key) + " : " + key );
            System.out.println("Prev :"+hashmap.get(prevkey) + " :: " + prevkey);
            System.out.println();
        }        
        
        MapIterator<String,Integer> hmIterator2 = new MapIterator<String,Integer>();
        
        hmIterator2.SetMap(hashmap);
        
        System.out.println();
        System.out.println();
        System.out.println("Second Hash Map With Default Constructor:");
        
        while (hmIterator2.hasNext()) {
            String key = hmIterator2.next();
            String prevkey = hmIterator2.prev();
            
            System.out.println("Next :"+hashmap.get(key) + " : " + key );
            System.out.println("Prev :"+hashmap.get(prevkey) + " :: " + prevkey);
            System.out.println();
        }        
	}
	public static void main(String[] args) {

			DriverFunction();
	}

}
