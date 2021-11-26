#include <stdio.h>


#include <stdio.h>


void recursive_max_squence_finder(
   int *temp_arr,
   int *print_arr,
   int *arr,
   int size,
   int i,
   int i_1,
   int seq_number,
   int seq_counter,
   int *seq_len);

int main()
{
   int arr[6];
   int print_arr[6];
   int temp_arr[6];
   int i;
   int temp;
   int seq_len =0;
   int size=6;

   FILE *fp;
   
   fp = fopen("file.txt","r");

   if(fp != NULL)
   {

   while(1){
      for (i = 0; fscanf(fp,"%d",&arr[i]) == 1 && i < 5  ; i++);
      
      if (i!=0)
      {
         seq_len = 0;
         recursive_max_squence_finder(temp_arr,print_arr,arr,size,0,0,0,0,&seq_len);
      }
      else
         break;
      for ( i = 0; i < seq_len; i++)
      {
         printf("%d  ",print_arr[i]);
      }
   }
      
   }
   else
      printf("Açılmadı.");

    

    return 0;
}

void recursive_max_squence_finder(
   int *temp_arr,
   int *print_arr,
   int *arr,
   int size,
   int i,
   int i_1,
   int seq_number,
   int seq_counter,
   int *seq_len
   ){



        for (;i<size;i++) {
            if(seq_number <= *(arr+i))
            {
               seq_counter++;
               *(temp_arr+i_1) = *(arr+i);
               recursive_max_squence_finder(temp_arr,print_arr,arr,size,i+1,i_1+1,*(arr+i),seq_counter,seq_len);
               seq_counter--;
            }
        }

    if(seq_counter >= *seq_len)
    {
       for(int j=0;j<seq_counter;j++ )
       {
          *(print_arr+j) = *(temp_arr+j);
       }

       //printf("Sequence-leng:%d \n\n",seq_counter);
       *seq_len = seq_counter;
    }
}

