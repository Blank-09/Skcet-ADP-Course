read str
read sub

rest=${str#*$sub}
res=$(( ${#str} - ${#rest} - ${#sub} ))

if [ $res -lt 0 ]
then
    echo 0
else
    echo $(( $res + 1 ))
fi