.data

str2: .space 16          #   One Number Array
str3: .space 24          #   Array 
temp_srt3: .space 24     #   Temp Array
temp2_srt3: .space 24    #   Print Array
new_line: .asciiz "\n"
space: .asciiz " "
message: .asciiz "Longest Sequence:"

finp: .asciiz "file.txt" # filename for output
.globl main
.text

main:

jal read_file_func

j Exit




# $a1 - str2 array addres for reading
# $t0 - counter for digit of number
# $t1 - save the read character for controlling that it is space or new line 
# $t2 - save new line character
# $t3 - save space character 
# $t4 - saves the hexadecimal of first digit of number
# $t5 - saves the hexadecimal of second digit of number
# $t6 - str3 array address for saving

read_file_func:
addi $sp,$sp,-4		# make space in $sp register
sw $ra,0($sp)		# save the return address to $sp register


# Open (for reading) a file that does not exist
li $v0, 13 		# system call for open file
la $a0, finp 		# input file name
li $a1, 0 		# Open for reading (flags are 0: read, 1: write)
li $a2, 0		# mode is ignored
syscall 		# open a file (file descriptor returned in $v0)
move $s6, $v0 		# save the file descriptor

# Read from file just opened
addi $t2,$t2,0x0000000a	# save new line character
addi $t3,$t3,0x00000020	# save space character
Outer_Loop:
li $t0,0		# $t0 is counter of digit of number
la $a1,str2		# address of buffer from which to write
la $t6,str3		# save the address of str3 to $a3 register


Inner_Loop:
li $v0, 14 		# system call for read from file
move $a0, $s6 		# file descriptor
li $a2, 1		# number of characters to read
syscall 		# Read from file


addi $a1,$a1,4		# address of buffer from which to read
addi $t0,$t0,1		# counter++
lw $t1,-4($a1)		# save the read character to $t1 register


beq $v0, $zero,save_to_array	#if the file pointer is in end of file
beq $t2,$t1,save_to_array	#if the file poiinter is in new line character
bne $t1,$t3,control_loop	#if the file pointer doesn't read space character

save_to_array:
li $t4,0		# reset $t5 register
li $t5,0		# reset $t6 register


# This loop decrease address of $a1 to start address
loop:
addi $a1,$a1,-4		
addi $t0,$t0,-1
bne $t0,0,loop

lw $t4,0($a1)
lw $t5,4($a1)

beq $t5,$t3,save_one_character		#if the second character is space it will save just first character
beq $t5,$t2,save_one_character		#if the second character is new line it will save just first character


sll $t4,$t4,8		# shifted 8 byte
add $t4,$t4,$t5		# we make together first and second character 
save_one_character:
sw $t4,0($t6)		# store number to the array
addi $t6,$t6,4		# go second index of array


control_loop:
beq $v0, $zero,Call_recursive_function	# if the file pointer is in end of file go to close file
bne $t2,$t1,Inner_Loop		# inner loop is read the first line


###########   -----  Recursive Max Squence Find Funciton CALL  -----  #############
Call_recursive_function:

addi $sp,$sp,-24
sw $t0,0($sp)
sw $t1,4($sp)
sw $t2,8($sp)
sw $t3,12($sp)
sw $t4,16($sp)
sw $s6,20($sp)

la $s7,temp_srt3
la $t7,temp2_srt3
la $s6,str3
li $s0,6
li $s1,0
li $s2,0
li $s3,0
li $s4,0
li $s5,0

jal recursive_max_squence_finder
lw $t0,0($sp)
lw $t1,4($sp)
lw $t2,8($sp)
lw $t3,12($sp)
lw $t4,16($sp)
lw $s6,20($sp)
addi $sp,$sp,24

#####   ------ Print Longest Array -----   #####
addi $sp,$sp,-4		
sw $a0,0($sp)	
la $a0,message
li $v0,4
syscall
lw $a0,0($sp)
addi $sp,$sp,4

li $t0,0
beq $s5,0,print_array_end
la $a0,temp2_srt3
print_array:

li $v0,4
syscall

addi $sp,$sp,-4		
sw $a0,0($sp)	
la $a0,space
li $v0,4
syscall
lw $a0,0($sp)
addi $sp,$sp,4

addi $s5,$s5,-1
addi $a0,$a0,4
bne $s5,0,print_array
print_array_end:

addi $sp,$sp,-4		
sw $a0,0($sp)	
la $a0,new_line
li $v0,4
syscall
lw $a0,0($sp)
addi $sp,$sp,4

beq $v0, $zero,end_of_file	# if the file pointer is in end of file go to close file
beq $t2,$t1,Outer_Loop		# inner loop is read the first line


###############################################################
# Close the file
end_of_file:
li $v0, 16 		# system call for close file
move $a0, $s6 		# file descriptor to close
syscall 


lw $ra,0($sp)
addi $sp,$sp,4
jr $ra	



# t0,t1,t2,t3
#   $s0   -   size
#   $s1   -   i
#   $s2   -   i_1
#   $s3   -   seq_number
#   $s4   -   seq_counter
#   $s5   -   seq_len
#   $s6   -   str3
#   $s7   -   temp_srt3
#   $t7   -   temp2_srt3


recursive_max_squence_finder:
addi $sp,$sp,-16		# make space in $sp register
sw $ra,0($sp)		
sw $s1,4($sp)		
sw $s2,8($sp)		
sw $t4,12($sp)


beq $s1,$s0,rec_loop_exit

#### ---- Loop ---- ####   for (;i<size;i++) 
rec_loop:
####  ----  if  ----- ###    
mul $t3,$s1,4
add $s6,$s6,$t3
lw $t1,0($s6)
sub $s6,$s6,$t3

#  if(seq_number <= *(arr+i))
beq $s3,$t1,rec_loop_if
slt $t0,$s3,$t1
bne $t0,1,rec_loop_control
rec_loop_if:

# ---- *(temp_arr+i_1) = *(arr+i);
mul $t3,$s1,4
add $s6,$s6,$t3
lw $t1,0($s6)
sub $s6,$s6,$t3

mul $t3,$s2,4
add $s7,$s7,$t3
sw $t1,0($s7)
sub $s7,$s7,$t3	
# -------

addi $t4,$s3,0

# ---- seq_number = str3 array element
mul $t3,$s1,4
add $s6,$s6,$t3
lw $s3,0($s6)
sub $s6,$s6,$t3

# ---   i++
addi $s1,$s1,1
# ---   i_1++
addi $s2,$s2,1
# ---   seq_counter++
addi $s4,$s4,1

jal recursive_max_squence_finder

addi $s3,$t4,0

sub $s1,$s1,1
sub $s2,$s2,1
sub $s4,$s4,1



rec_loop_control:
addi $s1,$s1,1    #  i++
bne $s1,$s0,rec_loop    #  size != i
rec_loop_exit:


# -------      if(seq_counter >= *seq_len)
beq $s4,$s5,rec_second_if
slt $t0,$s4,$s5
beq $t0,1,return
rec_second_if:


# -------     for(int j=0;j<seq_counter;j++ )
li $t2,0
beq $t2,$s4,rec_second_if_end_loop
rec_second_if_loop:

mul $t3,$t2,4
# -----           *(print_arr+j) = *(temp_arr+j);
add $s7,$s7,$t3
lw $t1,0($s7)
sub $s7,$s7,$t3

add $t7,$t7,$t3
sw $t1,0($t7)
sub $t7,$t7,$t3

addi $t2,$t2,1  #  j++
bne $t2,$s4,rec_second_if_loop   #   j!= seq_counter

rec_second_if_end_loop:
addi $s5,$s4,0  #   seq_len = seq_counter

return:
lw $ra,0($sp)
lw $s1,4($sp)
lw $s2,8($sp)
lw $t4,12($sp)
addi $sp,$sp,16
jr $ra	


Exit:



