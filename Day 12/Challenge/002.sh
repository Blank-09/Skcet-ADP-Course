read num

i=0

while [ $i -lt 10 ]
do
    i=$(( $i+1 ))
    echo "$num x $i = "$(( $i*$num ))
done