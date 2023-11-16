curl -X POST -H "Content-Type: application/json" -d '{"model": "Toyota", "year": "2015", "rate": 5}' localhost:3000/api/car
curl -X POST -H "Content-Type: application/json" -d '{"model": "Honda", "year": "2016", "rate": 4}' localhost:3000/api/car
curl -X POST -H "Content-Type: application/json" -d '{"model": "Ford", "year": "2017", "rate": 3}' localhost:3000/api/car
curl -X POST -H "Content-Type: application/json" -d '{"model": "Chevy", "year": "2018", "rate": 2}' localhost:3000/api/car
curl -X POST -H "Content-Type: application/json" -d '{"model": "Tesla", "year": "2019", "rate": 1}' localhost:3000/api/car

echo ""
echo ""
echo "db was seeded"
echo ""
echo ""
