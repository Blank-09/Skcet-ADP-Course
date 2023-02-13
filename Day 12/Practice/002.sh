read n

res=0
dig=0
temp=$n

while [ $n -gt 0 ]
do 
    dig=$(( $n%10 ))
    res=$(( $res+$dig ))
    n=$(( $n/10 ))
done

echo "Sum of the digits of $temp is $res"