.data	
	myArray: .space 400
	msg1: .asciiz "Possible! "
	msg2: .asciiz "NOT Possible! "
	msg3: .asciiz " "
	msg4: .asciiz "( "
	msg5: .asciiz ")"
.text
.globl main

main:
    li $v0,  5
    syscall             
    add $s0,$v0,$zero
    li $v0,5
    syscall             
    add $s1,$v0,$zero
    addi $t0,$zero,0
Loop:
    li $v0,5	
    syscall         #take int     
    sll $t1,$t0,2   # a = i+1
    sw $v0,myArray($t1) # array[a] = v0
    addi $t0,$t0,1  # i++
    bne $t0,$s0,Loop #  if (t0 != s0)
    
    #function call
    add $a0,$s0,$zero  # a0 = s0
    add $a1,$s1,$zero  # a1 = s1
    addi $a2,$a2,1  # a2 = 1
    jal sub   
    
    addi $t0,$zero,1
    bne $t0,$v0,else # t0 != t5
    li $v0,4     
    la $a0,msg5
    syscall     # cout<<")";
    li $v0,4
    la $a0,  msg1  # cout<<"Possible !";
    syscall 
    li $v0,10
    syscall
else:
    li $v0,4
    la $a0,  msg2
    syscall    # cout<<"Not Possible !";
    li $v0,10
    syscall

sub:
   addi $sp,$sp,-4
   sw $ra,0($sp)
   
   bne $a0,$zero,recall   # a0 == 0
   bne $a1,$zero,funcElse   # a1 == 0
   
   add $t3,$a0,$zero  # t3 take a0 like a temp value
   li $v0,4
   la $a0,msg4     # cout<<"( ";
   syscall 
   add $a0,$t3,$zero  # a0 take original value from t3
      
   addi $v0,$zero,1  # return value is 1
   lw $ra,0($sp)
   addi $sp,$sp,4
   jr $ra
funcElse:
   addi $v0,$zero,0
   lw $ra,0($sp)
   addi $sp,$sp,4
   jr $ra        # retrun 0
           
recall:
   subi $a0,$a0,1 # size-1
   sll $t1,$a0,2
   lw $t0,myArray($t1) #
   sub $a1,$a1,$t0 # num-arr[size-1]
   jal sub
   sll $t1,$a0,2
   lw $t0,myArray($t1)
   add $a1,$a1,$t0 # num+arr[size-1]
   addi $a0,$a0,1 #size+1  
   
   beq $v0,$a2,return1 # return == 1

   subi $a0,$a0,1 # size-1
   jal sub
   addi $a0,$a0,1 #size+1  
   
   beq $v0,$a2,return2 # return == 1
   j return3

return1:
   add $t3,$a0,$zero
   add $a0,$t0,$zero      
   li $v0,1  
   syscall        #print possible number
   li $v0,4
   la $a0,msg3
   syscall        # print 1 space
   add $a0,$t3,$zero
   lw $ra,0($sp)
   addi $sp,$sp,4
   addi $v0,$zero,1
   jr $ra

return2:
   lw $ra,0($sp)
   addi $sp,$sp,4
   addi $v0,$zero,1
   jr $ra     # return 1

return3:
   lw $ra,0($sp)
   addi $sp,$sp,4
   addi $v0,$zero,0
   jr $ra     # return 0


