read num

if [ $(( num%2 == 0 )) == 1 ]
then
    echo "$num is even"
else
    echo "$num is Odd"
fi
