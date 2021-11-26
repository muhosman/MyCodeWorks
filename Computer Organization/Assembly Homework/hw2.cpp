#include <iostream>
using namespace std;

int CheckSumPossibility(int num,int arr[],int arraySize)
{
    if(arraySize == 0)
    {
        if(num == 0)
        {
            return 1;
        }
        return 0;
    }
    if(CheckSumPossibility(num-arr[arraySize-1],arr,arraySize-1))
    {
        cout<<arr[arraySize-1]<<" ";
        return 1;
    }
    if(CheckSumPossibility(num,arr,arraySize-1))
    {
        return 1;
    }
    return 0;
}



int main() {

    int arraySize;
    int arr[100];
    int num;
    int returnVal;
    cin>>arraySize;
    cin>>num;
    for(int i=0;i<arraySize;++i)
    {
        cin>>arr[i];
    }
    returnVal=CheckSumPossibility(num,arr,arraySize);
    if(returnVal==1){
        cout<<"Possible!"<<endl;
    }
    else{
        cout<<"Notpossible!"<<endl;

    }
    return 0;
}
