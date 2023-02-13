read num
digit=0
rev=""

while [ $num -gt 0 ]
do
    digit=$(( num%10 ))
    num=$(( num/10 ))
    rev=$(echo ${rev}${digit})
done

echo "$rev"