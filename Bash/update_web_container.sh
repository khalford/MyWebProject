docker cp HTML web:/usr/share/nginx
docker exec -i web bash <<EOF
rm -rd /usr/share/nginx/html
mv /usr/share/nginx/HTML /usr/share/nginx/html
exit
EOF