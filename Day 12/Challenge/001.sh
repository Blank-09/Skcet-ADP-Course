read num

prev=0
curr=1

while [ $num -gt 0 ]
do 
    echo $prev
    sum=$(( $prev+$curr ))
    prev=$curr
    curr=$sum
    num=$(( num-1 ))
done