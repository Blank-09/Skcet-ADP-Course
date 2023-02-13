read str
rev=`echo $str | rev`

if [ $str == $rev ]
then
    echo "$str is palindrome"
else
    echo "$str is not palindrome"
fi