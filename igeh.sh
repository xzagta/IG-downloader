read -p 'Link IG : ' gtaumales

curl -X GET https://www.instadownloader.org/data.php?url=$gtaumales | awk -F\| '{ print $2}';

print ${2}
print 2
print $2
