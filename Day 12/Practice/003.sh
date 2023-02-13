read n

sum=0
i=$n

while [ $i -gt 0 ]
do
    read a
    sum=$(( $sum+$a ))
    i=$(( i-1 ))
done

echo $(( $sum/$n ))