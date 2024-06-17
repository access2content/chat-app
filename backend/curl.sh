# Without Authentication
echo "===== No Auth ====="
curl \
-X GET localhost:8080
echo ""

# With Authentication
echo "===== With Auth ====="
curl \
-X GET localhost:8080 \
-H "Authorization: Basic dGVzdDpoYWNraW5n"
echo ""

# With Authentication and correct credentials
echo "===== With Auth + Credentials ====="
curl \
-X GET localhost:8080 \
-H "Authorization: Basic dXNlcm5hbWU6aGFja2luZw=="
echo ""