for i in *_4.pdf
do
    mv "$i" "`echo $i | sed 's/_4//'`"
done
