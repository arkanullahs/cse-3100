import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const availableCats = [
  { name: "Whiskers", age: "2", breed: "Siamese" },
  { name: "Mittens", age: "2", breed: "Persian" },
  { name: "Shadow", age: "1", breed: "Bengal" },
  { name: "Pumpkin", age: "3", breed: "Persian" },
  { name: "Luna", age: "4", breed: "Siamese" },
  { name: "Simba", age: "2", breed: "Bengal" },
  { name: "Oliver", age: "5", breed: "Bengal" },
  { name: "Milo", age: "1", breed: "Birman" },
  { name: "Leo", age: "3", breed: "Sphynx" },
  { name: "Bella", age: "2", breed: "Abyssinian" },
  { name: "Charlie", age: "4", breed: "Sphynx" },
  { name: "Lucy", age: "1", breed: "Persian" },
  { name: "Max", age: "6", breed: "Abyssinian" },
  { name: "Tiger", age: "2", breed: "Peterbald" },
  { name: "Nala", age: "3", breed: "Siamese" },
  { name: "Oscar", age: "4", breed: "Peterbald" },
  { name: "Lily", age: "2", breed: "Birman" },
  { name: "Loki", age: "1", breed: "Siamese" },
  { name: "Coco", age: "5", breed: "Persian" },
  { name: "Ziggy", age: "2", breed: "Bengal" },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages); // Initialize filteredCats with all cats
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  const handleBreedFilter = (breed) => {
    if (breed === "all") {
      setFilteredCats(cats);
    } else {
      setFilteredCats(cats.filter((cat) => cat.breed === breed));
    }
  };

  return (
    <section className="text-center mt-4">
      <div className="d-flex align-items-center gap-5 mb-4" style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h2>Available Cats</h2>
        <div className="d-flex gap-2">
          <select
            onChange={(e) => handleBreedFilter(e.target.value)}
            className="form-select"
            style={{ width: 'auto', minWidth: '150px' }}
          >
            <option value="all">Select breed</option>
            <option value="Siamese">Siamese</option>
            <option value="Persian">Persian</option>
            <option value="Bengal">Bengal</option>
            <option value="Birman">Birman</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Peterbald">Peterbald</option>
          </select>

          <input
            type="text"
            onChange={(e) => {
              const searchText = e.target.value.toLowerCase();
              setFilteredCats(
                cats.filter((cat) =>
                  cat.name.toLowerCase().includes(searchText)
                )
              );
            }}
            className="form-control"
            placeholder="Search by name"
            style={{ width: 'auto', minWidth: '200px' }}
          />
        </div>
      </div>
      {/* Filter */}
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-lg-3 col-md-4 col-sm-6">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              <div className="cat-info">
                <h3 className="h5 mb-2">{cat.name}</h3>
                <div className="cat-details">
                  <p>
                    <i
                      className="fas fa-birthday-cake"
                      style={{ color: "#ff7f50" }}
                    ></i>{" "}
                    {cat.age} years
                  </p>
                  <p>
                    <i
                      className="fas fa-paw"
                      style={{ color: "#6a5acd" }}
                    ></i>{" "}
                    {cat.breed}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
