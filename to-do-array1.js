//1. Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

var arr=[1,2,3,4];
console.log(arr);
var value = 0;

function pushFront(arr, value){
    for(var i=arr.length-1; i>=0; i--){
        arr[i+1] = arr[i];
    }
    arr[0] = value;
    return arr;
}

console.log(pushFront(arr, value));
///////////////////////////////////////////////

//2. Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr){
    temp = arr[0];
    for (var i=0; i<arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    console.log(arr);
    return temp;
}
var arr=[5,6,7,8];
console.log(popFront(arr));

///////////////////////////////////////////////

//3. Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

var z=[9,10,11,12];
console.log(z);
var additionalVal= 20;
z[2] = additionalVal;
console.log(z);

////////////////////////////////////////////////

//4. Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

var a=[13,14,15,16];
console.log(a);
popper=a.pop();
a[3] = popper;
console.log(a);

/////////////////////////////////////////////////

//5. Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapper(arr){
    for (var i=0; i<arr.length-1; i++){
        if (arr.length%2==0){
            counter1 = arr[i];
            counter2 = arr[i+1];
            arr[i]=counter2;
            arr[i+1]=counter1;
            i=i+1;
        }
        else if (arr.length%2==1){
            counter1 = arr[i]; //5, 7
            counter2 = arr[i+1];//6, 8
            arr[i]=counter2;
            arr[i+1]=counter1;
            i+=1;
        }
    }
    console.log(arr);
}

var b= swapper([5,6,7,8,9, 10]);
/////////////////////////////////////////////////////

//6. Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

//Second: Solve this without using any nested loops.

function sorted(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]==arr[i+1] || arr[i-1]==arr[i]){
            arr.splice(arr[i], arr[i+1]);
        }
    }
    console.log(arr);
}
sorted([1,1,1,2,2,2,2,3,4,4,4])
