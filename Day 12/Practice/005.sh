read num
res=""

while [ $num -gt 0 ]
do
    dig=$(( $num%10 ))
    
    case $dig in
        0) res="zero "$res ;;
        1) res="one "$res ;;
        2) res="two "$res ;;
        3) res="three "$res ;;
        4) res="four "$res ;;
        5) res="five "$res ;;
        6) res="six "$res ;;
        7) res="seven "$res ;;
        8) res="eight "$res ;;
        9) res="nine "$res ;;
    esac

    num=$(( $num/10 ))
done

echo $res