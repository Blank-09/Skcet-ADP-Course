read n

i=2
l=$(( $n/2 ))

count=0

while [ $i -lt $l ]
do
    if [ $(( $n%$i == 0 )) == 1 ]; then
        count=$(( count+1 ))
        n=$(( $n/$i ))
    fi

    if [ $count -eq 1 ]; then
        echo "Not Prime"
        exit 0
    fi
    i=$(( $i+1 ))
done

echo "Prime"