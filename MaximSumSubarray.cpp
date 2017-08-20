/**
 * Maximum sum of subarray less than or equal to x
 */

#include <iostream>
using namespace std;

int maximumSum(int array[], int sum, int size){
	int maximumsum = 0;
	bool foundMaxSum = false;

	/*
		Iterate Through Array 
	 */
	for(int i=0; i< size; i++){
		for(int j=i; j<size; j++){
			maximumsum = maximumsum + array[j];
			if(maximumsum > sum){
				maximumsum = maximumsum - array[j];
				foundMaxSum = true;
				break;
			}
		}

		if(foundMaxSum){
			break;
		}else{
			maximumsum = 0;
		}
	}
	return maximumsum;
}

int main(){
	int array[] = {1, 2, 3, 4, 5};
	return cout << maximumSum(array,11, sizeof(array)/sizeof(array[0]));
}


